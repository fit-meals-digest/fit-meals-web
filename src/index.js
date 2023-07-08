import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './features/menupages/home';
import About from './features/menupages/about';
import Header from './features/pageheader/pageheader';
import Articles from './features/menupages/articles';
import Contact from './features/menupages/contact';
import PageFooter from './features/pagefooter/pagefooter';
import theme from './theme';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    padding: '16px',
    '@media (min-width:600px)': {
      padding: 32,
    },
    '@media (min-width:960px)': {
      padding: '48px',
    },
    '@media (min-width:1280px)': {
      padding: '64px',
    },
  },
});

const AppLayout = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <div className={useStyles().root}>
        <Header />
        <Outlet />
        <PageFooter />
      </div>
    </ThemeProvider>
  </StyledEngineProvider>

)
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Articles />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
