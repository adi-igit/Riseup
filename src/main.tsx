import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Market from './pages/Market';
import WatchList from './pages/WatchList';
import Wallet from './pages/Wallet';
import Portfolio from './pages/Portfolio';
import History from './pages/History';
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/market',
    element: <Market />
  },
  {
    path: '/watchlist',
    element: <WatchList />
  },
  {
    path: '/wallet',
    element: <Wallet />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/history',
    element: <History />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
