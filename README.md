# React Floating Dock

A modern, highly interactive **floating dock** component for React, built with **raw CSS**. It features a dynamic glassmorphism UI, scroll-aware visibility, hover tooltips, and Google Pixel-inspired "squash and stretch" physics.

---

## Features

* **Smart Scroll Detection:** Hides automatically when scrolling down to save screen real estate and smoothly reappears on scroll up.
* **Material You Physics:** Uses CSS-only `@keyframes` animations to simulate realistic jelly/spring motion without animation libraries.
* **Dynamic Glassmorphism:** Frosted-glass styling powered by `backdrop-filter` with support for both Light and Dark modes.
* **Hover Tooltips:** Smooth animated tooltips generated automatically from dock item labels.
* **Highly Customizable:** Easily edit routes, labels, icons, styling, spacing, and animations.
* **Lightweight:** No animation dependencies—everything is powered by native CSS.

---

## Installation

### 1. Copy the Component Files

Place the following files inside your project:

```text
src/
└── components/
    ├── FloatingDock.jsx
    └── FloatingDock.css
```

### 2. Install Dependencies

The component uses **Lucide React** by default:

```bash
npm install lucide-react
```

---

## Usage

Import the component into your main application file and place it near the bottom of your JSX tree.

### Example: `src/App.jsx`

```jsx
import FloatingDock from "./components/FloatingDock";

function App() {
  return (
    <>
      <main>
        <h1>My Application</h1>
        <p>Your main page content goes here...</p>
      </main>

      {/* Floating Dock */}
      <FloatingDock />
    </>
  );
}

export default App;
```

### Where Should I Put It?

To keep the dock visible across your entire application:

* **Vite / Create React App:** Place it inside `App.jsx`
* **React Router:** Place it inside your shared `Layout` component
* **Next.js:** Place it inside `app/layout.jsx` or your root layout

> **Theme Note:** The demo includes a `D` key listener for toggling Light/Dark mode. You can remove that logic and connect the component to your application's theme system instead.

---

## Customization

### Editing Dock Items

Open **`FloatingDock.jsx`** and edit the `dockItems` array:

```jsx
const dockItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Projects", href: "/projects", icon: CodeXml },
];
```

You can:

* Add new items
* Remove existing items
* Change routes (`href`)
* Change labels
* Replace icons

Tooltips are generated automatically from the `label` value.

---

### Changing Icons

By default, the component imports icons from **Lucide React**:

```jsx
import { Home, User, Settings } from "lucide-react";
```

You can replace these with icons from any React icon library.

Example:

```jsx
import { FaHome, FaUser } from "react-icons/fa";

const dockItems = [
  { label: "Home", href: "/", icon: FaHome },
  { label: "Profile", href: "/profile", icon: FaUser },
];
```

#### Icon Requirements

Any icon component will work as long as it:

* Is a valid React component
* Can be rendered like `<IconComponent />`
* Supports standard SVG/component props (`size`, `className`, etc.)
* Is assigned to the `icon` property inside the `dockItems` array

Example:

```jsx
const dockItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
];
```

---

### Adjusting Styles & Animations

Open **`FloatingDock.css`** to customize the appearance.

#### Glassmorphism

Adjust values such as:

```css
background-color: rgba(15, 15, 15, 0.2);
backdrop-filter: blur(12px);
```

to make the glass effect stronger, lighter, clearer, or more tinted.

#### Physics & Animations

Modify:

* `@keyframes pop-up-squash`
* `@keyframes drop-down-hide`
* `cubic-bezier()` timing functions

to control:

* Bounce amount
* Squash & stretch intensity
* Show/hide behavior
* Hover responsiveness

#### Sizing & Layout

Adjust:

```css
.icons {
  width: 26px;
  height: 26px;
}
```

and:

```css
.content {
  column-gap: 5px;
}
```

to change icon size and spacing.

---

## Requirements

### React

* React 16.8+
* Uses React Hooks (`useState`, `useEffect`)

### CSS

* CSS3
* `backdrop-filter`
* CSS Variables (optional)
* CSS Keyframes & Transforms

### Icons

If using the default setup:

```bash
npm install lucide-react
```

If using another icon library, ensure the icons:

* Are React components
* Render SVGs or valid JSX
* Support component props such as `size`, `className`, and `color`

---

## License

MIT
