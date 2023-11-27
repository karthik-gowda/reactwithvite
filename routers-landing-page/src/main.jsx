/* eslint-disable react/jsx-key */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github, { githubInfo } from "./components/Github/Github";
import User from "./components/User/User";
import Login from "./components/Login/Login";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]);
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        path=""
        element={<Home />}
      />
      <Route
        path="about"
        element={<About />}
      />
      <Route
        path="contact"
        element={<Contact />}
      />
      <Route
        path="user/:id"
        element={<User />}
      />
      <Route
        path="github"
        loader={githubInfo}
        element={<Github />}
      />
    </Route>,
    <Route
      path="login"
      element={<Login />}
    ></Route>
  ])
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
