import React from "react";
import Dashboard from "./Components/Dashboard";
import Conversations from "./Components/Conversations";
import Sidebar from "./Components/Sidebar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/conversations" element={<Conversations />}></Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
