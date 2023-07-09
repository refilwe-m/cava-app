import { AppLayout, User, Home } from "../components";

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
    ],
  },
];
