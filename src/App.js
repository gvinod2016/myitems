
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./fecters/home";
import About from "./fecters/about";
import Layout from "./layout";
import store from './store'
import { Provider } from 'react-redux'
// console.log(store, 'store....')
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
