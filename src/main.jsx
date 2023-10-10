import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {loader as postsDataLoader} from './components/BlogList';
import BlogDetail, {loader as blogDetailLoader} from './components/BlogDetail';
import Header from './components/Header';
import App from './App';
import About from './components/About';
import Home from './pages/Home';



const router = createBrowserRouter(
  [

    {
      path:'/',
      element: <App />,
      children:[
        {
          index:true,
          element:<Home />,
          loader: postsDataLoader

        },
        {
          path: '/detay/:id',
          element: <BlogDetail />,
          loader: blogDetailLoader
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    },
   
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/> 
  </>
)
