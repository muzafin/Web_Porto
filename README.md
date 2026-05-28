# 🌐 MZA Portfolio — Personal Website

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white)

Personal portfolio website for **Muhammad Zaenal Arifin** — an Informatics Engineering student at UNAKI Semarang with a passion for network infrastructure, cybersecurity, and modern web development.

> 🎨 **Theme:** Cyberpunk Minimalist — dark, futuristic, and elegant.

---

## ✨ Features

- ⚡ **Blazing Fast** — Built with Vite for instant HMR and optimized production builds
- 🎭 **Smooth Animations** — Framer Motion for entrance animations, scroll-triggered reveals, and micro-interactions
- 📱 **Fully Responsive** — Mobile-first design with breakpoints for tablet and desktop
- 🌙 **Dark Theme** — Cyberpunk-inspired color palette with cyan/violet accents
- 📊 **Animated Progress Bars** — Skill levels animate on scroll
- 🔢 **Count-Up Counters** — Stats animate when entering viewport
- 🍔 **Mobile Menu** — Animated hamburger menu with smooth transitions
- 🔄 **Orbit Rings** — Spinning rings around the profile avatar
- 📜 **Scroll-Aware Navbar** — Transparent → glass blur effect on scroll
- 📬 **Contact Form** — With mailto fallback
- 📄 **CV Download** — Direct PDF download from the hero section

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI library |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first CSS framework |
| [Vite](https://vite.dev) | Build tool & dev server |
| [Framer Motion](https://motion.dev) | Animation library |
| [Lucide React](https://lucide.dev) | Icon library |

---

## 📁 Project Structure

```
src/
├── assets/                    # Static assets (SVG, images)
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx         # Scroll-aware navigation bar
│   │   └── Footer.jsx         # Footer with social links
│   ├── sections/
│   │   ├── Hero.jsx           # Hero section with animations
│   │   ├── About.jsx          # Bio & stats section
│   │   ├── Experience.jsx     # Timeline experience cards
│   │   ├── Skills.jsx         # Animated skill progress bars
│   │   ├── Projects.jsx       # Project showcase cards
│   │   └── Contact.jsx        # Contact form & info
│   └── ui/
│       ├── Badge.jsx          # Status badge component
│       ├── Button.jsx         # CTA button component
│       ├── SectionHeader.jsx  # Reusable section header
│       └── AnimatedCounter.jsx# Count-up animation
├── hooks/
│   └── useScrollAnimation.js  # IntersectionObserver hook
├── data/
│   ├── experience.js          # Work experience data
│   ├── skills.js              # Skills & proficiency data
│   └── projects.js            # Project showcase data
├── styles/
│   ├── globals.css            # Tailwind directives & utilities
│   └── design-tokens.js       # Design system tokens
├── App.jsx                    # Main app component
└── main.jsx                   # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/muzafin/Web_Porto.git
cd Web_Porto

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `/dist` folder.

---

## 🌍 Deployment

### Netlify (Drag & Drop)

1. Run `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder into the upload area
4. Your site is live! 🎉

### Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

> A `netlify.toml` file is included for SPA routing support.

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Background Deep | `#050A12` | Main background |
| Background Alt | `#0C1220` | Section alternates |
| Surface | `#111827` | Cards |
| Border | `#1E2D40` | Dividers & borders |
| Cyan | `#00D8FF` | Primary accent |
| Violet | `#7C3AED` | Secondary accent |
| Text Primary | `#F0F4F8` | Headings & body |
| Text Secondary | `#8899AA` | Muted text |
| Success | `#22C55E` | Status indicators |

### Typography

| Role | Font |
|---|---|
| Display / Headings | **Syne** (Google Fonts) |
| Body / Paragraphs | **DM Sans** (Google Fonts) |
| Code / Labels | **JetBrains Mono** (Google Fonts) |

---

## 📬 Contact

- **Email:** arifinmuzafin4@gmail.com
- **WhatsApp:** [+62 851-7330-7940](https://wa.me/6285173307940)
- **LinkedIn:** [muhammad-zaenal-arifin](https://linkedin.com/in/muhammad-zaenal-arifin)

---

## 📝 License

© 2024 Muhammad Zaenal Arifin. All rights reserved.

---

<p align="center">
  Crafted with ☕ & code by <strong>MZA</strong>
</p>
