import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../context/useAuth.js'

function Login() {
  const { loginUser, googleLogin } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault()
    loginUser(email, password)
      .then(() => {
        toast.success('Welcome back')
        navigate(from, { replace: true })
      })
      .catch(() => toast.error('Email or password did not match'))
  }

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success('Logged in with Google')
        navigate(from, { replace: true })
      })
      .catch(() => toast.error('Google login failed'))
  }

  return (
    <section className="auth-page">
      <form className="form-panel auth-card" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>
          Email
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Password
          <span className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>
        <Link className="plain-link" to="/forgot-password" state={{ email }}>
          Forget Password
        </Link>
        <button className="button" type="submit">
          Login
        </button>
        <button className="button light" type="button" onClick={handleGoogle}>
          Continue with Google
        </button>
        <p>
          New here? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </section>
  )
}

export default Login
