import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter basename="/sun-nxt-clone">
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
