import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Transacao from './pages/Transacao/Transacao';
import Carteira from './pages/Carteira/Carteira';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/Cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/Transacao",
    element: <Transacao/>,
  },
  {
    path: "/Carteira",
    element: <Carteira/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
