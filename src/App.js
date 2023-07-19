import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GuitarSchool from "./pages/GuitarSchool";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
