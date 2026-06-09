import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  GraduationCap,
  CodeXml,
  FolderKanban,
  Contact,
} from "lucide-react";
import "./FloatingDock.css";

/* ========================================
  EDIT HERE: DOCK ITEMS
  ========================================
  Add, remove, or modify the items in your dock here.
  Make sure you import any new icons from 'lucide-react' at the top!
*/
const dockItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Projects", href: "/projects", icon: CodeXml },
  { label: "Experience", href: "/experience", icon: FolderKanban },
  { label: "Contact", href: "/contact", icon: Contact },
];

export default function FloatingDock() {
  // STATE: Controls whether the dock is in light or dark mode
  const [isLightMode, setIsLightMode] = useState(() => {
    // Check if we are in a browser environment to avoid SSR errors
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("isLightMode");
      return savedTheme ? JSON.parse(savedTheme) : false;
    }
    return false;
  });

  // STATE: Controls whether the dock is currently visible on screen
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Determines icon color based on the current theme
  const iconColor = isLightMode ? "black" : "white";

  useEffect(() => {
    localStorage.setItem("isLightMode", JSON.stringify(isLightMode));
  }, [isLightMode]);

  /*
    THEME TOGGLE LISTENER
    Currently binds to the 'D' key for testing. 
    If you have a global theme provider in your app (like Tailwind dark mode),
    you can delete this useEffect and pass your theme state as a prop instead!
  */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "d" || event.key === "D") {
        setIsLightMode((prevMode) => !prevMode);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /*
    SCROLL DETECTION LOGIC
    Hides the dock when scrolling down, shows it when scrolling up.
  */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // "50" is the threshold. It won't hide if you are at the absolute top of the page.
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`dock-container ${isVisible ? "is-visible" : "is-hidden"}`}>
      <div className="content">
        {dockItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <a href={item.href} className="icon-wrapper" key={index}>
              {/* EDIT HERE: Change size={32} to make icons larger or smaller */}
              <IconComponent className="icons" color={iconColor} size={32} />
              <span className="tooltip">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
