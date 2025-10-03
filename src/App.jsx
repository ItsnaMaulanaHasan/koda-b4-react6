import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Article from "./pages/Article";
import SearchPage from "./pages/SearchPage";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/:creator/:slug",
          element: <Article />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
