import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import MainLayout from "@layouts/mainLayout/MainLayout";

// Lazy Pages
const Home = lazy(() => import("@pages/home/Home.jsx"));
const Details = lazy(() => import("@pages/details/Details.jsx"));
import ErrorBoundary from "@pages/errorBoundary/ErrorBoundary";

// Create Router
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <Home /> },
        { path: "details/:id", element: <Details /> },
      ],
    },
  ],

  { basename: "/momen-portfolio/" },
);

export default function AppRoute() {
  return <RouterProvider router={router} />;
}
