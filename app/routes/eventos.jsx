export const meta = () => {
  return [
    { title: 'Eventos - Centro Deportivo Luz Mery Tristan' },
    { description: 'Descubre nuestros próximos eventos, competencias y actividades especiales. Únete a nuestra comunidad de atletas y vive la emoción del Taekwondo.' },
  ];
};

export default function Eventos() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Campeonato Regional de Taekwondo',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'Centro Deportivo Principal',
      category: 'Competencia',
      description: 'Competencia regional abierta para todas las categorías y edades. Inscripciones abiertas hasta el 10 de marzo.',
      image: '/hero-bg-small.png',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Seminario de Técnicas Avanzadas',
      date: '2024-03-22',
      time: '02:00 PM',
      location: 'Dojo Principal',
      category: 'Seminario',
      description: 'Seminario especializado en técnicas avanzadas de patadas y defensa personal, dirigido por maestros internacionales.',
      image: '/hero-bg-1.png',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Examen de Cinturones',
      date: '2024-04-05',
      time: '10:00 AM',
      location: 'Dojo Principal',
      category: 'Examen',
      description: 'Evaluación trimestral para ascenso de grado. Requisitos y preparación disponibles en recepción.',
      image: '/hero-bg-small.png',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Festival de Artes Marciales',
      date: '2024-04-12',
      time: '11:00 AM',
      location: 'Plaza Central',
      category: 'Festival',
      description: 'Evento comunitario con demostraciones, talleres familiares y actividades para todas las edades.',
      image: '/hero-bg-1.png',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Torneo Interno de Primavera',
      date: '2024-04-20',
      time: '08:00 AM',
      location: 'Centro Deportivo Principal',
      category: 'Torneo',
      description: 'Competencia interna entre estudiantes de la escuela. Categorías por edad y nivel de experiencia.',
      image: '/hero-bg-small.png',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Clase Magistral: Defensa Personal',
      date: '2024-04-27',
      time: '07:00 PM',
      location: 'Dojo Principal',
      category: 'Clase Especial',
      description: 'Clase especial enfocada en técnicas de defensa personal aplicadas a situaciones cotidianas.',
      image: '/hero-bg-1.png',
      status: 'upcoming'
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Campeonato Nacional 2024',
      date: '2024-02-18',
      time: '09:00 AM',
      location: 'Coliseo Nacional',
      category: 'Competencia',
      description: 'Participación exitosa en el campeonato nacional con 8 medallas obtenidas por nuestros atletas.',
      image: '/hero-bg-small.png',
      status: 'past',
      results: '8 medallas obtenidas'
    },
    {
      id: 8,
      title: 'Seminario de Arbitraje',
      date: '2024-02-10',
      time: '02:00 PM',
      location: 'Aula de Conferencias',
      category: 'Seminario',
      description: 'Capacitación en reglas y técnicas de arbitraje para instructores y estudiantes avanzados.',
      image: '/hero-bg-1.png',
      status: 'past',
      results: '15 participantes certificados'
    }
  ];

  return (
    <div className="eventos-page">
      {/* Hero Section */}
      <section className="eventos-hero">
        <div className="eventos-hero-content">
          <div className="eventos-hero-text">
            <h1 className="about-hero-title">
              Vive la <span className="highlight-performance">emoción</span><br />
              del <span className="highlight-community">Taekwondo.</span>
            </h1>
            <p className="eventos-hero-description">
              Únete a nuestros eventos, competencias y actividades especiales. Cada evento es una oportunidad de crecimiento y comunidad.
            </p>
          </div>
          <div className="eventos-hero-image">
            <img
              src="/hero-bg-1.png"
              alt="Evento de Taekwondo"
              className="eventos-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="eventos-upcoming">
        <div className="eventos-upcoming-container">
          <div className="eventos-section-header">
            <p className="eventos-section-subtitle">Próximos eventos</p>
            <h2 className="eventos-section-title">
              Donde los <span className="highlight-text">atletas se encuentran</span> y las <span className="highlight-text">historias se escriben</span>.
            </h2>
          </div>

          <div className="eventos-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="evento-card">
                <div className="evento-card-image">
                  <img src={event.image} alt={event.title} />
                  <div className="evento-card-overlay"></div>
                  <div className="evento-card-category">{event.category}</div>
                </div>
                <div className="evento-card-content">
                  <div className="evento-card-date">
                    <div className="evento-date">
                      {new Date(event.date).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </div>
                    <div className="evento-time">{event.time}</div>
                  </div>
                  <h3 className="evento-card-title">{event.title}</h3>
                  <div className="evento-card-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {event.location}
                  </div>
                  <p className="evento-card-description">{event.description}</p>
                  <button className="evento-card-button">
                    Más información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="eventos-past">
        <div className="eventos-past-container">
          <div className="eventos-section-header">
            <p className="eventos-section-subtitle">Eventos pasados</p>
            <h2 className="eventos-section-title">
              Nuestros <span className="highlight-text">logros recientes</span> y <span className="highlight-text">momentos memorables</span>.
            </h2>
          </div>

          <div className="eventos-past-grid">
            {pastEvents.map((event) => (
              <div key={event.id} className="evento-past-card">
                <div className="evento-past-image">
                  <img src={event.image} alt={event.title} />
                  <div className="evento-past-overlay"></div>
                </div>
                <div className="evento-past-content">
                  <div className="evento-past-header">
                    <div className="evento-past-category">{event.category}</div>
                    <div className="evento-past-date">
                      {new Date(event.date).toLocaleDateString('es-ES', { 
                        day: 'numeric', 
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <h3 className="evento-past-title">{event.title}</h3>
                  <p className="evento-past-description">{event.description}</p>
                  {event.results && (
                    <div className="evento-past-results">
                      <strong>Resultado: </strong>{event.results}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="eventos-cta">
        <div className="eventos-cta-container">
          <div className="eventos-cta-content">
            <h2 className="eventos-cta-title">¿Quieres participar en nuestros eventos?</h2>
            <p className="eventos-cta-description">
              Únete a nuestra comunidad y sé parte de la experiencia. Contáctanos para más información sobre inscripciones y requisitos.
            </p>
            <button className="eventos-cta-button">
              Contactar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 