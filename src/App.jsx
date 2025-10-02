import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Article from "./pages/Article";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:creator/:slug",
      element: <Article />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
