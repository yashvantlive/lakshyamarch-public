import { PROGRAMS } from "@/lib/siteData";

export function batchClassLabel(code: string): string {
  const labels: Record<string, string> = {
    "6": "Class 6",
    "7": "Class 7",
    "8": "Class 8",
    "9": "Class 9",
    "10": "Class 10",
    "10th NLQ": "Class 10 NLQ",
    "11th JEE": "Class 11 JEE",
    "11th NEET": "Class 11 NEET",
    "12th JEE": "Class 12 JEE",
    "12th NEET": "Class 12 NEET",
    "Dropper JEE": "JEE Dropper",
    "Dropper NEET": "NEET Dropper",
  };
  return labels[code] ?? code;
}

function sortClassCodes(a: string, b: string): number {
  const dropA = a.toLowerCase().includes("dropper");
  const dropB = b.toLowerCase().includes("dropper");
  if (dropA && !dropB) return 1;
  if (!dropA && dropB) return -1;
  const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
  const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
  if (numA !== numB) return numA - numB;
  return a.localeCompare(b);
}

export const CLASS_FILTERS = (() => {
  const codes = new Set<string>();
  for (const batch of [...PROGRAMS.school.batches, ...PROGRAMS.coaching.batches]) {
    for (const c of batch.classes) codes.add(c);
  }
  const sorted = Array.from(codes).sort(sortClassCodes);
  return [
    { value: "All", label: "All Programs" },
    ...sorted.map((code) => ({ value: code, label: batchClassLabel(code) })),
  ];
})();
