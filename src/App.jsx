// src/App.jsx

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom'

/* WEBSITE */
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'

/* AUTH */
import AuthLayout from './layouts/AuthLayout'
import SignInPage from './layouts/SignInPage'
import SignUpPage from './layouts/SignUpPage'

/* DASHBOARD */
import DashLayout from './layouts/DashLayout'
import DashboardPage from './pages/dashboard/DashboardPage'
import ReportsPage from './pages/dashboard/ReportsPage'
import UsersPage from './pages/dashboard/UsersPage'

/* SIMPLE PROTECTION */
function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem('loggedIn')

  if (loggedIn !== 'true') {
    return <Navigate to="/auth/signin" replace />
  }

  return children
}

const router = createBrowserRouter([
  /* DEFAULT */
  {
    path: '/',
    element: <Navigate to="/auth/signin" replace />,
  },

  /* AUTH */
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },

  /* ORIGINAL WEBSITE / LANDING PAGE */
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'articles', element: <ArticleListPage /> },
      { path: 'articles/:name', element: <ArticlePage /> },
    ],
  },

  /* HYBRID DASHBOARD */
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'users', element: <UsersPage /> },
    ],
  },

  /* 404 */
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App