
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'

import Layout from "./layout";
import store from './store'
import Home from "./feature/home";
import Signin from "./feature/signin";
import Signup from "./feature/signup";
import Forgotpassword from "./feature/forgot-password";

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
