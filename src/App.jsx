import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, About, Receipe, Receipes } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipe/:id",
          element: <Receipe />,
        },
        {
          path: "/recipes",
          element: <Receipes />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
