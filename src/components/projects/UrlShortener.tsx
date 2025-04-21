import "@/css/projectsCSS.css";
import Link from "next/link";

const UrlShortener = () => {
  return (
    <div className="projects-container reverse-on-mobile">
      <div className="description-projects-container">
        <h3 className="title-projects">Url Shortener</h3>
        <div className="technology-container">
          <span className="technology">TypeScript</span>
          <span className="technology">Next.js</span>
          <span className="technology">Prisma ORM</span>
        </div>
        <p className="description">
          Es un acortador de enlaces creado con Next.js y TypeScript. Utiliza
          Prisma ORM para conectarse a una base de datos PostgreSQL. Permite
          generar URLs cortas de forma rápida y sencilla desde una interfaz
          minimalista.
        </p>
        <Link
          href="https://url-shortener-sepia-iota.vercel.app/"
          target="_blank"
          className="button-projects"
        >
          Ver proyecto
        </Link>
      </div>
      <img
        src="/img/url-shortener.png"
        alt="url-shortener"
        className="img-responsive"
      />
    </div>
  );
};

export default UrlShortener;
