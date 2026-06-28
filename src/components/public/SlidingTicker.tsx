import React from "react";

export default function SlidingTicker() {
  return (
    <div className="bg-gradient-to-r from-[#40060f] via-[#630919] to-[#40060f] border-b border-[#801a2d] h-10 relative overflow-hidden flex items-center select-none z-30 shadow-[0_2px_10px_rgba(0,0,0,0.3)] w-full">
      <style>{`
        /* Master translation timeline: 20 seconds loop */
        @keyframes slideAndCelebrate {
          0% { transform: translateX(-100%); }
          55% { transform: translateX(calc(100vw - 4rem - 100% - 32px)); } /* Stops with 32px clearance from pedestal */
          70% { transform: translateX(calc(100vw - 4rem - 100% - 32px)); } /* Wears cap, celebrates & bursts stars */
          100% { transform: translateX(100vw); } /* Exits right smoothly */
        }
        .animate-run-slide {
          animation: slideAndCelebrate 20s linear infinite;
        }
        
        /* Runner state visibility */
        @keyframes runnerVis {
          0%, 54.9% { opacity: 1; }
          55%, 70% { opacity: 0; }
          70.1%, 100% { opacity: 1; }
        }
        .state-runner {
          animation: runnerVis 20s linear infinite;
        }

        /* Celebrator state visibility */
        @keyframes celebratorVis {
          0%, 54.9% { opacity: 0; }
          55%, 70% { opacity: 1; }
          70.1%, 100% { opacity: 0; }
        }
        .state-celebrator {
          animation: celebratorVis 20s linear infinite;
        }

        /* Fixed Stand Cap: Disappears when student grabs it, reappears for next loop ONLY when text exits completely */
        @keyframes standCapState {
          0%, 54.9% { opacity: 1; transform: scale(1) translateY(0px); }
          55%, 99.9% { opacity: 0; transform: scale(0) translateY(-10px); } /* Hidden until next loop */
          100% { opacity: 1; transform: scale(1) translateY(0px); }
        }
        .animate-stand-cap {
          animation: standCapState 20s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
        }

        /* Pedestal pulse effect when cap is grabbed */
        @keyframes pedestalGlow {
          0%, 54.9% { filter: drop-shadow(0 0 2px rgba(255,255,255,0.3)); opacity: 0.8; }
          55%, 65% { filter: drop-shadow(0 0 8px rgba(255,255,255,0.8)); opacity: 1; }
          65.1%, 100% { filter: drop-shadow(0 0 2px rgba(255,255,255,0.3)); opacity: 0.8; }
        }
        .animate-pedestal {
          animation: pedestalGlow 20s linear infinite;
        }
        
        /* =========================================================
           HIGH-FIDELITY 4-FRAME CELL RUNNING CYCLE (0.42s loop - slightly faster)
           ========================================================= */
        @keyframes f1 { 0%, 24.9% { opacity: 1; } 25%, 100% { opacity: 0; } }
        @keyframes f2 { 0%, 24.9% { opacity: 0; } 25%, 49.9% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes f3 { 0%, 49.9% { opacity: 0; } 50%, 74.9% { opacity: 1; } 75%, 100% { opacity: 0; } }
        @keyframes f4 { 0%, 74.9% { opacity: 0; } 75%, 100% { opacity: 1; } }

        .run-f1 { animation: f1 0.42s steps(1) infinite; }
        .run-f2 { animation: f2 0.42s steps(1) infinite; }
        .run-f3 { animation: f3 0.42s steps(1) infinite; }
        .run-f4 { animation: f4 0.42s steps(1) infinite; }

        /* Dynamic speed lines flicker */
        @keyframes speedLineFlicker {
          0%, 100% { stroke-dashoffset: 0; opacity: 0.4; }
          50% { stroke-dashoffset: 8; opacity: 0.8; }
        }
        .speed-line {
          animation: speedLineFlicker 0.2s linear infinite;
          stroke-dasharray: 6 3;
        }

        /* =========================================================
           CELEBRATION & CAP WEARING SEQUENCE (20s Timeline)
           ========================================================= */
        @keyframes celeb-reach-vis {
          0%, 60.9% { opacity: 1; }
          61%, 100% { opacity: 0; }
        }
        @keyframes celeb-w-vis {
          0%, 60.9% { opacity: 0; }
          61%, 100% { opacity: 1; }
        }
        @keyframes celeb-left-arm {
          0%, 54.9% { transform: rotate(0deg); }
          /* Reach out to grab cap */
          55% { transform: rotate(-45deg); } 
          /* Lift cap in an arc */
          57% { transform: rotate(0deg); } 
          /* Place on head and hold it there until hidden */
          59%, 100% { transform: rotate(50deg); } 
        }
        @keyframes celeb-right-arm {
          0%, 100% { transform: rotate(0deg); }
        }
        @keyframes celeb-wear-cap {
          0%, 54.9% { opacity: 0; transform: translate(70px, 15px) rotate(25deg) scale(0.95); }
          55% { opacity: 1; transform: translate(70px, 15px) rotate(25deg) scale(0.95); } /* Grabs cap from right pedestal */
          57% { opacity: 1; transform: translate(38px, -10px) rotate(10deg) scale(1.15); } /* Lifts cap */
          59% { opacity: 1; transform: translate(0px, -4px) rotate(0deg) scale(1.3); } /* Places on head */
          /* Cap stays on head and bobs in sync with jumping */
          61% { opacity: 1; transform: translate(0px, -4px) rotate(0deg) scale(1.3); } 
          63% { opacity: 1; transform: translate(0px, -12px) rotate(0deg) scale(1.3); }
          65% { opacity: 1; transform: translate(0px, -4px) rotate(0deg) scale(1.3); }
          67% { opacity: 1; transform: translate(0px, -12px) rotate(0deg) scale(1.3); }
          69% { opacity: 1; transform: translate(0px, -4px) rotate(0deg) scale(1.3); }
          70% { opacity: 1; transform: translate(0px, -4px) rotate(0deg) scale(1.3); }
          70.1%, 100% { opacity: 0; }
        }
        @keyframes celeb-jump-cycle {
          0%, 60.9% { transform: translateY(0px); }
          /* Explicit Bobbing cycles */
          61% { transform: translateY(0px); }
          63% { transform: translateY(-8px); }
          65% { transform: translateY(0px); }
          67% { transform: translateY(-8px); }
          69% { transform: translateY(0px); }
          70% { transform: translateY(0px); }
          70.1%, 100% { transform: translateY(0px); }
        }

        /* VICTORY STARBURST (Triggered exactly at 59% when cap lands on head) */
        @keyframes starburst-1 {
          0%, 58.9% { transform: translate(50px, 15px) scale(0); opacity: 0; }
          59% { transform: translate(50px, 15px) scale(0.2); opacity: 1; }
          65% { transform: translate(25px, -15px) scale(1.1) rotate(45deg); opacity: 0; }
          65.1%, 100% { transform: translate(50px, 15px) scale(0); opacity: 0; }
        }
        @keyframes starburst-2 {
          0%, 58.9% { transform: translate(50px, 15px) scale(0); opacity: 0; }
          59% { transform: translate(50px, 15px) scale(0.2); opacity: 1; }
          65% { transform: translate(75px, -15px) scale(1.1) rotate(-45deg); opacity: 0; }
          65.1%, 100% { transform: translate(50px, 15px) scale(0); opacity: 0; }
        }
        @keyframes starburst-3 {
          0%, 58.9% { transform: translate(50px, 15px) scale(0); opacity: 0; }
          59% { transform: translate(50px, 15px) scale(0.2); opacity: 1; }
          65% { transform: translate(15px, 10px) scale(1) rotate(90deg); opacity: 0; }
          65.1%, 100% { transform: translate(50px, 15px) scale(0); opacity: 0; }
        }
        @keyframes starburst-4 {
          0%, 58.9% { transform: translate(50px, 15px) scale(0); opacity: 0; }
          59% { transform: translate(50px, 15px) scale(0.2); opacity: 1; }
          65% { transform: translate(85px, 10px) scale(1) rotate(-90deg); opacity: 0; }
          65.1%, 100% { transform: translate(50px, 15px) scale(0); opacity: 0; }
        }
        @keyframes starburst-5 {
          0%, 58.9% { transform: translate(50px, 15px) scale(0); opacity: 0; }
          59% { transform: translate(50px, 15px) scale(0.2); opacity: 1; }
          65% { transform: translate(50px, -28px) scale(1.2) rotate(15deg); opacity: 0; }
          65.1%, 100% { transform: translate(50px, 15px) scale(0); opacity: 0; }
        }

        .celeb-arm-left {
          animation: celeb-left-arm 20s ease-in-out infinite, celeb-reach-vis 20s linear infinite;
          transform-origin: 50px 35px;
        }
        .celeb-arm-right {
          animation: celeb-right-arm 20s ease-in-out infinite, celeb-reach-vis 20s linear infinite;
          transform-origin: 50px 35px;
        }
        .celeb-arm-w-left {
          animation: celeb-w-vis 20s linear infinite;
          transform-origin: 50px 35px;
        }
        .celeb-arm-w-right {
          animation: celeb-w-vis 20s linear infinite;
          transform-origin: 50px 35px;
        }
        .celeb-cap-grabbed {
          animation: celeb-wear-cap 20s ease-in-out infinite;
          transform-origin: 50px 20px;
        }
        .celeb-jumping-group {
          animation: celeb-jump-cycle 20s ease-in-out infinite;
        }

        /* Starburst triggers */
        .sb-1 { animation: starburst-1 20s ease-out infinite; }
        .sb-2 { animation: starburst-2 20s ease-out infinite; }
        .sb-3 { animation: starburst-3 20s ease-out infinite; }
        .sb-4 { animation: starburst-4 20s ease-out infinite; }
        .sb-5 { animation: starburst-5 20s ease-out infinite; }
      `}</style>

      {/* Fixed Graduation Cap Stand & Pedestal on the Right */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-[#40060f] border-l border-[#801a2d] z-40 shadow-[-4px_0_12px_rgba(0,0,0,0.5)] flex items-center justify-center">

        {/* Glowing Pedestal / Trophy Stand with Cap inside a single SVG to guarantee no clipping */}
        <svg className="w-full h-full p-1" viewBox="0 0 100 100" fill="none">
          {/* Elegant glassmorphic pedestal pillar */}
          <polygon className="animate-pedestal" points="32,90 40,56 60,56 68,90" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          {/* Pedestal Top plate */}
          <line className="animate-pedestal" x1="36" y1="56" x2="64" y2="56" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Pedestal Bottom plate */}
          <line className="animate-pedestal" x1="26" y1="90" x2="74" y2="90" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />

          {/* Sleek Mortarboard Graduation Cap sitting on the pedestal */}
          <g className="animate-stand-cap" style={{ transformOrigin: '50px 56px' }}>
            <g transform="translate(15, 20) scale(0.7)">
              <polygon points="50,22 92,34 50,46 8,34" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round" />
              <path d="M32,39.5 v6 c0,5 9,8 18,8 s18,-3 18,-8 v-6" fill="white" />
              <circle cx="50" cy="34" r="2.5" fill="#500a15" stroke="white" strokeWidth="1" />
              <path d="M50,34 C36,34 24,42 24,52 L24,64" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <polygon points="21,64 27,64 24,74" fill="white" />
            </g>
          </g>
        </svg>
      </div>

      {/* Animation Track */}
      <div className="w-full overflow-hidden relative flex items-center h-full pr-16">
        <div className="animate-run-slide flex items-center gap-5 whitespace-nowrap">
          {/* Tagline text leading with elegant white glow */}
          <span className="text-white font-extrabold text-xs md:text-sm tracking-[0.22em] uppercase filter drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]">
            MARCH AHEAD TOWARDS YOUR लक्ष्य
          </span>

          {/* Dual State Student Figure Container */}
          <div className="w-7 h-7 relative select-none">

            {/* STATE 1: RUNNING (1.5x Thick High-Energy Stride Cycle with Ground Contact Shadows) */}
            <div className="state-runner absolute inset-0 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="relative">
                
                {/* FRAME 1: Contact Phase (Landing foot under body, trailing leg high behind) */}
                <g className="run-f1" fill="none" stroke="white" strokeWidth="13.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="50" cy="95" rx="15" ry="3" fill="rgba(0,0,0,0.2)" stroke="none" /> {/* Ground Shadow */}
                  <path d="M 47 28 L 41 52" strokeWidth="16.5" /> {/* Torso */}
                  <circle cx="53" cy="18" r="11" fill="white" stroke="none" /> {/* Head */}
                  <path d="M 46 30 Q 28 36 18 46" strokeWidth="12" /> {/* Back Arm - solid white */}
                  <path d="M 41 52 Q 26 62 38 72" /> {/* Back Leg - solid white */}
                  <path d="M 41 52 Q 52 70 43 88" /> {/* Front Leg - solid white */}
                  <path d="M 46 30 Q 62 38 52 50" strokeWidth="12" /> {/* Front Arm */}
                </g>

                {/* FRAME 2: Drive Phase (Pushing off straight, high-knee forward) */}
                <g className="run-f2" fill="none" stroke="white" strokeWidth="13.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="50" cy="95" rx="15" ry="3" fill="rgba(0,0,0,0.2)" stroke="none" /> {/* Ground Shadow */}
                  <path d="M 47 26 L 41 50" strokeWidth="16.5" />
                  <circle cx="53" cy="16" r="11" fill="white" stroke="none" />
                  <path d="M 46 28 Q 64 32 70 44" strokeWidth="12" /> {/* Back Arm - solid white */}
                  <path d="M 41 50 Q 28 70 16 88" /> {/* Back Leg - solid white */}
                  <path d="M 41 50 Q 58 54 48 76" /> {/* Front Leg - solid white */}
                  <path d="M 46 28 Q 30 36 20 48" strokeWidth="12" />
                </g>

                {/* FRAME 3: Flight Phase (Both legs in the air, maximum dynamic stride) */}
                <g className="run-f3" fill="none" stroke="white" strokeWidth="13.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="50" cy="95" rx="8" ry="1.5" fill="rgba(0,0,0,0.1)" stroke="none" /> {/* Flight Shadow (Smaller & Faded) */}
                  <path d="M 47 24 L 41 48" strokeWidth="16.5" />
                  <circle cx="53" cy="14" r="11" fill="white" stroke="none" />
                  <path d="M 46 26 Q 66 30 72 40" strokeWidth="12" /> {/* Back Arm - solid white */}
                  <path d="M 41 48 Q 20 58 30 68" /> {/* Back Leg - solid white */}
                  <path d="M 41 48 Q 58 64 68 80" /> {/* Front Leg - solid white */}
                  <path d="M 46 26 Q 34 36 26 46" strokeWidth="12" />
                </g>

                {/* FRAME 4: Opposite Contact Phase */}
                <g className="run-f4" fill="none" stroke="white" strokeWidth="13.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="50" cy="95" rx="15" ry="3" fill="rgba(0,0,0,0.2)" stroke="none" /> {/* Ground Shadow */}
                  <path d="M 47 28 L 41 52" strokeWidth="16.5" />
                  <circle cx="53" cy="18" r="11" fill="white" stroke="none" />
                  <path d="M 46 30 Q 62 38 52 50" strokeWidth="12" /> {/* Back Arm - solid white */}
                  <path d="M 41 52 Q 52 70 43 88" /> {/* Back Leg - solid white */}
                  <path d="M 41 52 Q 26 62 38 72" /> {/* Front Leg - solid white */}
                  <path d="M 46 30 Q 28 36 18 46" strokeWidth="12" />
                </g>

              </svg>
            </div>

            {/* STATE 2: CELEBRATING, WEARING CAP & CONFETTI STARBURST */}
            <div className="state-celebrator absolute inset-0 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
                
                {/* Dynamic Ground Shadow (Shrinks & fades when jumping, expands when landing) */}
                <ellipse className="celeb-shadow" cx="50" cy="93" rx="16" ry="2.5" fill="rgba(0,0,0,0.25)" />
                
                {/* VICTORY STARBURST PARTICLES */}
                <g fill="white" stroke="none">
                  <path className="sb-1" d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" />
                  <path className="sb-2" d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" />
                  <path className="sb-3" d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5 Z" />
                  <path className="sb-4" d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5 Z" />
                  <path className="sb-5" d="M0,-10 L2.5,-2.5 L10,0 L2.5,2.5 L0,10 L-2.5,2.5 L-10,0 L-2.5,-2.5 Z" />
                </g>

                {/* Worn Cap: Highly clear sleek Mortarboard styled for student's head */}
                <g className="celeb-cap-grabbed">
                  <polygon points="50,4 82,11 50,18 18,11" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                  <path d="M38,13 v3 c0,3 5,5 12,5 s12,-2 12,-5 v-3" fill="white" stroke="white" strokeWidth="1"/>
                  <circle cx="50" cy="11" r="1.5" fill="#500a15" stroke="white" strokeWidth="1"/>
                  <path d="M50,11 L32,16 L32,26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polygon points="30,26 34,26 32,31" fill="white"/>
                </g>
                
                {/* Student Body Group - Bobs up and down when jumping (1.5x Thicker, matches running state perfectly) */}
                <g className="celeb-jumping-group">
                  {/* Torso */}
                  <path d="M 50 35 L 50 65" fill="none" stroke="white" strokeWidth="16.5" strokeLinecap="round"/>
                  {/* Head */}
                  <circle cx="50" cy="20" r="11" fill="white"/>
                  
                  {/* Initial Arms (Reaching/Native) - Visible during grab sequence */}
                  <path className="celeb-arm-left" d="M 50 35 L 30 20 L 22 10" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="celeb-arm-right" d="M 50 35 L 70 20 L 78 10" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* W-Shape Arms (Excitement Pose) - Visible during jump sequence */}
                  <path className="celeb-arm-w-left" d="M 50 35 L 36 48 L 24 22" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="celeb-arm-w-right" d="M 50 35 L 64 48 L 76 22" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>

                  {/* Left Leg */}
                  <path d="M 50 65 L 42 90" fill="none" stroke="white" strokeWidth="13.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Right Leg */}
                  <path d="M 50 65 L 58 90" fill="none" stroke="white" strokeWidth="13.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
