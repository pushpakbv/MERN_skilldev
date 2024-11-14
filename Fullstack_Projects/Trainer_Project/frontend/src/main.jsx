import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import HomePage from './components/HomePage.jsx'
import GetTrainer from './components/GetTrainer.jsx'
import AddTrainer from './components/AddTrainer.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <HomePage/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        loader: githubInfoLoader,
        path: 'github',
        element:<Github/>
      },
      {
        
        path: 'user/:id',
        element:<User/>
      },
      {
        path: 'trainers',
        element:<GetTrainer/>

      },
      {
        path: 'add-trainer',
        element:<AddTrainer/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
