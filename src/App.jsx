import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, About, Receipe, Receipes } from "./pages";

// action
import { action as HomeAction } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/receipe/:id",
          element: <Receipe />,
        },
        {
          path: "/receipes",
          element: <Receipes />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
