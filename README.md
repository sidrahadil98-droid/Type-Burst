# TypeBurst — Modern Professional Typing Practice Platform

TypeBurst is a modern, responsive, and professional typing-practice web application designed to help users improve their typing speed, accuracy, and confidence with structured typing exercises and real-time performance diagnostics.

---

## 🌟 Key Features

1. **Modern Purple + Grey Aesthetic**:
   - Designed with clean CSS custom properties (`--primary: #7c3aed`, `--secondary: #1e293b`).
   - Clean typography pairing **Plus Jakarta Sans** for UI and body text with **JetBrains Mono** for code and typing prompts.
   - High contrast, generous whitespace, subtle borders, and smooth hover transitions.

2. **Core Typing Engine**:
   - **Real-time WPM Calculation**: Accurately computes Gross Words-Per-Minute as you type.
   - **Accuracy Tracking**: Keystroke-level character comparison (green for correct, red wavy underline for errors, blinking purple caret on active letter).
   - **60-Second Countdown Timer**: Automatic timer activation on the first keystroke with a warning pulse when under 10 seconds.
   - **Speed Tiers & Diagnostics**: Classifies speed into **SLOW**, **MEDIUM**, and **FAST** with animated progress bars for Speed, Accuracy, and Consistency.

3. **100+ Organized Typing Phrases**:
   - **Beginner**: Short, clean sentences emphasizing home-row discipline.
   - **Intermediate**: Natural everyday prose and conversational passages.
   - **Advanced**: Longer passages containing numbers, punctuation, quotes, and symbols.
   - **Programming / Tech**: Code syntax, TypeScript declarations, Git commands, and SQL queries.
   - Randomized selection logic preventing consecutive repeats.

4. **Multi-Page Single Page Application (SPA)**:
   - **Home**: Hero section with an interactive live warm-up preview card, 4-metric Performance Highlights, and *"Why Choose TypeBurst?"* cards.
   - **Typing Test**: Full-featured live practice dashboard with category filter pills, completion progress bar, live stats counters, and evaluation modal.
   - **Services**: 6 comprehensive training modules (*Typing Speed Practice*, *Accuracy Training*, *Real-Time Performance*, *Daily Typing Practice*, *Beginner Training*, *Advanced Practice*), workflow step counter, and CTA.
   - **About**: Brand mission, *"What We Offer"* breakdown, audience cards for Developers, Students, Professionals, and Writers, and the 15-Minute Rule benchmark.
   - **Contact**: Interactive contact form with live input validation, submit animation, and 3 communication cards (Email, Support, Working Hours).

5. **Consolidated 3-File Architecture**:
   - **`index.html`**: Complete semantic HTML structure for all pages, navigation, modals, and footer.
   - **`style.css`**: Pure CSS with responsive design system, theme variables, and custom styling.
   - **`script.js`**: Pure vanilla JavaScript powering the 100+ phrase bank, typing engine, navigation router, and form handlers.

---

## 📁 File Structure

```text
├── index.html        # Main HTML markup containing all views, navbar, modals, and footer
├── style.css         # Complete CSS styles with Purple + Grey theme variables and responsive rules
├── script.js         # Complete JavaScript engine (typing logic, 100+ phrases, SPA routing)
├── README.md         # Project documentation
└── package.json      # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### Option 1: Open Directly in Any Browser
Because TypeBurst is built using clean, vanilla HTML5, CSS3, and JavaScript, you can open `index.html` directly in any modern web browser without needing any build tools.

### Option 2: Run with Development Server (Vite)
```bash
# Install dependencies (if not already installed)
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## 🎨 Color Palette & CSS Variables

| Variable | Hex Value | Purpose |
| :--- | :--- | :--- |
| `--primary` | `#7c3aed` | Modern primary purple for brand icons, highlights, and primary buttons |
| `--primary-hover` | `#6d28d9` | Darker purple for button hover and active states |
| `--primary-light` | `#f5f3ff` | Soft purple tint for badges, active navigation, and card highlights |
| `--secondary` | `#1e293b` | Dark slate grey for secondary cards and UI elements |
| `--secondary-dark`| `#0f172a` | Deep charcoal for banners, dark containers, and the global footer |
| `--bg-page` | `#f8fafc` | Clean off-white page background |
| `--text-dark` | `#0f172a` | High-contrast headline and value color |
| `--text-muted` | `#64748b` | Subdued slate grey for supporting copy and labels |

---

## 📄 License & Copyright

© 2026 **TypeBurst**. All Rights Reserved.
https://type-burst.netlify.app/
