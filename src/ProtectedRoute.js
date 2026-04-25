import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../auth'

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/auth/signin" replace />
}

export default ProtectedRoute