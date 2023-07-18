import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from './composer/About/About';
import Service from './composer/Service/Service';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
    children: [
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
