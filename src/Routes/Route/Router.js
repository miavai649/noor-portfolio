import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Details from '../../Pages/Details/Details'
import Home from '../../Pages/Home/Home/Home'
import BlogDetails from '../../Pages/BlogDetails/BlogDetails'
import AdminDashboard from '../../layout/AdminDashboard'
import Skills from '../../Pages/Dashboard/Skills/Skills'
import Experience from '../../Pages/Dashboard/Experience/Experience'
import Projects from '../../Pages/Dashboard/Projects/Projects'
import Blogs from '../../Pages/Dashboard/Blogs/Blogs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/details/:id',
        element: <Details />
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: <Projects />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'experience',
        element: <Experience />
      },
      {
        path: 'blogs',
        element: <Blogs />
      }
    ]
  }
])
