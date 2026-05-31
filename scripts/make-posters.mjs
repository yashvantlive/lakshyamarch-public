import sharp from "sharp";
import { mkdirSync } from "node:fs";

const outDir = "public/images/posters";
mkdirSync(outDir, { recursive: true });

const jobs = [
  // Landscape brochure capture -> hero/admission/results watermark
  {
    src: "public/Screenshot 2026-05-31 111526.png",
    out: `${outDir}/brochure.webp`,
    width: 1600,
  },
  // Portrait poster capture -> scholarship watermark
  {
    src: "public/Screenshot 2026-05-31 111409.png",
    out: `${outDir}/poster.webp`,
    width: 1100,
  },
];

for (const j of jobs) {
  await sharp(j.src)
    .resize({ width: j.width, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(j.out);
  const m = await sharp(j.out).metadata();
  console.log("wrote", j.out, m.width + "x" + m.height, "format=" + m.format);
}
