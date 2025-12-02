# X Mockup Generator

A pixel-perfect, fully functional React application for generating X (formerly Twitter) interface mockups. Built with React, Tailwind CSS, and Vite.

![X Mockup Generator](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38bdf8) ![Vite](https://img.shields.io/badge/Vite-5.0.0-646cff)

## 🚀 Features

### Core Capabilities

- **Dynamic Post Creation** - Control panel to add new posts to the feed
- **Verification Badges** - Blue (Subscription), Gold (Organization), Gray (Government)
- **Account Labels** - Parody, Fan, Commentary, Automated, Business, Government, State-affiliated, Official
- **Metric Manipulation** - Custom values for Replies, Reposts, Likes, Views (supports "12K", "45M" formats)
- **Quote Retweet Support** - Embed posts within posts
- **Export to HTML** - Generate standalone, scrollable mockup files

### Visual Fidelity

- Pure black background (`#000000`)
- Authentic border colors (`#2f3336`)
- X accent blue (`#1d9bf0`)
- Inter/system-ui font stack (matching X's Chirp)
- Authentic verification badge SVGs (rosette shape)

---

## 📁 Project Structure

```
xuimockup/
├── src/
│   ├── App.jsx          # Main application (single-file architecture)
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles & Tailwind imports
├── index.html           # HTML entry point
├── package.json         # Dependencies & scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md            # This file
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Framework |
| Vite | 5.0.0 | Build tool & dev server |
| Tailwind CSS | 3.3.6 | Utility-first styling |
| lucide-react | 0.294.0 | Icon library |
| PostCSS | 8.4.32 | CSS processing |
| Autoprefixer | 10.4.16 | CSS vendor prefixes |

---

## 🎨 Design System

### Colors

```javascript
// tailwind.config.js extended colors
{
  'x-black': '#000000',      // Background
  'x-dark': '#16181c',       // Cards, secondary backgrounds
  'x-border': '#2f3336',     // Borders, dividers
  'x-gray': '#71767b',       // Secondary text
  'x-blue': '#1d9bf0',       // Primary accent, links
  'x-white': '#e7e9ea',      // Primary text
  'x-light-gray': '#536471', // Tertiary text
}
```

### Typography

```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Spacing & Sizing

| Element | Size |
|---------|------|
| Avatar (standard) | 40px × 40px |
| Avatar (quote post) | 20px × 20px |
| Icon (action buttons) | 18px × 18px |
| Icon (navigation) | 26px × 26px |
| Border radius (buttons) | `rounded-full` |
| Border radius (cards) | `rounded-2xl` (16px) |

---

## 🧩 Component Architecture

### Main Components

```
App (root)
├── XLogo                    # X logo SVG component
├── VerificationBadge        # Blue/Gold/Gray verification badges
├── AccountLabel             # Parody, Automated, Business, etc.
├── Post                     # Individual post component (recursive for quotes)
├── NavItem                  # Sidebar navigation items
├── TrendItem                # Trending topic items
├── WhoToFollow              # Follow suggestion items
└── CreatePostModal          # Post creation modal with form
```

### Component Props

#### `Post`
```typescript
interface PostProps {
  post: {
    id: number;
    displayName: string;
    username: string;
    verified: 'none' | 'blue' | 'gold' | 'gray';
    accountLabel?: 'none' | 'parody' | 'fan' | 'commentary' | 'automated' | 'business' | 'government' | 'state-affiliated' | 'official';
    content: string;
    image?: string | null;
    avatar?: string | null;
    timestamp: string;
    replies: string;
    reposts: string;
    likes: string;
    views: string;
    quotePost?: PostProps['post'] | null;
  };
  isQuote?: boolean;
}
```

#### `VerificationBadge`
```typescript
interface VerificationBadgeProps {
  type: 'none' | 'blue' | 'gold' | 'gray';
}
```

#### `AccountLabel`
```typescript
interface AccountLabelProps {
  label: 'none' | 'parody' | 'fan' | 'commentary' | 'automated' | 'business' | 'government' | 'state-affiliated' | 'official';
}
```

---

## 📝 Code Standards

### File Organization

1. **Single-file architecture** - All React components live in `App.jsx`
2. **Component order**:
   - Imports
   - SVG/Icon components
   - Small reusable components
   - Feature components
   - Utility functions
   - Main App component
   - Export

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `CreatePostModal` |
| Functions | camelCase | `handleAddPost` |
| Constants | SCREAMING_SNAKE_CASE | `DEFAULT_AVATAR_SIZE` |
| CSS classes | Tailwind utilities | `bg-x-blue hover:bg-x-blue/90` |
| Props | camelCase | `isQuote`, `accountLabel` |

### Tailwind CSS Guidelines

```jsx
// ✅ Good - Logical grouping
<button className="
  mt-4 bg-x-blue text-white font-bold 
  py-3 px-4 rounded-full 
  hover:bg-x-blue/90 transition-colors
">

// ❌ Avoid - Random order
<button className="hover:bg-x-blue/90 mt-4 rounded-full py-3 font-bold px-4 text-white bg-x-blue transition-colors">
```

**Class ordering convention:**
1. Layout (display, position, flex)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography (font, text)
5. Colors (bg, text color, border color)
6. Borders (border, rounded)
7. Effects (shadow, opacity)
8. States (hover, focus, active)
9. Transitions/Animations

### State Management

- Use React `useState` for local component state
- Pass callbacks down for child-to-parent communication
- Keep state as close to where it's used as possible

```jsx
// ✅ Good - State at appropriate level
function App() {
  const [posts, setPosts] = useState([...]);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <CreatePostModal 
      onSubmit={(newPost) => setPosts([newPost, ...posts])}
      onClose={() => setShowModal(false)}
    />
  );
}
```

### SVG Icons

- Use `lucide-react` for standard icons
- Create custom SVG components for brand-specific icons (X logo, verification badges)
- Always include `className` prop for styling flexibility

```jsx
// Custom SVG component pattern
const XLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="..." />
  </svg>
);
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/n1tr0maverick/xuimockup.git
cd xuimockup

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (http://localhost:5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📤 Export Feature

The "Export HTML" button generates a standalone HTML file:

- **Self-contained** - All CSS inline
- **No JavaScript** - Static, scrollable mockup
- **External dependencies**: Google Fonts (Inter), avatar images
- **File size**: ~15-30KB depending on post count

### Export includes:
- All current posts with full styling
- Verification badges
- Account labels
- Quote posts
- Engagement metrics
- Sticky header with X branding

---

## 🔧 Configuration Files

### `tailwind.config.js`

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'x-black': '#000000',
        'x-dark': '#16181c',
        'x-border': '#2f3336',
        'x-gray': '#71767b',
        'x-blue': '#1d9bf0',
        'x-white': '#e7e9ea',
      },
      fontFamily: {
        'chirp': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

## 🤝 Contributing

### Code Review Checklist

- [ ] Component follows single-responsibility principle
- [ ] Props are properly typed/documented
- [ ] Tailwind classes follow ordering convention
- [ ] No hardcoded colors (use design system)
- [ ] SVGs use `currentColor` for flexibility
- [ ] Hover/focus states implemented for interactive elements
- [ ] Responsive breakpoints considered (xl: for sidebar)

### Git Commit Convention

```
<type>: <description>

[optional body]

Types:
- feat: New feature
- fix: Bug fix
- style: Styling changes
- refactor: Code refactoring
- docs: Documentation
- chore: Maintenance
```

**Examples:**
```
feat: Add state-affiliated media account label
fix: Verification badge alignment in quote posts
style: Adjust hover opacity on action buttons
```

---

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

## 🙏 Acknowledgments

- Design inspiration: X (Twitter) Dark Mode interface
- Icons: [Lucide Icons](https://lucide.dev/)
- Font: [Inter](https://rsms.me/inter/)
