# amplimind – Public Website

Statische HTML/CSS Implementierung von [amplimind.io](https://amplimind.io). Kein CMS, kein Framework, keine externen Abhängigkeiten zur Laufzeit.

---

## Projektstruktur

```
public-company-website/
├── CNAME                       # Custom Domain (amplimind.io) für GitHub Pages
├── .nojekyll                   # Deaktiviert die Jekyll-Build-Pipeline (reine Static-Site)
├── index.html                  # Homepage (/)
├── join-us/index.html          # Join Us / Karriere (/join-us/)
├── impressum/index.html        # Impressum (/impressum/)
├── datenschutzerklaerung/index.html  # Datenschutzerklärung (/datenschutzerklaerung/)
├── join-us.html                # Legacy-Redirect → /join-us/
├── impressum.html              # Legacy-Redirect → /impressum/
├── datenschutz.html            # Legacy-Redirect → /datenschutzerklaerung/
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

> **Hinweis:** Alle internen Links und Assets verwenden absolute Pfade (z. B. `/css/main.css`),
> passend zur Auslieferung unter der eigenen Domain `amplimind.io`. Ein lokaler HTTP-Server
> ist daher notwendig; `file://` funktioniert nicht mehr direkt.

---

## Hinweise

- **Kein Cookie-Banner** – Die statische Seite setzt kein Tracking, keine Analytics und keine Marketing-Cookies. Die Datenschutzerklärung ist entsprechend angepasst.
- **Keine externen Requests** – Fonts, Bilder und Scripts sind vollständig lokal. Die Seite funktioniert vollständig offline.
- **Jobs** – Die Job-Listings werden weiterhin über [amplimind.jobs.personio.de](https://amplimind.jobs.personio.de/) ausgeliefert (externer Link).
