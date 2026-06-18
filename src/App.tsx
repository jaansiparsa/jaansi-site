import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./theme";
import { ThemeToggle } from "./components/ThemeToggle";
import { Home } from "./pages/Home";
import { ContentPage } from "./pages/ContentPage";
import { BlogArticlePage } from "./pages/BlogArticle";
import { VideoPage } from "./pages/VideoPage";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app">
          <ThemeToggle />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/video/:slug" element={<VideoPage />} />
          <Route path="/:slug" element={<ContentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
