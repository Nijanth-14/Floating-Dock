# Floating Dock

A modern **floating dock** for React, built with **raw CSS** and customizable icon support. Features scroll-aware visibility, smooth CSS-only animations, and support for light/dark themes.

## Features

*  Hides on scroll down, reappears on scroll up
*  CSS-only animations for maximum performance
*  Light & dark theme support
*  Customizable icons
*  Lightweight and dependency-free (except your chosen icon library)

## Installation

1. Copy `FloatingDock.jsx` and `FloatingDock.css` into your project (e.g. `src/components/`).
2. Install an icon library (Lucide React is recommended):

```bash
npm install lucide-react
```

## Usage

Import the component into your main file (`App.jsx`, `App.js`, or your root layout component) and place it near the bottom of your JSX.

**Example: `src/App.jsx`**

```jsx
import FloatingDock from "./components/FloatingDock";

function App() {
  return (
    <>
      {/* Your page content */}
      <main>
        <h1>My App</h1>
        <p>Your content goes here...</p>
      </main>

      {/* Floating Dock */}
      <FloatingDock />
    </>
  );
}

export default App;
```

### Where should I put it?

* **Single-page app:** Add `<FloatingDock />` inside `App.jsx`
* **React Router:** Add it inside your shared layout component
* **Next.js:** Add it inside `app/layout.jsx` or your main layout

## Customizing Dock Items

Open **`src/components/FloatingDock.jsx`** and edit the `dockItems` array:

```jsx
const dockItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];
```

Add, remove, or modify items to fit your application.

## Styling

Open **`src/components/FloatingDock.css`** to customize:

* Glassmorphism colors
* Blur intensity
* Dock size and spacing
* Animations and transitions
* Light/Dark mode appearance

## Icons

By default, the component uses **Lucide React**:

```bash
npm install lucide-react
```

```jsx
import { Home, User, Settings } from "lucide-react";
```

You can use any React icon library.

### React Icons

```bash
npm install react-icons
```

```jsx
import { FaHome, FaUser } from "react-icons/fa";
```

### Heroicons

```bash
npm install @heroicons/react
```

```jsx
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
```

### Tabler Icons

```bash
npm install @tabler/icons-react
```

```jsx
import { IconHome, IconUser } from "@tabler/icons-react";
```

### Phosphor Icons

```bash
npm install @phosphor-icons/react
```

```jsx
import { House, User } from "@phosphor-icons/react";
```

### Remix Icons

```bash
npm install @remixicon/react
```

```jsx
import HomeLineIcon from "@remixicon/react/HomeLineIcon";
```

> Any React icon component can be used as long as it is passed to the `icon` property in your `dockItems` array.

## Requirements

* React
* Any React-compatible icon library (Lucide React recommended)

## License

MIT
