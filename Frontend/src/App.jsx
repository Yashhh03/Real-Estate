import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/Layout/Layout";
import RequireAuth from "./routes/Layout/RequireAuth";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import SinglePage from "./routes/SinglePage/SinglePage";
import Register from "./routes/Register/Register";
import LoginPage from "./routes/LoginPage/LoginPage";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/newPostPage/NewPostPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },

        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/profile", element: <ProfilePage /> },
        { path: "/profile/update", element: <ProfileUpdatePage /> },
        { path: "/add", element: <NewPostPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
