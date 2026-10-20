import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="content">
      <h1>Page not found</h1>
      <p>
        <Link to="/" style={{ color: 'var(--foreground)' }}>Go back home</Link>
      </p>
    </section>
  )
}

export default NotFound
