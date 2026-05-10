import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@app/layouts/MainLayout";
import ErrorBoundary from "@pages/errorBoundary/ErrorBoundary";
import { ROUTES } from "./paths.js";

const Home = lazy(() => import("@pages/home/Home.jsx"));
const Details = lazy(() => import("@pages/details/Details.jsx"));

const router = createBrowserRouter(
  [
    {
      path: ROUTES.home,
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <Home /> },
        { path: ROUTES.projectDetails, element: <Details /> },
      ],
    },
  ],
  { basename: "/momen-portfolio/" },
);

export default function AppRoute() {
  return <RouterProvider router={router} />;
}
