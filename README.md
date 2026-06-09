# Floating Dock

A modern **floating dock** for React, built with **raw CSS** and **Lucide React** icons. Features smooth scroll-aware behavior, lightweight animations, and support for light/dark themes.

## Features

- Auto-hide on scroll down, reappear on scroll up
- Smooth CSS-only animations (no animation libraries)
- Light & dark mode support
- Lightweight and performant
- Uses `lucide-react` for scalable SVG icons

## Installation

1. Copy `FloatingDock.jsx` and `FloatingDock.css` into your project.
2. Install the required dependency:

```bash
npm install lucide-react
```

## Usage

```jsx
import FloatingDock from "./components/FloatingDock";

function App() {
  return (
    <div>
      {/* Your app content */}
      <FloatingDock />
    </div>
  );
}

export default App;
```

## Requirements

- React
- lucide-react

## License

MIT
