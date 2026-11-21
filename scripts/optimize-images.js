import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Folder yang diproses + lebar maksimal (px) untuk gambar di dalamnya
const TARGETS = [
    { dir: "src/assets/img", width: 1000 }, // foto profil, unej
    { dir: "src/assets/img/sertif", width: 1600 },
    { dir: "src/assets/img/myproject", width: 1600 },
    { dir: "src/assets/img/testimonial", width: 200 },
    { dir: "public/myproject/photo", width: 1600 },
];

const QUALITY = 80;
const INPUT_EXT = [".png", ".jpg", ".jpeg"];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function optimizeDir({ dir, width }) {
    const files = await readdir(dir, { withFileTypes: true });

    for (const file of files) {
        if (!file.isFile()) continue;

        const ext = path.extname(file.name).toLowerCase();
        if (!INPUT_EXT.includes(ext)) continue;

        const input = path.join(dir, file.name);
        const output = input.slice(0, -ext.length) + ".webp";

        // Lewati jika .webp sudah ada dan lebih baru dari file aslinya
        const inputStat = await stat(input);
        const outputStat = await stat(output).catch(() => null);
        if (outputStat && outputStat.mtimeMs > inputStat.mtimeMs) {
            console.log(`skip     ${output}`);
            continue;
        }

        await sharp(input)
            .rotate() // ikuti orientasi EXIF (foto dari HP)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toFile(output);

        const { size } = await stat(output);
        console.log(`ok       ${output}  ${kb(inputStat.size)} → ${kb(size)}`);
    }
}

for (const target of TARGETS) {
    await optimizeDir(target);
}
