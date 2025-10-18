/**
 * Features component for showcasing key features
 * @param {{
 *   title?: string;
 *   features?: Array<{
 *     img: string;
 *     title: string;
 *     description?: string;
 *     ageCategories?: Array<string>;
 *   }>;
 * }}
 */
export function Features({
  title = "Redefinimos lo que significa el deporte en familia. Unete a la familia Luz Mery Tristán",
  features = [
    {
      img: "patinaje.jpg",
      title: "Patinaje recreativo y profesional",
      description: "Entrenamiento especializado en patinaje de velocidad con técnicas profesionales",
      ageCategories: ["Niños", "Adultos", "Adultos mayores"]
    },
    {
      img: "natacion.jpg",
      title: "Natación personalizada",
      description: "Clases de natación adaptadas a todos los niveles y edades",
      ageCategories: ["Niños", "Adultos", "Adultos mayores"]
    },
    {
      img: "gym.png",
      title: "Gimnasio funcional y moderno",
      description: "Equipamiento de última generación para tu entrenamiento completo",
      ageCategories: ["Adultos", "Adultos mayores"]
    }
  ]
}) {
  return (
    <section id="features-section" className="features-section">
      <div className="features-header">
        <p className="features-subtitle">
          Que hacemos?
        </p>
        <h2 className="features-title" style={{
          fontSize: '3.5rem',
          fontWeight: '400',
          lineHeight: '1.2',
          marginBottom: '4rem',
          textAlign: 'left',
        }}>
          Redefinimos lo que significa el deporte en familia.
          <span style={{
            fontSize: '3.5rem',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '2rem',
          }}> Explora nuestras actividades
          </span>
        </h2>
      </div>
      <div className="features-cards">
        {features.map((feature, index) => (
          <>
            <div key={index} className="features-card" style={{ backgroundImage: `url(/${feature.img})` }}>
              <div className="features-card-overlay"></div>
              <div className="features-card-content">
                <div className="features-card-top">
                  {/* <h3 className="features-card-title">{feature.title}</h3> */}
                </div>
                <div className="features-card-bottom">
                  <div className="features-age-pills">
                    {feature.ageCategories && feature.ageCategories.map((category, idx) => (
                      <span key={idx} className="age-pill">{category}</span>
                    ))}
                  </div>
                  <div className="features-arrow-circle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
} 