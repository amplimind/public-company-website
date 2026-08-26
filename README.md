# amplimind – Statische Website

Statische HTML/CSS-Reimplementierung von [amplimind.io](https://amplimind.io). Kein CMS, kein Framework, keine externen Abhängigkeiten zur Laufzeit.

---

## Projektstruktur

```
public-company-website/
├── index.html                  # Homepage
├── join-us.html                # Join Us / Karriere
├── impressum.html              # Impressum
├── datenschutz.html            # Datenschutzerklärung
│
├── css/
│   ├── main.css                # Komplettes Stylesheet
│   └── fonts.css               # Lokale @font-face Deklarationen
│
├── js/
│   └── nav.js                  # Hamburger-Menü (~30 Zeilen vanilla JS)
│
└── assets/
    ├── fonts/                  # Lokale Webfonts (woff2)
    │   
    └── images/                 # Alle Bilder lokal gespeichert
```

---

## Technologie

| | |
|---|---|
| **HTML** | Semantisches HTML5, keine Template-Engine |
| **CSS** | Reines CSS3, CSS Custom Properties, kein Preprocessor |
| **JavaScript** | ~30 Zeilen vanilla JS (nur Hamburger-Menü) |
| **Fonts** | Comfortaa + Catamaran, lokal gehostet (kein Google Fonts CDN) |
| **Bilder** | Alle Assets lokal – keine externen Requests zur Laufzeit |

---

## Design-System

### Farben

| Variable | Wert | Verwendung |
|---|---|---|
| `--dark` | `#0a283c` | Header, Footer, dunkle Sektionen, Karten |
| `--green` | `#3cff82` | Accent, CTAs, Bullet-Points |
| `--white` | `#ffffff` | Text auf dunklem Hintergrund, Body-Hintergrund |
| `--text` | `#222222` | Fließtext auf hellem Hintergrund |

### Fonts

| Familie | Gewichte | Verwendung |
|---|---|---|
| **Comfortaa** | 400, 500, 700 | Headings, Buttons, Navigation |
| **Catamaran** | 400, 500, 600, 700, 800 | Fließtext, Labels |

### Breakpoints

| Breakpoint | Bereich | Änderungen |
|---|---|---|
| Desktop | > 999px | Volle Navigation, 4-spaltige Grids |
| Tablet | ≤ 999px | Hamburger-Menü, 2-spaltige Grids |
| Mobile | ≤ 689px | 1-spaltige Layouts, vereinfachte Hero |

---

## Seiten

### `index.html` – Homepage

Sektionen in Reihenfolge:

1. **Hero** – Vollbild (100vh), Foto-Hintergrund, transparenter Header darüber, weißer Tagline-Kasten
2. **Quote Banner** – Full-width, dunkel (`#0a283c`), 2-spaltig mit Winkel-SVG und Zitat
3. **Foto-Galerie** – 3 Team-Fotos auf weißem Hintergrund
4. **About + Pillar Cards** – Einleitungstext + 4 abgerundete dunkle Karten (Human / Tech-driven / Flexible / Responsible)
5. **Joint Venture** – Logo-Balken (dunkel) + Beschreibungstext (hell)
6. **Team CTA** – 2-spaltig: Foto links, Text + Button rechts

### `join-us.html` – Karriere

Sektionen in Reihenfolge:

1. **Hero** – Vollbild (100vh), Camp-Foto, Button "Job Portal" unten links
2. **Quote Banner** – Identische Struktur wie Index, anderes Zitat
3. **Wir suchen ampliminds** – Job-Portal-Link + CTA-Button
4. **Wie wir arbeiten** – Dunkle Karte mit Foto-Header + Werteliste (grüne Bullets)
5. **Benefits** – Dunkle Karte mit Foto-Header + 6 Benefit-Einträge
6. **Meet the Team** – Team-Foto + amplimind-Logo auf dunklem Hintergrund

### `impressum.html` / `datenschutz.html` – Rechtliche Seiten

- Sticky Header mit dunklem Hintergrund und Winkel-SVG-Muster
- Weißer Content-Bereich, strukturierter Text mit `<h2>`, `<h3>`, `<ul>`

---

## Lokale Entwicklung

Da die Seite vollständig statisch ist, reicht ein einfacher lokaler HTTP-Server:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Live Server Extension → "Open with Live Server"
```

Dann im Browser öffnen: `http://localhost:8080`

> **Hinweis:** Die Seite funktioniert auch direkt als `file://`-Pfad im Browser, da alle Assets relativ referenziert sind.

---

## Hinweise

- **Kein Cookie-Banner** – Die statische Seite setzt kein Tracking, keine Analytics und keine Marketing-Cookies. Die Datenschutzerklärung ist entsprechend angepasst.
- **Keine externen Requests** – Fonts, Bilder und Scripts sind vollständig lokal. Die Seite funktioniert vollständig offline.
- **Jobs** – Die Job-Listings werden weiterhin über [amplimind.jobs.personio.de](https://amplimind.jobs.personio.de/) ausgeliefert (externer Link).
