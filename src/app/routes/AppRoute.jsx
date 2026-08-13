import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "@app/layouts/MainLayout";
import ErrorBoundary from "@pages/errorBoundary/ErrorBoundary";
import { SplashScreen } from "@components/common";
import { ROUTES } from "./paths.js";

const Home = lazy(() => import("@pages/home/Home.jsx"));
const Details = lazy(() => import("@pages/details/Details.jsx"));

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.projectDetails, element: <Details /> },
    ],
  },
]);

export default function AppRoute() {
  return (
    <>
      {/* Sits outside the router so the curtain covers the whole app —
          including the lazy route chunks resolving underneath it. */}
      <SplashScreen />
      <RouterProvider router={router} />
    </>
  );
}
