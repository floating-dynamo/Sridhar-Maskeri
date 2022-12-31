import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:title" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
