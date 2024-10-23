import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Contact from '../../Pages/Contact/Contact'
import Details from '../../Pages/Details/Details'
import Home from '../../Pages/Home/Home/Home'
import BlogDetails from '../../Pages/BlogDetails/BlogDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails />
      }
    ]
  }
])
