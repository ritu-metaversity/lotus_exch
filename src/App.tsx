
import { RouterProvider } from "react-router-dom";
import "./App.css";
import RouteDesk from "./RouteDesk";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {

 

  
  return (
    <div className="App">
      <RouterProvider router={RouteDesk()} />
    </div>
  );
};

export default App;
