export const meta = () => {
  return [
    {title: 'Nosotros - Centro Deportivo Luz Mery Tristan'},
    {description: 'Conoce nuestra historia, misión y valores. Más que una instalación deportiva, somos una comunidad vibrante impulsada por la pasión y el rendimiento.'},
  ];
};

export default function Nosotros() {

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <div className="about-hero-title-section">
              <h1 className="about-hero-title">
                Where <span className="highlight-performance">performance</span><br />
                meets <span className="highlight-community">community.</span>
              </h1>
            </div>
            <div className="about-hero-description-section">
              <p className="about-hero-description">
                At Athletic, we're redefining training and movement. More than just a sports facility, we're a vibrant community driven by passion and performance.
              </p>
            </div>
          </div>
          <div className="about-hero-image">
            <img 
              src="/nosotros-main.png" 
              alt="Athletes training on track" 
              className="about-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="about-stats">
        <div className="about-stats-container">
          <div className="about-stats-content">
            <div className="about-stats-text">
              <p className="about-stats-subtitle">About us</p>
              <h2 className="about-stats-title">
                We are athletes dedicated <span className="highlight-text">to pushing limits</span> and <span className="highlight-text">breaking records</span>.
              </h2>
              <p className="about-stats-description">
                Whether you're a sprinter, a long-distance runner, a jumper, or an all-around athlete, Athletic is where passion meets performance.
              </p>
            </div>
            <div className="about-stats-grid">
              <div className="about-stat-item">
                <div className="about-stat-number">25+</div>
                <div className="about-stat-label">Certified Coaches & Trainers</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">15K+</div>
                <div className="about-stat-label">Members</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">200+</div>
                <div className="about-stat-label">Group Classes Monthly</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">10+</div>
                <div className="about-stat-label">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="about-community-values">
        <div className="about-community-values-container">
          <div className="about-community-values-content">
            <div className="about-community-values-text">
              <p className="about-community-values-subtitle">Our values</p>
              <h2 className="about-community-values-title">
                Our community is at the heart of everything we do.
              </h2>
              <p className="about-community-values-description">
                Whether you're a sprinter, a long-distance runner, a jumper, or an all-around athlete, Athletic is where passion meets performance.
              </p>
              <button className="about-community-values-btn">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-container">
          <div className="about-mission-content">
            <h2 className="about-mission-title">Nuestra Misión</h2>
            <p className="about-mission-text">
              Formar campeones dentro y fuera del tatami, promoviendo los valores fundamentales del Taekwondo: 
              cortesía, integridad, perseverancia, autocontrol y espíritu indomable. Creamos un ambiente donde 
              cada estudiante puede alcanzar su máximo potencial físico, mental y espiritual.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">
          <h2 className="about-values-title">Nuestros Valores</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon">🥋</div>
              <h3 className="about-value-title">Excelencia</h3>
              <p className="about-value-description">
                Buscamos la perfección en cada técnica y movimiento, desarrollando habilidades excepcionales.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">🤝</div>
              <h3 className="about-value-title">Comunidad</h3>
              <p className="about-value-description">
                Fomentamos un ambiente de apoyo mutuo donde todos crecemos juntos como familia.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">💪</div>
              <h3 className="about-value-title">Disciplina</h3>
              <p className="about-value-description">
                Cultivamos la autodisciplina y el autocontrol como pilares fundamentales del crecimiento.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">🏆</div>
              <h3 className="about-value-title">Logros</h3>
              <p className="about-value-description">
                Celebramos cada victoria, desde pequeños avances hasta grandes campeonatos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="about-history">
        <div className="about-history-container">
          <div className="about-history-content">
            <div className="about-history-text">
              <h2 className="about-history-title">Nuestra Historia</h2>
              <p className="about-history-description">
                Desde 1995, el Centro Deportivo Luz Mery Tristan ha sido un pilar en la formación de atletas 
                y en la promoción de los valores del deporte. Comenzamos con un pequeño grupo de estudiantes 
                apasionados y hemos crecido hasta convertirnos en una de las escuelas más respetadas de la región.
              </p>
              <div className="about-history-stats">
                <div className="about-stat">
                  <div className="about-stat-number">29</div>
                  <div className="about-stat-label">Años de experiencia</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number">500+</div>
                  <div className="about-stat-label">Estudiantes formados</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number">50+</div>
                  <div className="about-stat-label">Campeonatos ganados</div>
                </div>
              </div>
            </div>
            <div className="about-history-image">
              <img 
                src="https://luzmerytristan-photos.s3.us-east-1.amazonaws.com/img20250610_11210742.png" 
                alt="Historia del Centro Deportivo Luz Mery Tristan" 
                className="about-history-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 