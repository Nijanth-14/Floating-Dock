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

export default function FloatingDock() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const iconColor = isLightMode ? "black" : "white";

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "d" || event.key === "D") {
        setIsLightMode((prevMode) => !prevMode);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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
        <Home className="icons" color={iconColor} size={32} />
        <User className="icons" color={iconColor} size={32} />
        <GraduationCap className="icons" color={iconColor} size={32} />
        <CodeXml className="icons" color={iconColor} size={32} />
        <FolderKanban className="icons" color={iconColor} size={32} />
        <Contact className="icons" color={iconColor} size={32} />
      </div>
    </div>
  );
}
