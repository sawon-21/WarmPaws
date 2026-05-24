import { Link, NavLink, useNavigate } from 'react-router-dom'
import { LogOut, Menu, PawPrint, X } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/useAuth.js'

function Navbar() {
  const { user, logoutUser } = useAuth()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('Logged out')
        navigate('/')
      })
      .catch(() => toast.error('Could not log out'))
  }

  const links = (
    <>
      <NavLink to="/" onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <a href="/#services" onClick={() => setOpen(false)}>
        Services
      </a>
      <NavLink to="/profile" onClick={() => setOpen(false)}>
        My Profile
      </NavLink>
    </>
  )

  return (
    <header className="navbar">
      <Link to="/" className="brand" aria-label="WarmPaws home">
        <PawPrint size={26} />
        <span>WarmPaws</span>
      </Link>

      <nav className="desktop-nav">{links}</nav>

      <div className="nav-actions">
        {user ? (
          <>
            <img
              className="avatar"
              src={user.photoURL || 'https://i.postimg.cc/vTXKBX0s/pet-avatar.png'}
              alt={user.displayName || 'User'}
              title={user.displayName || user.email}
            />
            <button className="icon-button" type="button" onClick={handleLogout} aria-label="Logout">
              <LogOut size={18} />
            </button>
          </>
        ) : (
          <div className="auth-links">
            <Link to="/login">Login</Link>
            <Link className="button small" to="/register">
              Register
            </Link>
          </div>
        )}
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && <nav className="mobile-nav">{links}</nav>}
    </header>
  )
}

export default Navbar
