import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ServicesAndPrices from './pages/ServicesAndPrices.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/kozni-tvrdonova/",
    element: <App/>,
    children: [
      {
        path: "/kozni-tvrdonova/",
        element: <Home/>
      },
      {
        path: "/kozni-tvrdonova/sluzbyacenik",
        element: <ServicesAndPrices/>
      },
      {
        path: "/kozni-tvrdonova/kontakt",
        element: <Contact/>
      }
    ]
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
