import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Orders from './components/Orders'
import SignUp from './components/SignUp'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'orders',
        element:<Orders></Orders>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
