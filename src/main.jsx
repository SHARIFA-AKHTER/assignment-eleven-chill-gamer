import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import AddReview from './components/AddReview.jsx';
import MyReviews from './components/MyReviews.jsx';
import GameWatchlist from './components/GameWatchlist.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import UpdateReview from './components/UpdateReview.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import AllReviews from './components/AllReviews.jsx';
import NotFound from './components/NotFound.jsx';
import HighestRatedGames from './components/HighestRatedGames .jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader: () =>fetch('http://localhost:5000/reviews')
      },
      {
        path:"/add-review",
        element:<AddReview></AddReview>
      },
      {
        path:"/update-review/:id",
        element:<UpdateReview></UpdateReview>,
        loader: ({params}) =>fetch(`http://localhost:5000/reviews/${params.id}`),
        
      },
      {
        path:"/reviews",
        element:<AllReviews></AllReviews>
      },
      {
        path:"/my-reviews",
        element:<MyReviews></MyReviews>,
        loader: ()=>fetch('http://localhost:5000/users')
      },
      {
        path:"/watchlist",
        element:<GameWatchlist></GameWatchlist>
      },
      {
        path:"/highest-rated-games",
        element: <HighestRatedGames></HighestRatedGames>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path: "*",
        element:<NotFound></NotFound>
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
