import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/layouts/Home'
import Contact from './components/layouts/Contact'
import Projects from './components/layouts/Projects'
import Onsale from './components/layouts/Onsale'
import Admin from './components/layouts/Admin'
import Create from './components/layouts/Create'
import List from './components/layouts/List'
import Login from './components/layouts/Login'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/onsale',
    element: <Onsale />
  },

  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/list',
    element: <List />
  },
  {
    path: '/login',
    element: <Login/>
  },

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
