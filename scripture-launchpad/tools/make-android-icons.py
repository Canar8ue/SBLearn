#!/usr/bin/env python3
"""Generate Android launcher icons from the Wick pixel-lamp mark.

Same 16-grid pixel art as the appbar mark (ink square, white lamp,
amber flame). Produces legacy launcher PNGs (API 24/25) and adaptive
foreground layers (API 26+; background is the ink color from colors.xml).

Run:  python tools/make-android-icons.py   (from the scripture-launchpad folder)
Outputs android/app/src/main/res/mipmap-*/ic_launcher.png and ic_fg.png.
"""
from PIL import Image
import os

INK = (32, 33, 36, 255)      # #202124
WHITE = (255, 255, 255, 255)
YELLOW = (249, 171, 0, 255)  # #f9ab00
ORANGE = (232, 113, 10, 255) # #e8710a

# appbar mark rects, 16x16 grid (see index.html <span class="mark">)
PIXELS = [
    (7, 1, 2, 1, YELLOW), (6, 2, 4, 1, YELLOW),
    (6, 3, 4, 1, ORANGE), (7, 4, 2, 1, ORANGE),
    (5, 5, 6, 1, WHITE), (4, 6, 8, 1, WHITE), (3, 7, 10, 1, WHITE),
    (3, 8, 3, 4, WHITE), (10, 8, 3, 4, WHITE), (6, 8, 4, 1, WHITE),
    (4, 12, 8, 1, WHITE),
    (1, 8, 2, 2, WHITE), (13, 8, 2, 2, WHITE),
]

def art(frac, size):
    grid = Image.new("RGBA", (16, 16), INK)
    pg = grid.load()
    for (x, y, w, h, c) in PIXELS:
        for dy in range(h):
            for dx in range(w):
                pg[x + dx, y + dy] = c
    a = grid.crop(grid.getbbox())
    scale = max(1, round(size * frac / max(a.size)))
    big = a.resize((a.width * scale, a.height * scale), Image.NEAREST)
    img = Image.new("RGBA", (size, size), INK)
    img.paste(big, ((size - big.width) // 2, (size - big.height) // 2))
    return img

RES = os.path.join(os.path.dirname(__file__), "..", "android", "app", "src", "main", "res")
DENS = {"mdpi": 1, "hdpi": 1.5, "xhdpi": 2, "xxhdpi": 3, "xxxhdpi": 4}

for dpi, m in DENS.items():
    folder = os.path.join(RES, "mipmap-" + dpi)
    os.makedirs(folder, exist_ok=True)
    art(.72, round(48 * m)).save(os.path.join(folder, "ic_launcher.png"))
    art(.58, round(108 * m)).save(os.path.join(folder, "ic_fg.png"))
    print("mipmap-%s: ic_launcher %dpx, ic_fg %dpx" % (dpi, 48 * m, 108 * m))
