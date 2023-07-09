import { AppLayout, User, Home, Blogs } from "../components";

export const AppRouter = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
];
