import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'

import AuthLayout from './layouts/AuthLayout'
import SignInPage from './layouts/SignInPage'
import SignUpPage from './layouts/SignUpPage'

import DashLayout from './layouts/DashLayout'
import DashboardPage from './pages/dashboard/DashboardPage'
import ReportsPage from './pages/dashboard/ReportsPage'
import UsersPage from './pages/dashboard/UsersPage'

function ProtectedRoute({ children }) {
 
 const token =
  localStorage.getItem('token')

if (!token)
  {
    return <Navigate to="/auth/signin" replace />
  }

  return children
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/signin" replace />,
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },

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

  {
    path: '*',
    element: <NotFoundPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App