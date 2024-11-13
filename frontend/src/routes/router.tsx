import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import ProtectedRoute from "../Layouts/ProtectedLayouts";
import Dashboard from "../components/pages/Dashboard";
import About from "../components/pages/About";
import MainLayouts from "../Layouts/MainLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  }
])