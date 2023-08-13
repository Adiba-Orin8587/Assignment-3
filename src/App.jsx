import './App.css'
import Main from './Layout/Main'
import Home from './Component/Home/Home'
import Cart from './Component/Cart/Cart'
import Order from './Component/Order/Order'
import Registration from './Component/Registration/Registration'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Product from './Component/Product/Product'
import Login from './Component/Login/Login'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('Product.json')
          }
        },
        {
          path: '/order',
          element: <Order></Order>,
        },
        {
          path: '/cart',
          element: <Cart></Cart>,
        },
        {
          path: '/registration',
          element: <Registration></Registration>,
        },
        {
          path: '/registration/login',
          element: <Login></Login>,
        },
        {
          path: '/product',
          element: <Product></Product>,
          loader: async () => {
            return fetch('Product.json')
          }
        },
      ]
    }

  ])


  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
