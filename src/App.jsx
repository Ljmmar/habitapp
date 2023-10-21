import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/layouts/Home'  
import Contact from './components/layouts/Contact'
import Projects from './components/layouts/Projects'
import Onsale from './components/layouts/Onsale'
import Primera from './components/cards/Primera'
import Admin from './components/layouts/Admin'

let router= createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/contact',
    element: <Contact/>
  },
  {
    path:'/projects',
    element: <Projects/>
  },
  {
    path:'/onsale',
    element: <Onsale/>
  },  
  {
    path:'/primera',
    element: <Primera/>
  },  
  {
    path:'/admin',
    element: <Admin/>
  },
])

function App() {
  return (
    <>
 <RouterProvider router={router}/>
    </>
  )
}

export default App
