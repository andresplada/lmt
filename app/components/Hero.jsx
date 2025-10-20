import { Link } from 'react-router';

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
  subtitle = "Donde cada miembro de la familia encuentra su pasión deportiva y juntos creamos recuerdos inolvidables",
  ctaText = "Nuestros servicios",
  ctaLink = "/collections/all",
  backgroundImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
}) {
  const scrollToActivities = () => {
    const element = document.getElementById('nuestras-actividades');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
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
        }}>Uniendo la familia</h1>
        <span className="hero-title"
        >a través del deporte</span>
        <p className="hero-subtitle">{subtitle}</p>
        <button onClick={scrollToActivities} className="hero-cta" style={{ border: 'none', cursor: 'pointer' }}>
          {ctaText}
        </button>
      </div>

      {/* Hero Cards at bottom center */}
      <div className="hero-cards">
        <div className="hero-card" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          background: '#152a30',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // alignItems: 'left',
            height: '100%',
            padding: '10px 0',
          }}>
            <h2 className="hero-card-description" style={{
              flex: '1',
              margin: 0,
              fontSize: '1.2rem',
              fontWeight: '500',
              letterSpacing: '-0.1px',
              color: 'white',
            }}>
              Tascas del Terror
              <p className="hero-card-description" style={{
                fontSize: '0.8rem',
                fontWeight: '300',
                letterSpacing: '-0.1px',
                color: 'white',
                marginTop: '0.4rem',
                paddingRight: '1rem',
                paddingLeft: '0.1rem',
              }}>
                El evento mas terrorífico del año. Vivelo en familia
              </p>
            </h2>
            <a href="https://tascas.luzmerytristan.com" className="hero-card-button" style={{
              backgroundColor: 'white',
              color: '#152a30',
              padding: '0.5rem 0.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              marginTop: '1rem',
              width: '85%',
              letterSpacing: '-0.2px',
              textAlign: 'center',
              display: 'block',
            }}>
              Compra boletas
            </a>
          </div>
          <img
            src="/tascas-1.png"
            alt="LMT Logo"
            style={{
              height: '90%',
              width: '40%',
              objectFit: 'cover',
              marginLeft: 'auto',
              // objectPosition: '0%',
            }}
          />
        </div>

        <div className="hero-card" style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
          <p className="hero-card-text" style={{
            fontSize: '1.1rem',
            fontWeight: '400',
            letterSpacing: '-0.4px',
          }}>Mucho mas que un gimnasio:
            <span style={{
              fontWeight: '600',
            }}> La mayor variedad de clases grupales de la ciudad</span>
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <Link to="/horarios" className="hero-card-button" style={{
              fontSize: '0.9rem',
              fontWeight: '400',
              marginLeft: 'auto',
              alignSelf: 'flex-end',
            }}>
              Ver clases
            </Link>
          </div>
        </div>


        <div className="hero-card" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          paddingBottom: '2rem',
        }}>
          <p className="hero-card-description" style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            letterSpacing: '0.4px',
            margin: 0,
            color: 'white',
          }}>La familia que entrena junta, crece junta.
            <span style={{
              fontWeight: '500',
              color: 'white',
              letterSpacing: '0.2px',
              fontStyle: 'italic',
              fontSize: '1.6rem',
            }}> Ahorra con toda la familia</span>
          </p>
        </div>


        {/* <div className="hero-card" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          background: '#152a30',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',

        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            // alignItems: 'left',
            height: '100%',
            padding: '10px 0',
          }}>
            <h2 className="hero-card-description" style={{
              flex: '1',
              margin: 0,
              fontSize: '1.2rem',
              fontWeight: '500',
              letterSpacing: '-0.1px',
              color: 'white',
            }}>
              Nuestra historia y amor por el deporte nos une
            </h2>

            <Link to="/nosotros" className="hero-card-button" style={{
              backgroundColor: 'white',
              color: '#152a30',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              marginTop: '1rem',
              width: '80%',
              letterSpacing: '-0.2px',
            }}>
              Ver más
            </Link>
          </div>
          <img
            src="/lmt-1.png"
            alt="LMT Logo"
            style={{
              height: '90%',
              width: '40%',
              objectFit: 'cover',
              marginLeft: 'auto',
              objectPosition: '50%',
            }}
          />
        </div> */}


      </div>
    </section>
  );
} 