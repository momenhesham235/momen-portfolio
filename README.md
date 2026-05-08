# 🚀 Momen Hesham - Portfolio

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://momenhesham235.github.io/momen-portfolio/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> A production-grade portfolio website showcasing modern React development, performance optimization, and accessibility best practices.

![Portfolio Preview](public/me.png)

---

## ✨ Features

### **🎨 User Experience**
- ⚡ Lightning-fast performance with Vite
- 🎭 Smooth animations with Motion (Framer Motion)
- 🌓 Dark/Light theme with persistent preference
- 📱 Fully responsive design
- ♿ WCAG 2.1 Level AA accessibility compliant
- 🔍 SEO optimized with meta tags and sitemap

### **💻 Technical Excellence**
- ⚛️ React 19 with modern hooks and patterns
- 🏗️ Clean, scalable architecture
- 🎯 Centralized configuration management
- 🔄 Context API for global state
- 📦 Code splitting and lazy loading
- 🎨 CSS Variables for theming
- 🧩 Reusable custom hooks
- 📝 Comprehensive JSDoc documentation

### **🚀 Performance**
- ⚡ Optimized bundle size
- 🖼️ Lazy image loading with Intersection Observer
- 🎬 Animation variants defined outside components
- 💾 Memoized expensive calculations
- 🔄 Minimal re-renders with proper state management

### **♿ Accessibility**
- ⌨️ Full keyboard navigation
- 🎯 Focus trap in modals
- 🔊 Screen reader friendly
- 🎨 Respects `prefers-reduced-motion`
- 🏷️ Proper ARIA labels and semantic HTML

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Routing** | React Router DOM v7 |
| **Animations** | Motion (Framer Motion) |
| **Styling** | CSS with CSS Variables |
| **Forms** | Formspree |
| **Notifications** | React Hot Toast |
| **Lottie** | Lottie React |
| **Deployment** | GitHub Pages |

---

## 📦 Installation

### **Prerequisites**
- Node.js 18 or higher
- npm or yarn

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

The app will be available at `http://localhost:3000`

---

## 🚀 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run deploy   # Deploy to GitHub Pages
```

---

## 📁 Project Structure

```
momen-portfolio/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, animations
│   ├── components/           # React components
│   │   ├── common/           # Shared components
│   │   ├── details/          # Project details
│   │   ├── home/             # Home page sections
│   │   └── skeleton/         # Loading skeletons
│   ├── config/               # Configuration
│   │   ├── constants.js      # App constants
│   │   └── animation-variants.js
│   ├── constant/             # Data constants
│   ├── contexts/             # React contexts
│   ├── hooks/                # Custom hooks
│   ├── layouts/              # Layout components
│   ├── pages/                # Page components
│   ├── routes/               # Routing
│   ├── styles/               # Global styles
│   ├── utils/                # Utility functions
│   └── main.jsx              # Entry point
├── CHANGELOG.md              # Version history
├── DEVELOPER_GUIDE.md        # Developer documentation
├── QUICK_REFERENCE.md        # Quick reference
├── REFACTORING_SUMMARY.md    # Refactoring details
└── README.md                 # This file
```

---

## 🎯 Key Features Explained

### **1. Centralized Configuration**
All constants and configuration in one place:
```javascript
// src/config/constants.js
export const PROJECTS_PER_PAGE = 6;
export const SITE_NAME = "Momen Hesham - Software Engineer";
```

### **2. Theme Management**
Context-based theme with localStorage persistence:
```javascript
import { useTheme } from '@/contexts/theme-context';
const { theme, toggleTheme, isDark } = useTheme();
```

### **3. Custom Hooks**
Reusable logic extracted into hooks:
- `useScrollToTop` - Scroll to top on page load
- `useFocusTrap` - Trap focus in modals
- `useLockBodyScroll` - Lock body scroll when modal open
- `useTheme` - Theme management

### **4. SEO Component**
Dynamic meta tag management:
```javascript
<SEO 
  title="Page Title"
  description="Page description"
  canonical="https://example.com"
/>
```

### **5. Performance Optimizations**
- Memoized calculations with `useMemo`
- Animation variants defined outside components
- Lazy loading for heavy components
- Optimized image loading

---

## 🎨 Customization

### **Change Theme Colors**
Edit `src/styles/index.css`:
```css
:root {
  --accent-color: darkgoldenrod;
  --bg-primary-color: #000;
}
```

### **Add New Project**
1. Add image to `src/assets/projects/`
2. Export in `src/assets/index.js`
3. Add data to `src/constant/data/myProject.js`

### **Update Contact Info**
Edit `src/config/constants.js`:
```javascript
export const SOCIAL_LINKS = {
  email: "your@email.com",
  github: "https://github.com/username",
};
```

---

## 📚 Documentation

- **[Developer Guide](DEVELOPER_GUIDE.md)** - Comprehensive development guide
- **[Quick Reference](QUICK_REFERENCE.md)** - Quick reference for common tasks
- **[Refactoring Summary](REFACTORING_SUMMARY.md)** - Details about the refactoring
- **[Changelog](CHANGELOG.md)** - Version history and changes

---

## 🚀 Deployment

### **GitHub Pages**

```bash
# Build and deploy
npm run deploy
```

The site will be deployed to: `https://momenhesham235.github.io/momen-portfolio/`

### **Other Platforms**

The build output is in the `dist/` folder and can be deployed to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

---

## ♿ Accessibility

This portfolio follows WCAG 2.1 Level AA guidelines:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Color contrast
- ✅ Reduced motion support

---

## 🔍 SEO

Optimized for search engines:

- ✅ Dynamic meta tags
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Canonical URLs

---

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎨 First Contentful Paint: < 1.5s
- 🖼️ Largest Contentful Paint: < 2.5s
- ⚡ Time to Interactive: < 3.5s
- 📦 Bundle Size: Optimized with code splitting

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Momen Hesham**

- 🌐 Website: [momenhesham235.github.io/momen-portfolio](https://momenhesham235.github.io/momen-portfolio/)
- 💼 LinkedIn: [linkedin.com/in/momen-hesham](https://www.linkedin.com/in/momen-hesham/)
- 🐙 GitHub: [@momenhesham235](https://github.com/momenhesham235)
- 📧 Email: hmomen235@gmail.com

---

## 🙏 Acknowledgments

- React team for React 19
- Vite team for the amazing build tool
- Motion team for smooth animations
- All open-source contributors

---

## 📈 Project Status

✅ **Production Ready** - Fully refactored and optimized for production use.

### **Recent Updates**
- ✅ Complete architecture refactoring (v2.0.0)
- ✅ Performance optimizations
- ✅ Accessibility improvements
- ✅ SEO enhancements
- ✅ Code quality improvements

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

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
