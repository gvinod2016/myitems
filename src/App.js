
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./fecters/home";
import About from "./fecters/about";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
