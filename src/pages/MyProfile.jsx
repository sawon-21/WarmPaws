import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/useAuth.js'

function MyProfile() {
  const { user, updateUserProfile } = useAuth()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    name: user?.displayName || '',
    photo: user?.photoURL || '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    updateUserProfile({ displayName: form.name, photoURL: form.photo })
      .then(() => {
        toast.success('Profile updated')
        setEditing(false)
      })
      .catch(() => toast.error('Profile update failed'))
  }

  return (
    <section className="section profile-page">
      <div className="profile-card">
        <img src={user?.photoURL || 'https://i.postimg.cc/vTXKBX0s/pet-avatar.png'} alt={user?.displayName || 'User'} />
        <h1>{user?.displayName || 'Pet Owner'}</h1>
        <p>{user?.email}</p>
        <button className="button" type="button" onClick={() => setEditing(!editing)}>
          Update Profile
        </button>
      </div>

      {editing && (
        <form className="form-panel profile-form" onSubmit={handleSubmit}>
          <h2>Edit profile</h2>
          <label>
            Name
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              required
            />
          </label>
          <label>
            Image
            <input
              type="url"
              value={form.photo}
              onChange={(event) => setForm({ ...form, photo: event.target.value })}
              required
            />
          </label>
          <button className="button" type="submit">
            Save Changes
          </button>
        </form>
      )}
    </section>
  )
}

export default MyProfile
