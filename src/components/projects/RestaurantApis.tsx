import "@/css/projectsCSS.css";
import Link from "next/link";

const RestaurantApis = () => {
  return (
    <div className="projects-container">
      <img
        src="/img/restaurant-apis.png"
        alt="restaurant-apis"
        className="img-responsive"
      />
      <div className="description-projects-container">
        <h3 className="title-projects">RestaurantApis</h3>
        <div className="technology-container">
          <span className="technology">Java</span>
          <span className="technology">Spring-Boot</span>
          <span className="technology">SostgreSQL</span>
        </div>
        <p className="description">
          Restaurant APIs es una API que desarrollé usando Spring Boot y
          PostgreSQL para crear un sistema de reservas de restaurantes.
          Implementé Spring Security con JWT para la autenticación mediante
          login y protegí las rutas con un sistema seguro y confiable. Además,
          estructuré el proyecto utilizando arquitectura de microservicios y una
          arquitectura de capas, lo que facilita la escalabilidad y el
          mantenimiento del sistema a largo plazo.
        </p>
        <Link
          href="https://restaurant-apis-owrr.onrender.com/api/v1/swagger-ui/index.html"
          target="_blank"
          className="button-projects"
        >
          Ver proyecto
        </Link>
      </div>
    </div>
  );
};

export default RestaurantApis;
