import './App.css'
import 'animate.css';
import Main from './Layout/Main'
import Home from './Component/Home/Home'
import Registration from './Component/Registration/Registration'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Product from './Component/Product/Product'
import Login from './Component/Login/Login'
import About from './Component/About/About'
import Dashboard from './Component/Dashboard/Dashboard';
import WomenProduct from './Component/WomenProduct/WomenProduct';
import Male from './Component/WomenProduct/Male';

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
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>,
        },
        {
          path: '/registration',
          element: <Registration></Registration>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/women',
          element: <WomenProduct />,
        },
        {
          path: '/male',
          element: <Male />,
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
