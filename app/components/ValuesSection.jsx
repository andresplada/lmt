/**
 * ValuesSection component showcasing sports center information
 * @param {{
 *   overline?: string;
 *   title?: string;
 *   description?: string;
 *   imageUrl?: string;
 *   imageAlt?: string;
 * }}
 */
export function ValuesSection({
  overline = "Nuestro centro deportivo",
  title = "Un espacio completo para tu bienestar y desarrollo físico",
  description = "En nuestro centro deportivo ofrecemos una amplia variedad de actividades físicas y deportivas para toda la familia. Contamos con instalaciones modernas, instructores calificados y programas diseñados para adaptarse a todos los niveles de condición física.",
  imageUrl = "/nosotros-main.png",
  imageAlt = "Centro deportivo con instalaciones modernas"
}) {
  return (
    <section className="values-section">
      <div className="values-container">
        <div className="values-content">
          <div className="values-text">
            <p className="values-overline">{overline}</p>
            <h2 className="values-title">{title}</h2>
            <p className="values-description">{description}</p>
          </div>
          <div className="values-image">
            <img 
              src={imageUrl} 
              alt={imageAlt}
              className="values-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 