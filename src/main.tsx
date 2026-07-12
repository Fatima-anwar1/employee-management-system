import React from "react";
import ReactDOM from "react-dom/client";
import EmployeeApp from "./EmployeeApp"; // Kyunki file src ke andar hi hai
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <EmployeeApp />
  </React.StrictMode>
);
