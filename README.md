# 🚀 Momen Hesham — Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://momenhesham235.github.io/momen-portfolio/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-purple)](https://vitejs.dev/)
[![i18next](https://img.shields.io/badge/i18n-EN%20%7C%20AR-orange)](https://www.i18next.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> A production-grade portfolio built on a layered architecture — `app/` shell, a typed-feeling `design-system/`, isolated feature areas under `components/momenPortfolio/`, and full bilingual (EN / AR) support with RTL.

![Portfolio Preview](public/Momen_Hesham.png)

---

## ✨ Features

### **🎨 User Experience**
- ⚡ Vite 7 — instant HMR and fast production builds
- 🎭 Motion (Framer Motion) animations with `prefers-reduced-motion` respect
- 🌓 Dark / Light theme, persisted via Zustand + `localStorage`
- 🌍 English & Arabic with **smooth RTL ↔ LTR transition veil**
- 📱 Fully responsive, mobile-first layouts
- ♿ WCAG 2.1 Level AA — keyboard nav, focus trap, semantic HTML, ARIA
- 🔍 SEO: dynamic meta, Open Graph, Twitter cards, sitemap, robots, JSON-LD

### **💻 Technical Excellence**
- ⚛️ React 19 + React Router v7 with lazy-loaded routes
- 🏗️ Layered architecture: `app/`, `design-system/`, `components/`, `pages/`, `hooks/`, `constants/`, `locales/`, `styles/`
- 🐻 **Zustand** stores for theme & language-transition state (replaces Context API)
- 🌐 **i18next + react-i18next** with `common` / `portfolio` namespaces
- 🧩 Reusable design-system primitives: `Button`, `Card`, `Badge`, `Section`, `Input`, `Textarea`, `Label`, `Select`
- 📝 Composable forms layer: `FormField`, `ErrorMessage`, `ContactForm`
- 🛣️ Vite path aliases (`@app`, `@design-system`, `@components`, `@hooks`, `@constants`, `@locales`, `@styles`, `@assets`)
- 🎨 Single source of truth for design tokens via CSS custom properties

### **🚀 Performance**
- 📦 Route-level code splitting (`React.lazy` + `Suspense` skeletons)
- 🖼️ Lazy image loading via Intersection Observer
- 🎬 Animation variants hoisted outside components
- 💾 Memoized expensive calculations, minimal re-renders

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Routing** | React Router DOM v7 |
| **State** | Zustand 5 (theme, language transition) |
| **i18n** | i18next 26 + react-i18next 17 |
| **Animations** | Motion (Framer Motion) 12 |
| **Forms** | Formspree (`@formspree/react`) |
| **Notifications** | React Hot Toast |
| **Icons** | React Icons |
| **Lottie** | lottie-react |
| **Styling** | Plain CSS + CSS custom properties |
| **Deployment** | GitHub Pages (`gh-pages`) |

---

## 📦 Installation

### **Prerequisites**
- Node.js 18+
- npm (or yarn / pnpm)

### **Setup**

```bash
# Clone the repository
git clone https://github.com/momenhesham235/momen-portfolio.git

# Navigate to project directory
cd momen-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000/momen-portfolio/`.

---

## 🚀 Available Scripts

```bash
npm run dev      # Start dev server (port 3000, auto-opens browser)
npm run build    # Build for production into dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
npm run deploy   # Build and deploy to GitHub Pages
```

---

## 📁 Project Structure

```
momen-portfolio/
├── public/                         # Static assets (favicons, CV PDF, OG image)
├── src/
│   ├── app/                        # Application shell
│   │   ├── config/                 # constants, i18n, animation-variants
│   │   ├── layouts/                # MainLayout + LanguageTransition layers
│   │   ├── routes/                 # AppRoute + route paths
│   │   └── stores/                 # Zustand stores (theme, lang transition)
│   ├── design-system/              # Reusable UI primitives
│   │   ├── ui/                     # Button, Card, Badge, Section,
│   │   │                           # Input, Textarea, Label, Select
│   │   └── index.js                # Public surface re-exports
│   ├── components/                 # Feature & shared components
│   │   ├── common/                 # header, footer, seo, skip-link
│   │   ├── feedback/               # Loading skeletons
│   │   ├── forms/                  # FormField, ErrorMessage, ContactForm
│   │   └── momenPortfolio/         # Page sections (feature-folder)
│   │       ├── Hero/
│   │       ├── Bio/
│   │       ├── Projects/           # cards, filter, load-more, empty state
│   │       ├── Experience/
│   │       ├── Skills/
│   │       ├── Contact/
│   │       └── ProjectDetails/
│   ├── pages/                      # Route screens
│   │   ├── home/
│   │   ├── details/
│   │   └── errorBoundary/
│   ├── hooks/                      # use-theme, use-language,
│   │                               # use-active-section, use-focus-trap,
│   │                               # use-lock-body-scroll, use-scroll-*
│   ├── constants/                  # heroData, navbar, skills, experience,
│   │                               # myProject
│   ├── locales/                    # i18n resources
│   │   ├── en/  { common, portfolio }
│   │   └── ar/  { common, portfolio }
│   ├── assets/                     # Images, fonts, animations
│   ├── styles/                     # Global CSS + design tokens
│   └── main.jsx                    # Entry point
├── DEVELOPER_GUIDE.md              # Developer documentation
├── vite.config.js                  # Vite config + path aliases
├── jsconfig.json                   # Editor path-alias hints
└── README.md
```

---

## 🧭 Path Aliases

Configured in [vite.config.js](vite.config.js) (and mirrored in `jsconfig.json` for editor IntelliSense):

| Alias | Resolves to |
|-------|-------------|
| `@`               | `src/` |
| `@app`            | `src/app` |
| `@design-system`  | `src/design-system` |
| `@components`     | `src/components` |
| `@pages`          | `src/pages` |
| `@hooks`          | `src/hooks` |
| `@constants`      | `src/constants` |
| `@locales`        | `src/locales` |
| `@assets`         | `src/assets` |
| `@styles`         | `src/styles` |

```js
import { Button, Section } from "@design-system";
import useThemeStore from "@app/stores/theme-store";
import { useLanguage } from "@hooks";
```

---

## 🎯 Key Concepts

### **1. Layered Architecture**
The `app/` layer owns cross-cutting shell concerns (config, layouts, routing, stores).
The `design-system/` layer owns reusable UI primitives.
Feature areas under `components/momenPortfolio/` consume both — they don't reach sideways.

### **2. Centralized Configuration**
Magic numbers, URLs, and IDs live in [src/app/config/constants.js](src/app/config/constants.js):

```js
export const PROJECTS_PER_PAGE = 6;
export const FORMSPREE_FORM_ID = "mdkqrlvy";
export const SITE_NAME = "Momen Hesham | Software Engineer";
export const SOCIAL_LINKS = { github: "...", linkedin: "...", email: "..." };
```

### **3. State Management with Zustand**
Theme persistence and the language-transition veil use lightweight Zustand stores — no provider wrapping, no context drilling.

```js
import useThemeStore from "@app/stores/theme-store";

const theme       = useThemeStore((s) => s.theme);
const toggleTheme = useThemeStore((s) => s.toggleTheme);
```

### **4. Internationalization (EN / AR + RTL)**
i18next is initialized in [src/app/config/i18n.js](src/app/config/i18n.js) with two namespaces (`common`, `portfolio`). The `useLanguage` hook handles language switching and triggers a transition veil over the document while `dir`/`lang` flip.

```jsx
import { useTranslation } from "react-i18next";

const { t } = useTranslation("portfolio");
return <h1>{t("hero.title")}</h1>;
```

### **5. Forms Layer**
Composable, accessible forms built on design-system primitives:

```jsx
<FormField label={t("contact.name")} error={errors.name}>
  <Input name="name" value={name} onChange={onChange} />
</FormField>
```

### **6. SEO Component**
Dynamic per-route meta tag management:

```jsx
<SEO
  title="Page Title"
  description="Page description"
  canonical="https://example.com"
/>
```

---

## 🎨 Customization

### **Theme Colors / Design Tokens**
Edit CSS custom properties in [src/styles/index.css](src/styles/index.css) — the single source of truth for theming consumed by every component CSS file.

### **Add a New Project**
1. Add image(s) to `src/assets/projects/`
2. Export them from `src/assets/index.js`
3. Add an entry to `src/constants/myProject.js`

### **Add a New Language**
1. Drop locale files under `src/locales/<code>/{common,portfolio}.json`
2. Register the language in [src/app/config/i18n.js](src/app/config/i18n.js) (`resources`, `SUPPORTED_LANGUAGES`, and `RTL_LANGUAGES` if applicable)

### **Update Contact Info**
Edit `SOCIAL_LINKS` in [src/app/config/constants.js](src/app/config/constants.js).

---

## 📚 Documentation

- **[Developer Guide](DEVELOPER_GUIDE.md)** — Architecture, patterns, and contribution notes

---

## 🚀 Deployment

### **GitHub Pages**

```bash
npm run deploy
```

Deployed to: `https://momenhesham235.github.io/momen-portfolio/`

The `base` is set in [vite.config.js](vite.config.js) and the router uses a matching `basename`, so the app works correctly under the `/momen-portfolio/` subpath.

### **Other Platforms**

The build output is in `dist/` and can be deployed to:
- Vercel
- Netlify
- AWS S3 / CloudFront
- Any static hosting service

When hosting at the root, remove the `base` from `vite.config.js` and the `basename` from `AppRoute.jsx`.

---

## ♿ Accessibility

This portfolio follows WCAG 2.1 Level AA guidelines:

- ✅ Full keyboard navigation
- ✅ Skip-to-content link
- ✅ Focus management & focus trap in modals
- ✅ Semantic HTML & ARIA labels
- ✅ Color contrast verified for both themes
- ✅ `prefers-reduced-motion` respected

---

## 🔍 SEO

- ✅ Dynamic meta tags per route
- ✅ Open Graph & Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ `sitemap.xml` & `robots.txt`
- ✅ Canonical URLs
- ✅ Semantic HTML

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source under the [MIT License](LICENSE).

---

## 👤 Author

**Momen Hesham**

- 🌐 Website: [momenhesham235.github.io/momen-portfolio](https://momenhesham235.github.io/momen-portfolio/)
- 💼 LinkedIn: [linkedin.com/in/momen-hesham](https://www.linkedin.com/in/momen-hesham/)
- 🐙 GitHub: [@momenhesham235](https://github.com/momenhesham235)
- 📧 Email: hmomen235@gmail.com

---

## 🙏 Acknowledgments

- The **React**, **Vite**, and **Motion** teams
- **i18next** and **Zustand** maintainers
- All open-source contributors

---

## 🔗 Links

- **Live Demo:** https://momenhesham235.github.io/momen-portfolio/
- **Repository:** https://github.com/momenhesham235/momen-portfolio
- **Issues:** https://github.com/momenhesham235/momen-portfolio/issues

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Momen Hesham](https://github.com/momenhesham235)

</div>
