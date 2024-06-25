import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/Layout/Layout";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import SinglePage from "./routes/SinglePage/SinglePage";
import Register from "./routes/Register/Register";
import LoginPage from "./routes/LoginPage/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
