import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContentPage } from "./pages/ContentPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<ContentPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
