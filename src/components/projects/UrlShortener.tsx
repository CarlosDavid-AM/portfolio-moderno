import "@/css/projectsCSS.css";

const UrlShortener = () => {
  return (
    <div className="projects-container reverse-on-mobile">
      <div className="description-projects-container">
        <h3 className="title-projects">Titulo prollecto</h3>
        <div className="technology-container">
          <span className="technology">TypeScript</span>
          <span className="technology">Next.js</span>
          <span className="technology">Prisma ORM</span>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sunt amet in veniam. Laborum possimus accusamus numquam, tenetur
          deleniti amet dignissimos sed ullam, consequatur ipsum doloribus
          architecto corrupti libero a.
        </p>
        <button className="button-projects">Ver proyecto</button>
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
