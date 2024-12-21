import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { } from './index'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>emre</div>
  },
]);






// Render
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);