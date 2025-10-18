export const meta = () => {
  return [
    { title: 'Servicios - Liga Metropolitana de Taekwondo' },
    { description: 'Descubre nuestros entrenamientos especializados. Ofrecemos más que clases: creamos caminos para ayudarte a moverte mejor y sentirte más fuerte.' },
  ];
};

export default function Servicios() {
  const services = [
    {
      id: 1,
      title: 'Patinaje',
      image: '/hero-bg-small.png',
      category: 'deportes'
    },
    {
      id: 2,
      title: 'Natación',
      image: '/hero-bg-1.png',
      category: 'acuaticos'
    },
    {
      id: 3,
      title: 'Gimnasio',
      image: '/hero-bg-small.png',
      category: 'fitness'
    },
    {
      id: 4,
      title: 'Karate',
      image: '/hero-bg-1.png',
      category: 'artes-marciales'
    },
    {
      id: 5,
      title: 'Danza',
      image: '/hero-bg-small.png',
      category: 'arte'
    },
    {
      id: 6,
      title: 'Padel',
      image: '/hero-bg-1.png',
      category: 'deportes'
    },
    {
      id: 7,
      title: 'Muai Tai',
      image: '/hero-bg-small.png',
      category: 'artes-marciales'
    },
    {
      id: 8,
      title: 'Pilates',
      image: '/hero-bg-1.png',
      category: 'fitness'
    }
  ];

  return (
    <div className="servicios-page">
      {/* Hero Section */}
      <section className="servicios-hero">
        <div className="servicios-hero-content">
          <div className="servicios-hero-text">
            <h1 className="about-hero-title">
              Where <span className="highlight-performance">performance</span><br />
              meets <span className="highlight-community">community.</span>
            </h1>
            <p className="servicios-hero-description">
              We offer more than just classes — we create pathways to help you move better, and feel stronger.
            </p>
          </div>
          <div className="servicios-hero-image">
            <img
              src="/hero-bg-1.png"
              alt="Athletes training on track"
              className="servicios-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="servicios-classes">
        <div className="servicios-classes-container">
          <div className="servicios-classes-header">
            <p className="servicios-classes-subtitle">Our classes</p>
            <h2 className="servicios-classes-title">
              Where athletes <span className="highlight-text">push their limits</span> and train with <span className="highlight-text">purpose</span>.
            </h2>
          </div>

          <div className="servicios-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <button className="service-card-expand">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 