import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, RootLayout, AboutPage } from './routes/index'

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
    ]
  },
]);




// Render
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);