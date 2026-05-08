import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Context
import { ThemeProvider } from "@/contexts/theme-context";

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
  { basename: "/momen-portfolio/" }
);

/**
 * App Router Component
 * Provides routing and global context providers
 */
export default function AppRoute() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
