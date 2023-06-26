import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/store";
import Home from "./Page/Home/Home";
import Kedokteran from "./Page/Kedokteran/Kedokteran";
import MasukPtn from "./Page/Ptn/MasukPtn";
import Teacher from "./Page/Teacher/Teacher";
import Alumni from "./Page/Alumni/Alumni";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Home",
    element: <Home />
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
