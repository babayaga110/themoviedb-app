import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import NotFound from "../pages/Not_Found";
import ProtectedRoute from "./ProtectedRoute";
import Loading from "../components/Loading/Loading";

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated === false ? <Login /> : <Navigate to="/dashboard" />,
      index: true,
    },
    {
      element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/genre-management",
          element: <GenreManagement />,
        },
        {
          path: "/store-customization",
          element: <StoreCustomization />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  if (isAuthenticated === null) {
    // Show a loading indicator or splash screen while authentication status is being determined
    return <Loading />;
  }

  return <RouterProvider router={router} />;
};

export default AppRouter;
