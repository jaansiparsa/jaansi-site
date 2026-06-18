import "./ThemeToggle.css";

import { useTheme } from "../theme";

export function ThemeToggle() {
  const { theme, isTransitioning, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      disabled={isTransitioning}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      <img
        src={theme === "light" ? "/moonpink.png" : "/suniconnobg.png"}
        alt=""
        className="theme-toggle-icon"
      />
    </button>
  );
}
