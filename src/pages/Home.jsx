import { Link } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CalendarDays, Star, ThermometerSun } from 'lucide-react'
import services from '../data/services.json'

const slides = [
  {
    title: 'Warm winter care for the pets who wait by the door',
    text: 'Find grooming, clothing, vet support and simple home comfort services before the cold bites.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Soft coats, safe paws and easier cold mornings',
    text: 'Book small seasonal services that keep walks comfortable and homes a little kinder.',
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'A calmer winter plan for dogs, cats and senior pets',
    text: 'Browse local help from grooming teams, walkers and vets who know cold weather care.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1400&q=80',
  },
]

const tips = [
  'Dry paws after every walk so salt and dampness do not sit between the toes.',
  'Keep outdoor time shorter for young, senior or thin-coated pets.',
  'Place bedding away from direct drafts but close enough for family company.',
]

const vets = [
  {
    name: 'Dr. Mahi Rahman',
    role: 'Small animal vet',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Nabila Karim',
    role: 'Cat care specialist',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Arif Hasan',
    role: 'Senior pet advisor',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
  },
]

function Home() {
  return (
    <>
      <section className="hero-slider">
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} loop>
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="hero-copy" data-aos="fade-up">
                  <span>Winter pet care</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                  <a className="button" href="#services">
                    Explore services
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <span>Popular services</span>
          <h2>Winter care that fits real pet routines</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.serviceId} data-aos="fade-up">
              <img src={service.image} alt={service.serviceName} />
              <div>
                <p className="category">{service.category}</p>
                <h3>{service.serviceName}</h3>
                <div className="card-meta">
                  <span>
                    <Star size={16} fill="currentColor" /> {service.rating}
                  </span>
                  <span>${service.price}</span>
                </div>
                <Link className="button ghost" to={`/services/${service.serviceId}`}>
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div data-aos="fade-right">
          <span className="section-kicker">Quick tips</span>
          <h2>Winter care tips for pets</h2>
          <div className="tip-list">
            {tips.map((tip) => (
              <p key={tip}>
                <ThermometerSun size={18} /> {tip}
              </p>
            ))}
          </div>
        </div>
        <div className="schedule-box" data-aos="fade-left">
          <CalendarDays size={34} />
          <h3>Book before the cold week starts</h3>
          <p>Most services are short appointments, so weekend slots go first during winter.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>Expert support</span>
          <h2>Meet our winter care vets</h2>
        </div>
        <div className="expert-grid">
          {vets.map((vet) => (
            <article className="expert-card" key={vet.name} data-aos="zoom-in">
              <img src={vet.image} alt={vet.name} />
              <h3>{vet.name}</h3>
              <p>{vet.role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
