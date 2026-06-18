import { useLayoutEffect, useRef, type ReactNode } from "react";
import { ThemeScope, type Theme, type ThemeTransition } from "../theme";
import "./ThemeTransition.css";

type ThemeTransitionLayersProps = {
  transition: ThemeTransition;
  onComplete: () => void;
  children: ReactNode;
};

function ThemeLayer({
  theme,
  className,
  origin,
  onAnimationEnd,
  children,
}: {
  theme: Theme;
  className: string;
  origin?: { x: number; y: number };
  onAnimationEnd?: () => void;
  children: ReactNode;
}) {
  const layerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    layerRef.current?.scrollTo(0, window.scrollY);
  }, []);

  return (
    <div
      ref={layerRef}
      className={`theme-layer ${className}`}
      data-theme={theme}
      style={
        origin
          ? ({
              "--tx": `${origin.x}px`,
              "--ty": `${origin.y}px`,
            } as React.CSSProperties)
          : undefined
      }
      onAnimationEnd={onAnimationEnd}
    >
      <ThemeScope theme={theme}>
        <div className="app app--layer">{children}</div>
      </ThemeScope>
    </div>
  );
}

export function ThemeTransitionLayers({
  transition,
  onComplete,
  children,
}: ThemeTransitionLayersProps) {
  return (
    <div className="theme-transition-stage">
      <ThemeLayer theme={transition.from} className="theme-layer--old">
        {children}
      </ThemeLayer>
      <ThemeLayer
        theme={transition.to}
        className="theme-layer--new"
        origin={{ x: transition.x, y: transition.y }}
        onAnimationEnd={onComplete}
      >
        {children}
      </ThemeLayer>
    </div>
  );
}
