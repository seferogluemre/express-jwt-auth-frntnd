import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, RootLayout, AboutPage, LoginPage } from './routes/index'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
    ]
  },
]);




// Render
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);