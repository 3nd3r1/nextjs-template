import { readFileSync } from "fs";
import path from "path";

const GLOBALS_CSS = path.join(process.cwd(), "src/app/globals.css");

// Reads a CSS variable from the light-mode :root block of globals.css
export function getCssVar(css: string, name: string): string {
    const root = css.match(/:root\s*{([^}]*)}/)?.[1] ?? "";
    const value = root.match(new RegExp(`--${name}:\\s*([^;]+);`))?.[1];
    if (!value) throw new Error(`--${name} not found in :root`);
    return value.trim();
}

// Converts an oklch() color to hex, as PWA manifests need plain colors
export function oklchToHex(color: string): string {
    const match = color.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)/);
    if (!match) throw new Error(`Unsupported color: ${color}`);

    const [L, C, h] = match.slice(1).map(Number);
    const a = C * Math.cos((h * Math.PI) / 180);
    const b = C * Math.sin((h * Math.PI) / 180);

    const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
    const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
    const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;

    const linear = [
        4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
    ];

    return (
        "#" +
        linear
            .map((x) => {
                const v = Math.min(1, Math.max(0, x));
                const srgb =
                    v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
                return Math.round(srgb * 255)
                    .toString(16)
                    .padStart(2, "0");
            })
            .join("")
    );
}

export function getThemeColors() {
    const css = readFileSync(GLOBALS_CSS, "utf8");
    return {
        primary: oklchToHex(getCssVar(css, "primary")),
        background: oklchToHex(getCssVar(css, "background")),
    };
}
