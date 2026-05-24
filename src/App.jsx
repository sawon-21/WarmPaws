import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainLayout from './components/MainLayout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Register from './pages/Register.jsx'
import ServiceDetails from './pages/ServiceDetails.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/services/:serviceId"
            element={
              <ProtectedRoute>
                <ServiceDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </>
  )
}

export default App
