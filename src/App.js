import React from "react";
import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <RoutesApp />
      <ToastContainer autoClose={3000} position={"bottom-right"} />
    </div>
  );
};

export default App;
