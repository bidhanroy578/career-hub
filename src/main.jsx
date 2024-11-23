import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import JobDetail from './components/featuredJob/JobDetail';
import Home from './root/Home';
import AppliedJobs from './components/applied-jobs/AppliedJobs';
import Error from './root/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path:'/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: ( ) => fetch('/public/jobs.json')
      },
      {
        path: '/job/:id' ,
        element: <JobDetail /> ,
        loader: ( ) => fetch('/public/jobs.json')
      },
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
