import { useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Mail, Star, Users } from 'lucide-react'
import services from '../data/services.json'
import { useAuth } from '../context/useAuth.js'

function ServiceDetails() {
  const { serviceId } = useParams()
  const { user } = useAuth()
  const service = services.find((item) => String(item.serviceId) === serviceId)
  const [form, setForm] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
  })

  if (!service) {
    return <div className="page-message">Service not found.</div>
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    toast.success('Service booked successfully')
    setForm({ name: '', email: '' })
  }

  return (
    <section className="section details-page">
      <div className="details-image">
        <img src={service.image} alt={service.serviceName} />
      </div>
      <div className="details-content">
        <p className="category">{service.category}</p>
        <h1>{service.serviceName}</h1>
        <p>{service.description}</p>
        <div className="details-list">
          <span>
            <Star size={17} fill="currentColor" /> Rating: {service.rating}
          </span>
          <span>Price: ${service.price}</span>
          <span>
            <Users size={17} /> Slots available: {service.slotsAvailable}
          </span>
          <span>Provider: {service.providerName}</span>
          <span>
            <Mail size={17} /> {service.providerEmail}
          </span>
        </div>
        <form className="form-panel" onSubmit={handleSubmit}>
          <h2>Book Service</h2>
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
            Email
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              required
            />
          </label>
          <button className="button" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </section>
  )
}

export default ServiceDetails
