import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely — prevents class conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format string (YYYY-MM-DD) or number (timestamp) to "02 Apr 2026" */
export function formatDate(date: string | number | null | undefined): string {
  if (!date) return "—";
  let d: Date;
  if (typeof date === "number") {
    d = new Date(date);
  } else {
    d = new Date(date + "T00:00:00");
  }
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

/** Format YYYY-MM to "April 2026" */
export function formatMonth(monthStr: string): string {
  if (!monthStr) return "—";
  const [year, month] = monthStr.split("-");
  const d = new Date(Number(year), Number(month) - 1, 1);
  return d.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

/** Return today as YYYY-MM-DD */
export function today(): string {
  return new Date().toISOString().split("T")[0];
}

/** Return current month as YYYY-MM */
export function currentMonth(): string {
  return new Date().toISOString().slice(0, 7);
}

/** Capitalise first letter of each word */
export function titleCase(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Map a role key to a human label */
export function roleLabel(role: string): string {
  const map: Record<string, string> = {
    admin: "Administrator",
    teacher: "Teacher",
    student: "Student",
  };
  return map[role] ?? role;
}

/** Currency formatter for Indian Rupees */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Truncate text beyond a max length */
export function truncate(text: string, max = 30): string {
  return text.length > max ? text.slice(0, max) + "…" : text;
}

/** Generate a unique admission number: ADM-YYYYMMDD-XXXX */
export function generateAdmissionNo(): string {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `ADM-${date}-${rand}`;
}
