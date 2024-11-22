import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import JobDetail from './components/featuredJob/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: '/job/:id' ,
        element: <JobDetail /> ,
        loader: ( ) => fetch('/public/jobs.json')
      }
    ]
  },
  {
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
