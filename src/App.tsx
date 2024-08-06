
import { RouterProvider } from "react-router-dom";
import "./App.scss";
// import RouteDesk from "./RouteDesk";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import AppRoutes from "./RouteDesk";


const App = () => {

 

  
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
};

export default App;
