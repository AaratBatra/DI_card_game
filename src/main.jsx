import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/Root.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Instructions from './routes/Instructions.jsx'
import Board from './routes/Board.jsx'
import Result from './routes/Result.jsx'
import About from './routes/About.jsx'
import './index.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
        errorElement: <ErrorPage />
      },
      {
        path: '/play',
        element: <Instructions />,
        errorElement: <ErrorPage />
      },
      {
        path: 'play/go',
        element: <Board />,
        errorElement: <ErrorPage />
      },
      {
        path: '/play/result',
        element: <Result />
      }, 
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes}></RouterProvider> 
)
