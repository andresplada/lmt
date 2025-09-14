import {Link} from 'react-router';

/**
 * Hero component for the landing page
 * @param {{
 *   title?: string;
 *   subtitle?: string;
 *   ctaText?: string;
 *   ctaLink?: string;
 *   backgroundImage?: string;
 * }}
 */
export function Hero({
  title = "Uniendo la familia a través del deporte",
  subtitle = "Discover amazing products and exceptional quality",
  ctaText = "Shop Now",
  ctaLink = "/collections/all",
  backgroundImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
}) {
  return (
    <section className="hero">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title" style={{
          marginBottom: '-20px',
          fontWeight: '300',
          fontSize: '4.5rem',
        }}>Uniendo la familia</h1>
        <h2 className="hero-title"
          style={{
            fontSize: '4.5rem',
          }}
        >a través del deporte</h2>
        <p className="hero-subtitle">{subtitle}</p>
        <Link to={ctaLink} className="hero-cta">
          {ctaText}
        </Link>
      </div>
      
      {/* Hero Cards at bottom center */}
      <div className="hero-cards">
        <div className="hero-card">
          <div className="hero-card-icon">🏃‍♀️</div>
          <h3 className="hero-card-title">Fitness</h3>
          <p className="hero-card-description">Premium fitness equipment for the whole family</p>
        </div>
        <div className="hero-card">
          <div className="hero-card-icon">⚽</div>
          <h3 className="hero-card-title">Sports</h3>
          <p className="hero-card-description">Quality sports gear for every activity</p>
        </div>
        <div className="hero-card">
          <div className="hero-card-icon">🏆</div>
          <h3 className="hero-card-title">Champions</h3>
          <p className="hero-card-description">Gear that helps you achieve your goals</p>
        </div>
      </div>
    </section>
  );
} 