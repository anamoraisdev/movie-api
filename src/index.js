import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './styles/globals.css'
import Navbar from './components/navbar';
import Menu from './components/menu';
import Detalhes from './detalhes';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/detalhes",
    element: <Detalhes/>,
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
