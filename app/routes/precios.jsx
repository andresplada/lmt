export const meta = () => {
  return [
    { title: 'Precios - Centro Deportivo Luz Mery Tristan' },
    { description: 'Descubre nuestros planes y precios accesibles para todas las edades. Inversión en tu bienestar físico y mental.' },
  ];
};

export default function Precios() {
  const membershipPlans = [
    {
      id: 1,
      name: 'Plan Básico',
      price: '45.000',
      period: 'mes',
      description: 'Perfecto para comenzar tu camino en el Taekwondo',
      features: [
        '2 clases por semana',
        'Acceso a clases grupales',
        'Uniforme incluido',
        'Evaluación inicial gratuita',
        'Acceso a instalaciones'
      ],
      popular: false,
      color: 'basic'
    },
    {
      id: 2,
      name: 'Plan Estándar',
      price: '75.000',
      period: 'mes',
      description: 'La opción más popular para un entrenamiento completo',
      features: [
        '3 clases por semana',
        'Acceso a todas las clases grupales',
        'Uniforme y cinturón incluidos',
        'Clases de defensa personal',
        'Acceso a acondicionamiento físico',
        'Evaluaciones mensuales',
        'Descuento en eventos'
      ],
      popular: true,
      color: 'standard'
    },
    {
      id: 3,
      name: 'Plan Premium',
      price: '110.000',
      period: 'mes',
      description: 'Entrenamiento ilimitado para atletas dedicados',
      features: [
        'Clases ilimitadas',
        'Acceso a todas las modalidades',
        'Entrenamiento personalizado',
        'Preparación para competencias',
        'Uniforme completo incluido',
        'Evaluaciones semanales',
        'Eventos gratuitos',
        'Acceso prioritario a seminarios'
      ],
      popular: false,
      color: 'premium'
    }
  ];

  const additionalServices = [
    {
      name: 'Clases Particulares',
      price: '35.000',
      unit: 'por clase',
      description: 'Entrenamiento personalizado uno a uno con instructor certificado.'
    },
    {
      name: 'Clase de Prueba',
      price: 'Gratuita',
      unit: 'primera vez',
      description: 'Conoce nuestras instalaciones y metodología sin compromiso.'
    },
    {
      name: 'Examen de Grado',
      price: '25.000',
      unit: 'por examen',
      description: 'Evaluación oficial para ascenso de cinturón.'
    },
    {
      name: 'Seminarios Especializados',
      price: '20.000',
      unit: 'por seminario',
      description: 'Talleres especiales con maestros invitados y técnicas avanzadas.'
    }
  ];

  const familyPlans = [
    {
      members: '2 miembros',
      discount: '15%',
      description: 'Descuento para parejas o padre/madre e hijo'
    },
    {
      members: '3 miembros',
      discount: '20%',
      description: 'Ideal para familias pequeñas'
    },
    {
      members: '4+ miembros',
      discount: '25%',
      description: 'Máximo descuento para familias numerosas'
    }
  ];

  const ageGroups = [
    {
      group: 'Infantil (4-8 años)',
      price: '40.000',
      duration: '45 minutos por clase',
      focus: 'Desarrollo motor y valores básicos'
    },
    {
      group: 'Juvenil (9-15 años)',
      price: '50.000',
      duration: '60 minutos por clase',
      focus: 'Técnica, disciplina y competencia'
    },
    {
      group: 'Adultos (16+ años)',
      price: '60.000',
      duration: '75 minutos por clase',
      focus: 'Acondicionamiento y técnica avanzada'
    },
    {
      group: 'Tercera Edad (60+ años)',
      price: '35.000',
      duration: '45 minutos por clase',
      focus: 'Flexibilidad y bienestar general'
    }
  ];

  return (
    <div className="precios-page">
      {/* Hero Section */}
      <section className="precios-hero">
        <div className="precios-hero-content">
          <div className="precios-hero-text">
            <h1 className="about-hero-title">
              Invierte en tu <span className="highlight-performance">bienestar</span><br />
              y <span className="highlight-community">crecimiento.</span>
            </h1>
            <p className="precios-hero-description">
              Planes accesibles y flexibles para todas las edades y objetivos. Tu transformación comienza con una decisión inteligente.
            </p>
          </div>
          <div className="precios-hero-image">
            <img
              src="/hero-bg-1.png"
              alt="Planes de precios"
              className="precios-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="precios-plans">
        <div className="precios-plans-container">
          <div className="precios-section-header">
            <p className="precios-section-subtitle">Planes de membresía</p>
            <h2 className="precios-section-title">
              Elige el <span className="highlight-text">plan perfecto</span> para tu <span className="highlight-text">objetivo</span>.
            </h2>
          </div>

          <div className="membership-plans-grid">
            {membershipPlans.map((plan) => (
              <div key={plan.id} className={`membership-plan-card ${plan.color} ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="plan-popular-badge">
                    Más Popular
                  </div>
                )}
                
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price-amount">${plan.price}</span>
                    <span className="price-period">/{plan.period}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="plan-features">
                  <ul className="features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`plan-button ${plan.popular ? 'primary' : 'secondary'}`}>
                  Elegir Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Pricing */}
      <section className="precios-age-groups">
        <div className="precios-age-groups-container">
          <div className="precios-section-header">
            <p className="precios-section-subtitle">Precios por grupo de edad</p>
            <h2 className="precios-section-title">
              Tarifas <span className="highlight-text">especializadas</span> para cada <span className="highlight-text">etapa</span>.
            </h2>
          </div>

          <div className="age-groups-grid">
            {ageGroups.map((group, index) => (
              <div key={index} className="age-group-card">
                <div className="age-group-header">
                  <h3 className="age-group-name">{group.group}</h3>
                  <div className="age-group-price">${group.price}/mes</div>
                </div>
                <div className="age-group-details">
                  <div className="age-group-duration">
                    <strong>Duración:</strong> {group.duration}
                  </div>
                  <div className="age-group-focus">
                    <strong>Enfoque:</strong> {group.focus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="precios-additional">
        <div className="precios-additional-container">
          <div className="precios-section-header">
            <p className="precios-section-subtitle">Servicios adicionales</p>
            <h2 className="precios-section-title">
              Complementa tu <span className="highlight-text">entrenamiento</span> con servicios <span className="highlight-text">especializados</span>.
            </h2>
          </div>

          <div className="additional-services-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-service-card">
                <div className="service-header">
                  <h3 className="service-name">{service.name}</h3>
                  <div className="service-price">
                    {service.price} <span className="service-unit">{service.unit}</span>
                  </div>
                </div>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Plans */}
      <section className="precios-family">
        <div className="precios-family-container">
          <div className="precios-section-header">
            <p className="precios-section-subtitle">Descuentos familiares</p>
            <h2 className="precios-section-title">
              La <span className="highlight-text">familia</span> que entrena <span className="highlight-text">junta</span>, crece junta.
            </h2>
          </div>

          <div className="family-plans-grid">
            {familyPlans.map((family, index) => (
              <div key={index} className="family-plan-card">
                <div className="family-discount-badge">
                  {family.discount} OFF
                </div>
                <h3 className="family-members">{family.members}</h3>
                <p className="family-description">{family.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="precios-payment-info">
        <div className="precios-payment-container">
          <div className="payment-info-grid">
            <div className="payment-info-card">
              <div className="payment-info-icon">💳</div>
              <h3 className="payment-info-title">Formas de Pago</h3>
              <p className="payment-info-description">
                Efectivo, transferencia bancaria, tarjetas de crédito y débito. Pagos mensuales o trimestrales.
              </p>
            </div>
            
            <div className="payment-info-card">
              <div className="payment-info-icon">📅</div>
              <h3 className="payment-info-title">Sin Matrícula</h3>
              <p className="payment-info-description">
                No cobramos matrícula ni costos de inscripción. Solo pagas tu mensualidad.
              </p>
            </div>
            
            <div className="payment-info-card">
              <div className="payment-info-icon">🔄</div>
              <h3 className="payment-info-title">Flexibilidad</h3>
              <p className="payment-info-description">
                Puedes cambiar de plan o pausar tu membresía cuando lo necesites.
              </p>
            </div>
            
            <div className="payment-info-card">
              <div className="payment-info-icon">🎁</div>
              <h3 className="payment-info-title">Promociones</h3>
              <p className="payment-info-description">
                Descuentos especiales para estudiantes, adultos mayores y pagos anuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="precios-cta">
        <div className="precios-cta-container">
          <div className="precios-cta-content">
            <h2 className="precios-cta-title">¿Listo para comenzar tu transformación?</h2>
            <p className="precios-cta-description">
              Agenda tu clase de prueba gratuita y descubre por qué somos la mejor opción para tu crecimiento personal.
            </p>
            <div className="precios-cta-buttons">
              <button className="precios-cta-button primary">
                Clase de Prueba Gratuita
              </button>
              <button className="precios-cta-button secondary">
                Contactar Asesor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 