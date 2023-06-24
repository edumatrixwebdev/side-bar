import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store";
import Dashboard from "./Page/Dashboard";
import Kedokteran from "./Page/Kedokteran";
import MasukPtn from "./Page/MasukPtn";
import Teacher from "./Page/Teacher";
import Alumni from "./Page/Alumni";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Dashboard",
    element: <Dashboard />
  },
  {
    path: "Kedokteran",
    element: <Kedokteran />
  },
  {
    path: "MasukPtn",
    element: <MasukPtn />
  },
  {
    path: "Teacher",
    element: <Teacher />
  },
  {
    path: "Alumni",
    element: <Alumni />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
