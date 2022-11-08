import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './styles/globals.css'
import Navbar from './components/navbar';
import Menu from './components/menu';
import Inicio from './inicio';
import Detalhes from './detalhes';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/detalhes",
    element: <Detalhes/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <div className='flex'>
    <Menu/>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
