
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./fecters/home";
// import About from "./fecters/about";
import Layout from "./layout";
import store from './store'
import { Provider } from 'react-redux'
import Signin from "./fecters/signin/signin";
import Signup from "./fecters/signup/signup";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />

            
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
