import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "./components/Home"
import About from './components/About'
import Contact from './components/Contact'
import Notfound from './components/Notfound'
import Navbar from './components/Navbar'
const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<div>
        <Navbar />
        <Home />
      </div>
    },{
      path:'/about',
      element:<div>
        <Navbar />
        <About />
      </div>
    },
    {
      path:'/contact',
      element:<div>
        <Navbar />
        <Contact />
      </div>
    },
    {
      path:'*',
      element:<Notfound />
    }
  ])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App