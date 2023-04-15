import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, Link, RouterProvider, Route, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const AppLayout = () => (
  <>
      <Navbar/>
      <Outlet/>
  </>
)
const router = createBrowserRouter([
  {
      element: <AppLayout/>,
      children:[
          {
              path: "/",
              element: <Home/>,
          },
          {
              path:"products",
              element: <Products/>,
          },
          {
              path:"reports",
              element: <Reports/>,
          },
      ]
  }
]);
