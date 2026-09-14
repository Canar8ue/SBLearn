#!/usr/bin/env python3
"""Generate PWA icons from the Wick pixel-lamp mark.

Draws the same 16-grid pixel art as the appbar mark (ink square,
white lamp silhouette, amber flame) and scales it with hard pixel
edges into every icon size the manifest and iOS need.

Run:  python tools/make-icons.py      (from the scripture-launchpad folder)
Outputs icons/icon-192.png, icon-512.png, maskable-192.png,
maskable-512.png, apple-touch-icon.png.
"""
from PIL import Image
import os

INK = (32, 33, 36, 255)      # #202124
WHITE = (255, 255, 255, 255)
YELLOW = (249, 171, 0, 255)  # #f9ab00
ORANGE = (232, 113, 10, 255) # #e8710a

# appbar mark rects, 16x16 grid (see index.html <span class="mark">)
PIXELS = [
    # (x, y, w, h, color)
    (7, 1, 2, 1, YELLOW), (6, 2, 4, 1, YELLOW),
    (6, 3, 4, 1, ORANGE), (7, 4, 2, 1, ORANGE),
    (5, 5, 6, 1, WHITE), (4, 6, 8, 1, WHITE), (3, 7, 10, 1, WHITE),
    (3, 8, 3, 4, WHITE), (10, 8, 3, 4, WHITE), (6, 8, 4, 1, WHITE),
    (4, 12, 8, 1, WHITE),
    (1, 8, 2, 2, WHITE), (13, 8, 2, 2, WHITE),
]

def make(size, art_frac, name):
    # draw the 16-grid once, crop to the art bounding box
    grid = Image.new("RGBA", (16, 16), INK)
    pg = grid.load()
    for (x, y, w, h, c) in PIXELS:
        for dy in range(h):
            for dx in range(w):
                pg[x + dx, y + dy] = c
    bbox = grid.getbbox()
    art = grid.crop(bbox)
    aw, ah = art.size

    # integer pixel scale so edges stay crisp, centered on the canvas
    scale = max(1, round(size * art_frac / max(aw, ah)))
    draw_w, draw_h = aw * scale, ah * scale
    art_big = art.resize((draw_w, draw_h), Image.NEAREST)

    img = Image.new("RGBA", (size, size), INK)
    img.paste(art_big, ((size - draw_w) // 2, (size - draw_h) // 2))

    out = os.path.join(os.path.dirname(__file__), "..", "icons")
    os.makedirs(out, exist_ok=True)
    path = os.path.join(out, name)
    img.save(path)
    print(name, size, "px  (pixel =", scale, ")")

if __name__ == "__main__":
    make(192, .72, "icon-192.png")        # purpose "any"
    make(512, .72, "icon-512.png")        # purpose "any"
    make(192, .58, "maskable-192.png")    # purpose "maskable" — inside safe zone
    make(512, .58, "maskable-512.png")
    make(180, .72, "apple-touch-icon.png")
