import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-message">
      <h1>Page not found</h1>
      <Link className="button" to="/">
        Back home
      </Link>
    </section>
  )
}

export default NotFound
