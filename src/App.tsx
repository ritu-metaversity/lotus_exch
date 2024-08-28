
import { RouterProvider } from "react-router-dom";
import "./App.scss";
// import RouteDesk from "./RouteDesk";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import AppRoutes from "./RouteDesk";
import { Flip, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 


const App = () => {




  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}  
      />
      <AppRoutes />
    </div>
  );
};

export default App;
