
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'

import Layout from "./layout";
import store from './store'
import Home from "./fecters/home";
import Signin from "./fecters/signin";
import Signup from "./fecters/signup";
import Forgotpassword from "./fecters/forgot-password";

import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="sign-in" element={<Signin />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
          </Route>
        </Routes>
      </Provider>
      <ToastContainer />

    </BrowserRouter>
  );
}
export default App;
