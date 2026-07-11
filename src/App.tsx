import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContentPage } from "./pages/ContentPage";
import { BlogArticlePage } from "./pages/BlogArticle";
import { VideoPage } from "./pages/VideoPage";
import "./App.css";

const AkariPage = lazy(() =>
  import("./pages/AkariPage").then((m) => ({ default: m.AkariPage })),
);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/video/:slug" element={<VideoPage />} />
          <Route
            path="/akari"
            element={
              <Suspense>
                <AkariPage />
              </Suspense>
            }
          />
          <Route path="/:slug" element={<ContentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
