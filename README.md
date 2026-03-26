# Art Cosmetic — Website Redesign

**Premium Website für ästhetische Kosmetik in Bregenz, Vorarlberg**

---

## Lead Score: 77/100 — TIER 1

---

## Lead Quality Analysis

### Why This is a HOT Lead

**Art Cosmetic** betreibt eine Kosmetikstudio mit ästhetischen Behandlungen in Bregenz. Ihre aktuelle Website (artcosmetic.at) hat **2016-esoterisches Design** — das ist ein kritisches Problem für eine ästhetische Klinik.

### Pain Points

1. **Visuelle Präsentation ist ALLES** in der ästhetischen Kosmetik. Kunden lassen sich die Haut behandeln — sie brauchen Vertrauen. Eine Website von 2016 signalisiert: "Wir sind nicht auf dem neuesten Stand."
2. **Kein Online-Buchungssystem** = verlorene Kunden. Wer heute nach einer Kosmetikbehandlung sucht, bucht online oder geht weiter.
3. **Kein Mobile-First Design** — die meisten Suchanfragen kommen vom Handy.
4. **Veraltetes Design = veraltete Techniken?** Das ist die Assoziation, die entsteht.

### Revenue Opportunity

- **Online-Terminbuchung** kann Anfragen verdoppeln
- **Kostenlose Erstberatung CTA** — hohe Conversion für Neukunden
- **Vorher-Nachher Sektion** — soziale Beweise, die Vertrauen aufbauen
- **Contact Form mit Service-Auswahl** — qualifizierte Leads direkt ins CRM

### Outreach Angle

> "Eure Website sieht aus wie 2016 — in der ästhetischen Kosmetik ist Vertrauen alles."

---

## Was diese Website bietet

### Design
- **Premium Ästhetik-Klinik** — clean, medizinisch-spa, vertrauenswürdig
- **Farbschema:** Rose Blush (#F8E8E8) + Charcoal (#2D2D2D) + Rose Gold Accent
- **Typografie:** Playfair Display (elegante Serif) + DM Sans (moderne Sans)
- **Mobile-first, responsive** — perfekt auf jedem Gerät

### Sektionen
1. **Hero** — Full-screen mit CTAs: "Behandlung buchen" + "Anrufen"
2. **Info Strip** — Telefon, Adresse, Öffnungszeiten
3. **Willkommen** — Zwei-Spalten mit Statistiken
4. **Behandlungen** — 8 Services im Grid
5. **Ergebnisse** — Vorher-Nachher Sektion
6. **Qualität & Sicherheit** — Dark Section mit Trust-Elementen
7. **Kostenlose Erstberatung** — Wichtiger CTA
8. **Kontakt & Lage** — Formular + Google Maps
9. **Footer** — Links, Kontaktdaten

---

## Tech Stack

- **Next.js 15** (React 19, TypeScript)
- **Tailwind CSS v3** (Custom Colors: blush, charcoal, roseGold)
- **Google Fonts** (Playfair Display + DM Sans)
- **Unsplash Images** (Premium kosmetische Stock Photos)

---

## Installation & Deployment

### Lokale Entwicklung

```bash
cd projects/art-cosmetic
npm install
npm run dev
```

### Build für Production

```bash
npm run build
```

### Deployment auf Coolify

```bash
# 1. Repository zu GitHub pushen
git init
git add .
git commit -m "Initial commit: Art Cosmetic website"
git remote add origin https://github.com/YOUR_USERNAME/art-cosmetic.git
git push -u origin main

# 2. Auf Coolify:
# - New Application → Connect GitHub repo
# - Build Pack: Nix or Dockerfile
# - Environment Variables: (none needed for static export)
# - Domain: art-cosmetic.deine-domain.com
# - Deploy!
```

### Dockerfile für Coolify

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### Oder: Static Export (einfachere Option)

Füge in `next.config.ts` hinzu:

```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}
```

Dann deploy den `out/` Ordner als statische Website.

---

## Dateistruktur

```
art-cosmetic/
├── app/
│   ├── layout.tsx      # Root Layout mit Meta-Tags
│   ├── page.tsx        # Hauptseite (alle Sektionen)
│   └── globals.css     # Tailwind + Custom Styles
├── public/             # Statische Assets
├── package.json        # Dependencies
├── tailwind.config.ts  # Custom Colors & Fonts
├── tsconfig.json       # TypeScript Config
└── README.md           # This file
```

---

## Business Details (verified)

| Feld | Wert |
|------|------|
| **Name** | Art Cosmetic |
| **Telefon** | +43 664 236 3851 |
| **Standort** | Bregenz, Vorarlberg, Österreich |
| **Preis-Level** | €€€ |
| **Website** | artcosmetic.at (aktuell veraltet) |
| **Google Maps** | Vorhanden mit Bewertungen |

---

## Nächste Schritte (für Art Cosmetic)

1. [ ] **Google Maps Listing** — Adresse verifizieren/aktualisieren
2. [ ] **Echte Vorher-Nachher Fotos** — mit Einwilligung der Kundinnen
3. [ ] **Online Terminbuchung** — z.B. mit Calendly oder Booking
4. [ ] **Google Analytics / Search Console** — für SEO
5. [ ] **SSL Zertifikat** — falls noch nicht vorhanden
6. [ ] **WhatsApp Button** — für schnelle Kontaktaufnahme

---

Build mit 💅 von [Art Cosmetic Website Project]
