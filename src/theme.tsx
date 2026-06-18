import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

export type ThemeTransition = {
  from: Theme;
  to: Theme;
  x: number;
  y: number;
};

type ThemeContextValue = {
  theme: Theme;
  transition: ThemeTransition | null;
  isTransitioning: boolean;
  toggleTheme: () => void;
  completeTransition: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  return stored === "dark" ? "dark" : "light";
}

export function getTransitionOrigin(): { x: number; y: number } {
  const hero = document.querySelector(".hero-figure");
  if (hero) {
    const rect = hero.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [transition, setTransition] = useState<ThemeTransition | null>(null);

  useEffect(() => {
    if (transition) return;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme, transition]);

  const completeTransition = useCallback(() => {
    setTransition((current) => {
      if (!current) return null;
      setTheme(current.to);
      return null;
    });
  }, []);

  const toggleTheme = () => {
    if (transition) return;

    const next: Theme = theme === "light" ? "dark" : "light";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(next);
      return;
    }

    setTransition({ from: theme, to: next, ...getTransitionOrigin() });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        transition,
        isTransitioning: transition !== null,
        toggleTheme,
        completeTransition,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeScope({
  theme: scopedTheme,
  children,
}: {
  theme: Theme;
  children: ReactNode;
}) {
  const parent = useContext(ThemeContext);
  if (!parent) {
    throw new Error("ThemeScope must be used within ThemeProvider");
  }

  return (
    <ThemeContext.Provider value={{ ...parent, theme: scopedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
