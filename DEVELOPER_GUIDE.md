# Developer Guide

## 📚 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Key Concepts](#key-concepts)
6. [Development Workflow](#development-workflow)
7. [Best Practices](#best-practices)
8. [Common Tasks](#common-tasks)
9. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This is a production-grade portfolio website built with React 19, showcasing modern frontend development practices, performance optimization, and accessibility standards.

### **Tech Stack**
- **Framework:** React 19
- **Build Tool:** Vite 7
- **Routing:** React Router DOM v7
- **Animations:** Motion (Framer Motion)
- **Styling:** CSS with CSS Variables
- **Forms:** Formspree
- **Notifications:** React Hot Toast
- **Animations:** Lottie React
- **Deployment:** GitHub Pages

---

## 🏗️ Architecture

### **Design Principles**
1. **Separation of Concerns** - Clear boundaries between components, logic, and data
2. **DRY (Don't Repeat Yourself)** - Reusable utilities, hooks, and components
3. **Performance First** - Memoization, lazy loading, and optimized renders
4. **Accessibility First** - WCAG 2.1 Level AA compliance
5. **SEO Optimized** - Dynamic meta tags, sitemap, and semantic HTML

### **Key Architectural Decisions**

#### **1. Centralized Configuration**
All constants, magic numbers, and configuration live in `src/config/`:
- `constants.js` - App-wide constants
- `animation-variants.js` - Reusable animation configurations

**Why?** Single source of truth, easier maintenance, better scalability.

#### **2. Context for Global State**
Theme management uses React Context instead of prop drilling or localStorage in components.

**Why?** Eliminates unnecessary re-renders, cleaner component code, better performance.

#### **3. Custom Hooks for Reusable Logic**
Common patterns extracted into custom hooks:
- `useScrollToTop` - Page navigation
- `useFocusTrap` - Modal accessibility
- `useLockBodyScroll` - Modal behavior
- `useTheme` - Theme management

**Why?** Reusable, testable, follows React best practices.

#### **4. Component Composition**
Components are small, focused, and composable.

**Why?** Easier to understand, test, and maintain.

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone https://github.com/momenhesham235/momen-portfolio.git

# Navigate to project
cd momen-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev      # Start development server (port 3000)
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
│   ├── me.png                # Profile image
│   ├── Momen-Hesham-CV.pdf   # CV file
│   ├── robots.txt            # SEO robots file
│   └── sitemap.xml           # SEO sitemap
│
├── src/
│   ├── assets/               # Images, fonts, animations
│   │   ├── animations/       # Lottie animations
│   │   ├── fonts/            # Custom fonts
│   │   ├── projects/         # Project images
│   │   ├── skills/           # Skill icons
│   │   └── index.js          # Asset exports
│   │
│   ├── components/           # React components
│   │   ├── common/           # Shared components
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── lazy-image/
│   │   │   ├── seo/
│   │   │   ├── skip-link/
│   │   │   └── index.js
│   │   ├── details/          # Project details components
│   │   ├── home/             # Home page sections
│   │   │   ├── bio/
│   │   │   ├── contact/
│   │   │   ├── experience/
│   │   │   ├── hero/
│   │   │   ├── projects/
│   │   │   └── skills/
│   │   └── skeleton/         # Loading skeletons
│   │
│   ├── config/               # Configuration files
│   │   ├── constants.js      # App constants
│   │   └── animation-variants.js
│   │
│   ├── constant/             # Data constants
│   │   └── data/
│   │       ├── experience.js
│   │       ├── heroData.js
│   │       ├── myProject.js
│   │       ├── navbar.js
│   │       └── skills.js
│   │
│   ├── contexts/             # React contexts
│   │   └── theme-context.jsx
│   │
│   ├── hooks/                # Custom hooks
│   │   ├── use-focus-trap.js
│   │   ├── use-lock-body-scroll.js
│   │   ├── use-scroll-to-top.js
│   │   └── index.js
│   │
│   ├── layouts/              # Layout components
│   │   └── mainLayout/
│   │
│   ├── pages/                # Page components
│   │   ├── details/
│   │   ├── errorBoundary/
│   │   └── home/
│   │
│   ├── routes/               # Routing configuration
│   │   └── AppRoute.jsx
│   │
│   ├── styles/               # Global styles
│   │   └── index.css
│   │
│   ├── utils/                # Utility functions
│   │   └── helpers.js
│   │
│   └── main.jsx              # App entry point
│
├── .gitignore
├── CHANGELOG.md              # Version history
├── DEVELOPER_GUIDE.md        # This file
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── jsconfig.json             # JavaScript configuration
├── package.json              # Dependencies
├── REFACTORING_SUMMARY.md    # Refactoring details
├── README.md                 # Project readme
└── vite.config.js            # Vite configuration
```

---

## 🔑 Key Concepts

### **1. Constants Management**

All magic numbers and configuration values are centralized:

```javascript
// src/config/constants.js
export const PROJECTS_PER_PAGE = 6;
export const TOAST_DURATION = 5000;
export const SITE_NAME = "Momen Hesham - Software Engineer";

// Usage in components
import { PROJECTS_PER_PAGE } from '@/config/constants';
```

### **2. Theme Management**

Theme is managed via Context API:

```javascript
// In component
import { useTheme } from '@/contexts/theme-context';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
```

### **3. Animation Variants**

Animation configurations are defined once and reused:

```javascript
// src/config/animation-variants.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

// Usage
import { fadeInUp } from '@/config/animation-variants';
<motion.div variants={fadeInUp} />
```

### **4. Custom Hooks**

Reusable logic extracted into hooks:

```javascript
// Scroll to top on page load
import { useScrollToTop } from '@hooks/use-scroll-to-top';

function MyPage() {
  useScrollToTop();
  return <div>Content</div>;
}
```

### **5. SEO Component**

Dynamic meta tag management:

```javascript
import { SEO } from '@components/common';

function MyPage() {
  return (
    <>
      <SEO 
        title="Page Title"
        description="Page description"
        canonical="https://example.com/page"
      />
      <div>Content</div>
    </>
  );
}
```

---

## 💻 Development Workflow

### **Adding a New Project**

1. Add project data to `src/constant/data/myProject.js`:
```javascript
{
  id: 7,
  title: "New Project",
  description: "Project description",
  year: 2026,
  role: "Full Stack Developer",
  status: "Completed",
  duration: "2 weeks",
  image: newProjectImage,
  githubLink: "https://github.com/...",
  liveLink: "https://...",
  category: "react",
  features: ["Feature 1", "Feature 2"],
  tech: ["React", "Node.js"],
  performance: ["Fast", "Optimized"]
}
```

2. Add project image to `src/assets/projects/`
3. Export image in `src/assets/index.js`
4. Update sitemap.xml with new project URL

### **Adding a New Skill**

1. Add skill icon to `src/assets/skills/`
2. Export in `src/assets/index.js`
3. Add to `src/constant/data/skills.js`:
```javascript
{
  title: "Frontend", // or "Backend" or "Tools"
  skills: [
    {
      name: "New Skill",
      img: newSkillIcon
    }
  ]
}
```

### **Adding a New Section**

1. Create component in `src/components/home/new-section/`
2. Add CSS file
3. Import and add to `src/pages/home/Home.jsx`
4. Add navigation link to `src/constant/data/navbar.js`

---

## ✅ Best Practices

### **Component Guidelines**

1. **Keep components small and focused**
   - One responsibility per component
   - Extract complex logic to custom hooks

2. **Use proper prop types**
   - Add JSDoc comments for props
   - Document expected prop types

3. **Memoize expensive calculations**
   ```javascript
   const filteredData = useMemo(() => {
     return data.filter(item => item.active);
   }, [data]);
   ```

4. **Use semantic HTML**
   ```javascript
   // Good
   <section aria-labelledby="heading">
     <h2 id="heading">Title</h2>
   </section>
   
   // Bad
   <div>
     <div>Title</div>
   </div>
   ```

### **Performance Guidelines**

1. **Lazy load heavy components**
   ```javascript
   const HeavyComponent = lazy(() => import('./HeavyComponent'));
   ```

2. **Use proper image attributes**
   ```javascript
   <img 
     src="image.jpg"
     alt="Description"
     width="200"
     height="200"
     loading="lazy"
   />
   ```

3. **Avoid inline functions in JSX**
   ```javascript
   // Good
   const handleClick = () => { /* ... */ };
   <button onClick={handleClick}>Click</button>
   
   // Bad
   <button onClick={() => { /* ... */ }}>Click</button>
   ```

### **Accessibility Guidelines**

1. **Always provide alt text for images**
2. **Use proper ARIA labels**
3. **Ensure keyboard navigation works**
4. **Test with screen readers**
5. **Respect user preferences (reduced motion)**

### **SEO Guidelines**

1. **Use semantic HTML structure**
2. **Provide unique titles and descriptions**
3. **Use proper heading hierarchy (h1 → h2 → h3)**
4. **Add structured data where appropriate**
5. **Keep sitemap.xml updated**

---

## 🔧 Common Tasks

### **Changing Theme Colors**

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --accent-color: darkgoldenrod;
  --bg-primary-color: #000;
  /* ... */
}

.light {
  --accent-color: rgb(184, 134, 11);
  --bg-primary-color: rgb(250, 250, 250);
  /* ... */
}
```

### **Updating Contact Information**

Edit `src/config/constants.js`:

```javascript
export const SOCIAL_LINKS = {
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  email: "email@example.com",
  whatsapp: "1234567890",
};
```

### **Changing Animation Speed**

Edit `src/config/animation-variants.js`:

```javascript
export const fadeInUp = {
  visible: {
    transition: {
      duration: 0.5, // Adjust this
      type: "spring",
      stiffness: 100, // Adjust this
    }
  }
};
```

### **Adding a New Constant**

1. Add to `src/config/constants.js`
2. Export it
3. Import where needed: `import { MY_CONSTANT } from '@/config/constants'`

---

## 🐛 Troubleshooting

### **Build Errors**

**Issue:** Import path not found
```
Solution: Check that path aliases are configured in:
- vite.config.js
- jsconfig.json
```

**Issue:** Module not found
```
Solution: Run `npm install` to ensure all dependencies are installed
```

### **Runtime Errors**

**Issue:** Theme not persisting
```
Solution: Check that ThemeProvider wraps the app in AppRoute.jsx
```

**Issue:** Images not loading
```
Solution: Ensure images are in public/ folder or properly imported from assets/
```

### **Performance Issues**

**Issue:** Slow animations
```
Solution: Check if animation variants are defined outside component
```

**Issue:** Unnecessary re-renders
```
Solution: Use React DevTools Profiler to identify the cause
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Motion Documentation](https://motion.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance](https://web.dev/performance/)

---

## 🤝 Contributing

When contributing to this project:

1. Follow the established patterns
2. Add JSDoc comments to functions
3. Update documentation if needed
4. Test accessibility with keyboard navigation
5. Ensure build passes: `npm run build`
6. Run linter: `npm run lint`

---

## 📝 Notes

- This project uses JavaScript, not TypeScript
- All styling is done with CSS (no CSS-in-JS)
- Images should be in WebP format for better performance
- Always test on multiple browsers and devices

---

**Maintained by:** Momen Hesham  
**Last Updated:** May 8, 2026
