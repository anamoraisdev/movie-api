import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './styles/globals.css'
import Acao from './pages/acao'
import Comedia from './pages/comedia'
import Ciencia from './pages/ciencia'
import Navbar from './components/navbar';
import Menu from './components/menu';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acao/>,
  },
  {
    path: "/comedia",
    element: <Comedia/>,
  },
  {
    path: "/ciencia",
    element: <Ciencia/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Menu/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
