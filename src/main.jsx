import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import Root from './routes/root'
import RestaurantList from './routes/restaurantlist';
import DeMar from './components/demar';
import CrRapida from './components/crapida';
import Asiática from './components/asiatico';
import Init from './components/init'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Init
        />
      },
      {
        path: "/restaurants",
        element: <RestaurantList />,
      },
      {
        path: "/comida-de-mar",
        element: <DeMar/>,
      },
      {
        path: "/asiatica",
        element: <Asiática/>,
      },
      {
        path: "/comida-rapida",
        element: <CrRapida/>,
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
