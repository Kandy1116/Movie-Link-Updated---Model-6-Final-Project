import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
        Unlimited movies,<br />TV shows, and more.
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', color: '#cbd5e1' }}>
        Discover your next favorite story. Search through millions of titles and get instant details.
      </p>
      <Link to="/search">
        <button style={{
          padding: '1rem 3rem',
          fontSize: '1.25rem',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '600',
          transition: 'all 0.3s ease'
        }}>
          Start Searching
        </button>
      </Link>
    </div>
  );
}

export default Home;