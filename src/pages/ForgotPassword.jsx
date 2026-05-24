import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from '../context/useAuth.js'

function ForgotPassword() {
  const location = useLocation()
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState(location.state?.email || '')

  const handleSubmit = (event) => {
    event.preventDefault()
    resetPassword(email)
      .then(() => {
        toast.success('Reset email sent')
        window.location.href = 'https://mail.google.com/'
      })
      .catch(() => toast.error('Please enter a valid email'))
  }

  return (
    <section className="auth-page">
      <form className="form-panel auth-card" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <label>
          Email
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <button className="button" type="submit">
          Reset Password
        </button>
      </form>
    </section>
  )
}

export default ForgotPassword
