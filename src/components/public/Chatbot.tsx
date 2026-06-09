"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  MessageSquare, Sparkles, X, Send, Trash2, Loader2, 
  AlertCircle, ArrowRight, RefreshCw, HelpCircle, ExternalLink
} from "lucide-react";
import { chatApiPath } from "@/lib/erpApi";

interface SourceCitation {
  title: string;
  url: string;
  score: number;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
  sources?: SourceCitation[];
}

const SUGGESTED_PROMPTS = [
  "What is LM Integrated School?",
  "How can I get a scholarship?",
  "Who are the faculty members?",
  "What JEE & NEET results did you get?",
];

// Helper to generate a basic UUID in client-side environment
function generateUUID(): string {
  return "session-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingHistory, setLoadingHistory] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Session ID and Load Chat History on Mount
  useEffect(() => {
    let savedSessionId = localStorage.getItem("lm_chat_session_id");
    if (!savedSessionId) {
      savedSessionId = generateUUID();
      localStorage.setItem("lm_chat_session_id", savedSessionId);
    }
    setSessionId(savedSessionId);
    loadChatHistory(savedSessionId);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 1. Fetch Chat History
  const loadChatHistory = async (sessId: string) => {
    if (!sessId) return;
    setLoadingHistory(true);
    setError(null);
    try {
      const res = await fetch(chatApiPath(`/chat/history/${sessId}`));
      if (res.ok) {
        const data = await res.json();
        if (data.history && Array.isArray(data.history)) {
          // Map backend history turns to ChatMessage interface
          const mappedHistory: ChatMessage[] = data.history.map((h: any) => ({
            role: h.role,
            content: h.content,
            timestamp: h.timestamp || Date.now(),
          }));
          setMessages(mappedHistory);
        }
      }
    } catch (err) {
      console.error("Error loading chat history:", err);
      // Fail silently to not impact core user experience
    } finally {
      setLoadingHistory(false);
    }
  };

  // 2. Clear Chat History
  const handleClearHistory = async () => {
    if (!sessionId) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(chatApiPath(`/chat/history/${sessionId}`), {
        method: "DELETE",
      });
      if (res.ok) {
        setMessages([]);
      } else {
        throw new Error("Failed to clear history on server");
      }
    } catch (err) {
      console.error("Error clearing history:", err);
      setError("Failed to clear chat history. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 3. Send Message
  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || loading || !sessionId) return;

    if (trimmed.length > 250) {
      setError("Message cannot exceed 250 characters.");
      return;
    }

    setError(null);
    setInputMessage("");
    
    // Add user message immediately
    const userMsg: ChatMessage = {
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch(chatApiPath("/chat/message"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          session_id: sessionId,
        }),
      });

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Rate limit exceeded. You can send up to 15 messages per minute.");
        }
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || "Failed to send message");
      }

      const replyData = await res.json();
      
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: replyData.reply,
        timestamp: Date.now(),
        sources: replyData.sources,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error("Chat message sending failed:", err);
      setError(err.message || "Something went wrong. Please check your connection.");
      
      // Remove the unsent user message or keep it with an error flag?
      // For better UX, we just keep the message but show an error banner
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FLOAT ACTION BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-ink-950 text-white flex items-center justify-center shadow-brand-lg hover:scale-110 border border-brand-gold-500/50 hover:border-brand-gold-400 transition-all duration-300 z-[95] cursor-pointer"
        aria-label="Ask LakshyaMarch AI"
      >
        <span className="absolute right-full mr-4 whitespace-nowrap bg-ink-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:border-4 after:border-transparent after:border-l-ink-900">
          <Sparkles size={12} className="text-brand-gold-400 animate-pulse" />
          Ask Support AI
        </span>
        {isOpen ? (
          <X size={22} className="text-brand-gold-400 transition-transform duration-300 rotate-90" />
        ) : (
          <Sparkles size={24} className="text-brand-gold-400 group-hover:animate-pulse" />
        )}
      </button>

      {/* CHAT WINDOW INTERFACE */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] rounded-xl border border-ink-800 bg-ink-900/95 backdrop-blur-md shadow-2xl z-[90] flex flex-col overflow-hidden ring-1 ring-white/5 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-br from-brand-blue-900 via-brand-blue-950 to-brand-blue-900 px-4 py-4 border-b border-ink-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-ink-950 flex items-center justify-center border border-brand-gold-500/30">
                <Sparkles size={18} className="text-brand-gold-400 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-display font-extrabold text-white leading-none">
                  LM Support AI
                </h4>
                <p className="text-[10px] font-sans text-brand-green-400 font-semibold uppercase tracking-wider mt-1 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green-500 inline-block animate-pulse"></span>
                  Active Agent
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {messages.length > 0 && (
                <button
                  onClick={handleClearHistory}
                  disabled={loading}
                  title="Clear conversation"
                  className="h-8 w-8 rounded-md hover:bg-white/10 text-ink-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Trash2 size={15} />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-md hover:bg-white/10 text-ink-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {loadingHistory ? (
              <div className="h-full flex items-center justify-center flex-col gap-2">
                <Loader2 size={24} className="text-brand-gold-400 animate-spin" />
                <span className="text-xs text-ink-400">Loading history...</span>
              </div>
            ) : messages.length === 0 ? (
              // Welcome State
              <div className="h-full flex flex-col justify-center py-6 text-center">
                <div className="h-14 w-14 rounded-full bg-brand-blue-900/30 border border-brand-blue-800/50 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={24} className="text-brand-gold-400" />
                </div>
                <h5 className="text-sm font-display font-bold text-white mb-1">
                  Welcome to LakshyaMarch Help Desk
                </h5>
                <p className="text-xs text-ink-400 max-w-[280px] mx-auto mb-6">
                  Ask me anything about admissions, IIT-JEE or NEET classes, fee waivers, study DPPs, and our faculty!
                </p>
                
                {/* Suggestions */}
                <div className="space-y-2 max-w-[320px] mx-auto text-left">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-ink-500 mb-1 ml-1 flex items-center gap-1">
                    <HelpCircle size={10} /> Suggested Questions
                  </p>
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSendMessage(prompt)}
                      className="w-full text-left text-xs bg-ink-950/60 border border-ink-800/80 hover:border-brand-gold-500/30 hover:bg-ink-950 text-ink-300 hover:text-white p-2.5 rounded-lg transition-all duration-200 flex items-center justify-between group cursor-pointer"
                    >
                      <span>{prompt}</span>
                      <ArrowRight size={12} className="text-ink-600 group-hover:text-brand-gold-400 transition-colors shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Active Conversation
              <div className="space-y-4">
                {messages.map((msg, index) => {
                  const isUser = msg.role === "user";
                  return (
                    <div
                      key={index}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      {/* Bubble */}
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-brand-sm ${
                          isUser
                            ? "bg-gradient-to-r from-brand-red-700 to-brand-red-600 text-white rounded-tr-none border border-brand-red-500/30"
                            : "bg-ink-950/60 border border-ink-800/80 text-ink-200 rounded-tl-none"
                        }`}
                      >
                        {msg.content}
                      </div>

                      {/* Sources/Citations Display */}
                      {!isUser && msg.sources && msg.sources.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-1.5 ml-1 max-w-[85%]">
                          {msg.sources.map((src, sIdx) => (
                            <a
                              key={sIdx}
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Verified Source: ${src.title} (Score: ${(src.score * 100).toFixed(0)}%)`}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-blue-950/40 border border-brand-blue-800/40 hover:border-brand-gold-500/30 text-[10px] text-brand-gold-400 hover:text-brand-gold-300 transition-all cursor-pointer"
                            >
                              <span>{src.title}</span>
                              <ExternalLink size={8} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                {loading && (
                  <div className="flex flex-col items-start">
                    <div className="bg-ink-950/60 border border-ink-800/80 text-ink-300 rounded-2xl rounded-tl-none px-4 py-2.5 flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-brand-gold-400" />
                      <span className="text-xs">Thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Error Banner */}
          {error && (
            <div className="bg-brand-red-500/10 border-y border-brand-red-500/20 px-4 py-2 flex items-start gap-2 text-[11px] text-brand-red-400 font-medium">
              <AlertCircle size={14} className="shrink-0 mt-0.5 text-brand-red-400" />
              <div className="flex-1 leading-snug">{error}</div>
              <button onClick={() => setError(null)} className="text-ink-400 hover:text-white shrink-0 font-bold">✕</button>
            </div>
          )}

          {/* Footer Input Area */}
          <div className="p-3 bg-ink-950/80 border-t border-ink-800/60 flex flex-col gap-1.5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputMessage);
              }}
              className="flex items-center gap-2 relative"
            >
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(inputMessage);
                  }
                }}
                placeholder="Ask your question here..."
                maxLength={250}
                disabled={loading}
                className="flex-1 h-10 min-h-[40px] max-h-[100px] py-2.5 pl-3 pr-10 rounded-lg bg-ink-900 border border-ink-800 text-white placeholder:text-ink-600 text-xs sm:text-sm focus:outline-none focus:border-brand-gold-500/40 hover:border-ink-700 resize-none transition-all scrollbar-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-7.5 w-7.5 rounded-md bg-brand-gold-500 hover:bg-brand-gold-400 disabled:bg-ink-800 text-ink-950 disabled:text-ink-600 flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                <Send size={13} strokeWidth={2.5} />
              </button>
            </form>
            
            {/* Input helpers and character limits */}
            <div className="flex items-center justify-between px-1 text-[9px] text-ink-500 font-semibold tracking-wide uppercase">
              <span>NVIDIA LLM Powered support</span>
              <span className={inputMessage.length > 220 ? "text-brand-red-400" : ""}>
                {inputMessage.length}/250 chars
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
