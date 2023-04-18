import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { createBrowserRouter, Link, RouterProvider, Route, Outlet } from "react-router-dom";
import Home from './features/menupages/home';
import About from './features/menupages/about';
import Header from './features/pageheader/pageheader';
import { makeStyles } from '@material-ui/core/styles';
import Articles from './features/menupages/articles';
import Contact from './features/menupages/contact';
import PageFooter from './features/pagefooter/pagefooter';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:50,
    backgroundColor: 'black',
    minHeight: '100vh',
  },
}));

const AppLayout = () => (
  <div className={useStyles().root}>
      <Header/>
      <Outlet/>
      <PageFooter/>
  </div>
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
              path:"about",
              element: <About/>,
          },
          {
            path:"blog",
            element: <Articles/>,
        },
          {
              path:"contact",
              element: <Contact/>,
          },
      ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
