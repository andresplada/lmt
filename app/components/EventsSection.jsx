/**
 * EventsSection component showcasing upcoming events
 * @param {{
 *   overline?: string;
 *   title?: string;
 *   description?: string;
 *   buttonText?: string;
 *   buttonHref?: string;
 *   backgroundImage?: string;
 *   eventImage?: string;
 * }}
 */
export function EventsSection({
  overline = "Eventos Especiales",
  title = "Tascas del Terror",
  description = "El evento más terrorífico del año. Una experiencia única que combina misterio, aventura y diversión para toda la familia.",
  buttonText = "Compra boletas",
  buttonHref = "/eventos",
  backgroundImage = "/hero-bg-1.png",
  eventImage = "/tascas-1.png"
}) {
  return (
    <section className="events-section">
      <div className="events-container">
        {/* Event Card */}
        <div className="tascas-event-card">
          <div className="event-card-image">
            <img src={eventImage} alt="Tascas del Terror" />
            <div className="event-card-overlay">
              <div className="event-badge">Evento Especial</div>
            </div>
          </div>
          
          <div className="event-card-content">
            <div className="event-meta">
              <span className="event-date">31 Octubre 2024</span>
              <span className="event-location">LMT Sports Center</span>
            </div>
            
            <h2 className="event-title">{title}</h2>
            <p className="event-description">{description}</p>
            
            <div className="event-features">
              <div className="feature-item">
                <span className="feature-icon">👻</span>
                <span className="feature-text">Actividades Terroríficas</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👨‍👩‍👧‍👦</span>
                <span className="feature-text">Para Toda la Familia</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎭</span>
                <span className="feature-text">Disfraces y Disfraces</span>
              </div>
            </div>
            
            <div className="event-details">
              <div className="detail-item">
                <strong>Horario:</strong> 6:00 PM - 10:00 PM
              </div>
              <div className="detail-item">
                <strong>Incluye:</strong> Juegos, premios y más sorpresas
              </div>
              <div className="detail-item">
                <strong>Precio:</strong> $25,000 por persona
              </div>
            </div>
            
            <div className="event-actions">
              <a href={buttonHref} className="event-button primary">
                {buttonText}
              </a>
              <a href="https://api.whatsapp.com/send?phone=573155502034&text=%F0%9F%91%8B%20Hola%20quisiera%20mas%20información%20sobre%20Tascas%20del%20Terror" className="event-button secondary">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 