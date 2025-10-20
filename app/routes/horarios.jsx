export const meta = () => {
  return [
    { title: 'Horarios - Centro Deportivo Luz Mery Tristan' },
    { description: 'Consulta nuestros horarios de clases para todas las edades y niveles. Encuentra el horario perfecto que se adapte a tu rutina.' },
  ];
};

export default function Horarios() {
  const scheduleData = {
    'Lunes': [
      { time: '06:00 - 07:00', class: 'Taekwondo Adultos', level: 'Todos los niveles', instructor: 'Maestro Carlos López' },
      { time: '16:00 - 17:00', class: 'Taekwondo Infantil', level: '4-8 años', instructor: 'Instructora Ana García' },
      { time: '17:00 - 18:00', class: 'Taekwondo Juvenil', level: '9-15 años', instructor: 'Instructor Miguel Torres' },
      { time: '18:00 - 19:00', class: 'Taekwondo Adultos', level: 'Principiantes', instructor: 'Maestro Carlos López' },
      { time: '19:00 - 20:00', class: 'Taekwondo Avanzado', level: 'Cinturón Negro', instructor: 'Gran Maestro Kim' }
    ],
    'Martes': [
      { time: '06:00 - 07:00', class: 'Acondicionamiento Físico', level: 'Todos los niveles', instructor: 'Entrenador José Ruiz' },
      { time: '16:00 - 17:00', class: 'Taekwondo Infantil', level: '4-8 años', instructor: 'Instructora Ana García' },
      { time: '17:00 - 18:00', class: 'Taekwondo Juvenil', level: '9-15 años', instructor: 'Instructor Miguel Torres' },
      { time: '18:00 - 19:00', class: 'Defensa Personal', level: 'Adultos', instructor: 'Maestro Carlos López' },
      { time: '19:00 - 20:00', class: 'Sparring Avanzado', level: 'Competidores', instructor: 'Gran Maestro Kim' }
    ],
    'Miércoles': [
      { time: '06:00 - 07:00', class: 'Taekwondo Adultos', level: 'Todos los niveles', instructor: 'Maestro Carlos López' },
      { time: '16:00 - 17:00', class: 'Taekwondo Infantil', level: '4-8 años', instructor: 'Instructora Ana García' },
      { time: '17:00 - 18:00', class: 'Taekwondo Juvenil', level: '9-15 años', instructor: 'Instructor Miguel Torres' },
      { time: '18:00 - 19:00', class: 'Taekwondo Adultos', level: 'Intermedio', instructor: 'Maestro Carlos López' },
      { time: '19:00 - 20:00', class: 'Poomsae Especializado', level: 'Todos los niveles', instructor: 'Gran Maestro Kim' }
    ],
    'Jueves': [
      { time: '06:00 - 07:00', class: 'Acondicionamiento Físico', level: 'Todos los niveles', instructor: 'Entrenador José Ruiz' },
      { time: '16:00 - 17:00', class: 'Taekwondo Infantil', level: '4-8 años', instructor: 'Instructora Ana García' },
      { time: '17:00 - 18:00', class: 'Taekwondo Juvenil', level: '9-15 años', instructor: 'Instructor Miguel Torres' },
      { time: '18:00 - 19:00', class: 'Defensa Personal', level: 'Adultos', instructor: 'Maestro Carlos López' },
      { time: '19:00 - 20:00', class: 'Preparación Competencias', level: 'Competidores', instructor: 'Gran Maestro Kim' }
    ],
    'Viernes': [
      { time: '06:00 - 07:00', class: 'Taekwondo Adultos', level: 'Todos los niveles', instructor: 'Maestro Carlos López' },
      { time: '16:00 - 17:00', class: 'Taekwondo Infantil', level: '4-8 años', instructor: 'Instructora Ana García' },
      { time: '17:00 - 18:00', class: 'Taekwondo Juvenil', level: '9-15 años', instructor: 'Instructor Miguel Torres' },
      { time: '18:00 - 19:00', class: 'Taekwondo Adultos', level: 'Avanzado', instructor: 'Maestro Carlos López' },
      { time: '19:00 - 20:00', class: 'Clase Libre', level: 'Todos los niveles', instructor: 'Rotativo' }
    ],
    'Sábado': [
      { time: '08:00 - 09:00', class: 'Taekwondo Familiar', level: 'Padres e hijos', instructor: 'Instructora Ana García' },
      { time: '09:00 - 10:00', class: 'Taekwondo Infantil', level: '4-8 años', instructor: 'Instructor Miguel Torres' },
      { time: '10:00 - 11:00', class: 'Taekwondo Juvenil', level: '9-15 años', instructor: 'Maestro Carlos López' },
      { time: '11:00 - 12:00', class: 'Entrenamiento Competitivo', level: 'Competidores', instructor: 'Gran Maestro Kim' }
    ]
  };

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const classTypes = [
    {
      name: 'Taekwondo Infantil',
      description: 'Clases especialmente diseñadas para niños de 4 a 8 años, enfocadas en desarrollo motor y valores.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Taekwondo Juvenil',
      description: 'Para adolescentes de 9 a 15 años, combinando técnica, disciplina y acondicionamiento físico.',
      color: 'bg-green-100 text-green-800'
    },
    {
      name: 'Taekwondo Adultos',
      description: 'Clases para adultos de todos los niveles, desde principiantes hasta avanzados.',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      name: 'Defensa Personal',
      description: 'Técnicas prácticas de autodefensa aplicadas a situaciones reales.',
      color: 'bg-red-100 text-red-800'
    },
    {
      name: 'Acondicionamiento Físico',
      description: 'Entrenamiento físico específico para mejorar fuerza, flexibilidad y resistencia.',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      name: 'Preparación Competencias',
      description: 'Entrenamiento especializado para atletas que compiten a nivel regional y nacional.',
      color: 'bg-yellow-100 text-yellow-800'
    }
  ];

  return (
    <div className="horarios-page">
      {/* Hero Section */}
      <section className="horarios-hero">
        <div className="horarios-hero-content">
          <div className="horarios-hero-text">
            <h1 className="about-hero-title">
              Encuentra tu <span className="highlight-performance">momento</span><br />
              perfecto para <span className="highlight-community">entrenar.</span>
            </h1>
            <p className="horarios-hero-description">
              Ofrecemos horarios flexibles para todas las edades y niveles. Tu camino en el Taekwondo comienza cuando tú decidas.
            </p>
          </div>
          <div className="horarios-hero-image">
            <img
              src="/hero-bg-1.png"
              alt="Horarios de entrenamiento"
              className="horarios-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="horarios-types">
        <div className="horarios-types-container">
          <div className="horarios-section-header">
            <p className="horarios-section-subtitle">Nuestras clases</p>
            <h2 className="horarios-section-title">
              Diferentes <span className="highlight-text">modalidades</span> para cada <span className="highlight-text">objetivo</span>.
            </h2>
          </div>

          <div className="class-types-grid">
            {classTypes.map((classType, index) => (
              <div key={index} className="class-type-card">
                <div className={`class-type-badge ${classType.color}`}>
                  {classType.name}
                </div>
                <p className="class-type-description">{classType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="horarios-schedule">
        <div className="horarios-schedule-container">
          <div className="horarios-section-header">
            <p className="horarios-section-subtitle">Horarios semanales</p>
            <h2 className="horarios-section-title">
              Planifica tu <span className="highlight-text">semana</span> de <span className="highlight-text">entrenamiento</span>.
            </h2>
          </div>

          <div className="schedule-grid">
            {days.map((day) => (
              <div key={day} className="schedule-day-card">
                <div className="schedule-day-header">
                  <h3 className="schedule-day-title">{day}</h3>
                  <div className="schedule-day-count">
                    {scheduleData[day]?.length || 0} clases
                  </div>
                </div>
                
                <div className="schedule-day-classes">
                  {scheduleData[day] ? (
                    scheduleData[day].map((classItem, index) => (
                      <div key={index} className="schedule-class-item">
                        <div className="schedule-class-time">
                          {classItem.time}
                        </div>
                        <div className="schedule-class-details">
                          <div className="schedule-class-name">{classItem.class}</div>
                          <div className="schedule-class-level">{classItem.level}</div>
                          <div className="schedule-class-instructor">{classItem.instructor}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="schedule-no-classes">
                      <p>Día de descanso</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="horarios-info">
        <div className="horarios-info-container">
          <div className="horarios-info-grid">
            <div className="horarios-info-card">
              <div className="horarios-info-icon">⏰</div>
              <h3 className="horarios-info-title">Horarios Flexibles</h3>
              <p className="horarios-info-description">
                Contamos con horarios matutinos y vespertinos para adaptarnos a tu rutina diaria.
              </p>
            </div>
            
            <div className="horarios-info-card">
              <div className="horarios-info-icon">👥</div>
              <h3 className="horarios-info-title">Clases Grupales</h3>
              <p className="horarios-info-description">
                Máximo 15 estudiantes por clase para garantizar atención personalizada.
              </p>
            </div>
            
            <div className="horarios-info-card">
              <div className="horarios-info-icon">🎯</div>
              <h3 className="horarios-info-title">Niveles Específicos</h3>
              <p className="horarios-info-description">
                Clases organizadas por edad y nivel de experiencia para un aprendizaje óptimo.
              </p>
            </div>
            
            <div className="horarios-info-card">
              <div className="horarios-info-icon">📅</div>
              <h3 className="horarios-info-title">Clases de Recuperación</h3>
              <p className="horarios-info-description">
                Si faltas a una clase, puedes recuperarla en otro horario durante la misma semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="horarios-cta">
        <div className="horarios-cta-container">
          <div className="horarios-cta-content">
            <h2 className="horarios-cta-title">¿Listo para comenzar?</h2>
            <p className="horarios-cta-description">
              Reserva tu clase de prueba gratuita y descubre el horario que mejor se adapte a ti.
            </p>
            <div className="horarios-cta-buttons">
              <button className="horarios-cta-button primary">
                Clase de Prueba Gratuita
              </button>
              <button className="horarios-cta-button secondary">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 