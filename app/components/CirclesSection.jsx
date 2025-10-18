/**
 * CirclesSection component for showcasing activities in circular format
 * @param {{
 *   title?: string;
 *   description?: string;
 *   circles?: Array<{
 *     text: string;
 *     image?: string;
 *   }>;
 * }}
 */
export function CirclesSection({
  title = "Nuestras Actividades",
  description = "Descubre las diferentes disciplinas deportivas que ofrecemos para todas las edades y niveles de experiencia.",
  circles = [
    { text: "Patinaje", image: "patinaje.jpg" },
    { text: "Natación", image: "natacion.jpg" },
    { text: "Padel", image: "padel.png" },
    { text: "Gimnasio", image: "gym.png" },
    { text: "Danza", image: "danza.jpg" },
    { text: "Karate", image: "karate.jpg" }
  ]
}) {
  // Map of text to images for specific sports that have images in Features component
  const getImageForSport = (text) => {
    const imageMap = {
      "Patinaje": "patinaje.jpg",
      "Natación": "natacion.jpg", 
      "Gimnasia": "gym.png",
      "Padel": "padel.jpg",
      "Danza": "danza.jpg",
      "Karate": "karate.jpg"
    };
    return imageMap[text];
  };

  return (
    <section id="nuestras-actividades" className="circles-section">
      <div className="circles-container">
        <h2 className="circles-title">{title}</h2>
        <p className="circles-description">{description}</p>
        <div className="circles-grid">
          {circles.map((circle, index) => {
            const imageUrl = circle.image || getImageForSport(circle.text);
            const backgroundStyle = imageUrl ? {
              backgroundImage: `url(/${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            } : {};

            return (
              <div 
                key={index} 
                className="circle-item"
                style={backgroundStyle}
              >
                <span className="circle-text">{circle.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 