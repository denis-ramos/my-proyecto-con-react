import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './componentes/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.render(
  <Router basename="/my-proyecto-con-react"> {/* Aquí especificamos el basename */}
    <Route exact path="/" component={Home} />
    {/* Otras rutas de tu aplicación */}
  </Router>,
  document.getElementById('root')
);