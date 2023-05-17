import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
/* import "./index.css";*/
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Portofolio from "./routes/portofolio";
import Blog from "./routes/blog";
import Contact from "./routes/contact";
import { ThemeProvider } from "./routes/ThemeContext";
import Theme from "./routes/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },    
  {
    path: "/contact",
    element: <Contact />,
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the RouterProvider and OtherComponent with the ThemeProvider */}
    <ThemeProvider>
      <RouterProvider router={router}>
        <Theme />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);