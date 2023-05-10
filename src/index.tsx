import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./Pages/Main";
import {Nav} from "./Pages/Nav";
import {FractalsPage} from "./Pages/Fractals";
import {ColorModels} from "./Pages/ColorModels";
import {ColorModelsInfo} from "./Pages/ColorModelsInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/nav",
    element: <Nav/>,
  },
  {
    path: "/nav/fractals",
    element: <FractalsPage/>,
  },
  {
    path: "/nav/color-models",
    element: <ColorModels/>,
  },
  {
    path: "/nav/color-models/info",
    element: <ColorModelsInfo/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
