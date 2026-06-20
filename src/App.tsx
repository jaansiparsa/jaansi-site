import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "./theme";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeTransitionLayers } from "./components/ThemeTransitionLayers";
import { Home } from "./pages/Home";
import { ContentPage } from "./pages/ContentPage";
import { BlogArticlePage } from "./pages/BlogArticle";
import { VideoPage } from "./pages/VideoPage";

const AkariPage = lazy(() => import("./pages/AkariPage").then(m => ({ default: m.AkariPage })));
import "./App.css";

function SiteContent() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/video/:slug" element={<VideoPage />} />
        <Route path="/akari" element={<Suspense><AkariPage /></Suspense>} />
        <Route path="/:slug" element={<ContentPage />} />
      </Routes>
    </>
  );
}

function AppShell() {
  const { theme, transition, completeTransition } = useTheme();

  if (transition) {
    return (
      <ThemeTransitionLayers
        transition={transition}
        onComplete={completeTransition}
      >
        <SiteContent />
      </ThemeTransitionLayers>
    );
  }

  return (
    <div className="app" data-theme={theme}>
      <SiteContent />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
