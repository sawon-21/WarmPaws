import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../context/useAuth.js'

function Register() {
  const { createUser, googleLogin, updateUserProfile } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', photo: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const validatePassword = () => {
    if (form.password.length < 6) return 'Password must be at least 6 characters'
    if (!/[A-Z]/.test(form.password)) return 'Password needs one uppercase letter'
    if (!/[a-z]/.test(form.password)) return 'Password needs one lowercase letter'
    return ''
  }

  const handleRegister = (event) => {
    event.preventDefault()
    const error = validatePassword()
    if (error) {
      toast.error(error)
      return
    }

    createUser(form.email, form.password)
      .then(() => updateUserProfile({ displayName: form.name, photoURL: form.photo }))
      .then(() => {
        toast.success('Account created')
        navigate('/')
      })
      .catch(() => toast.error('Registration failed'))
  }

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success('Logged in with Google')
        navigate('/')
      })
      .catch(() => toast.error('Google login failed'))
  }

  return (
    <section className="auth-page">
      <form className="form-panel auth-card" onSubmit={handleRegister}>
        <h1>Signup</h1>
        <label>
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Photo URL
          <input type="url" name="photo" value={form.photo} onChange={handleChange} required />
        </label>
        <label>
          Password
          <span className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>
        <button className="button" type="submit">
          Register
        </button>
        <button className="button light" type="button" onClick={handleGoogle}>
          Continue with Google
        </button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  )
}

export default Register
