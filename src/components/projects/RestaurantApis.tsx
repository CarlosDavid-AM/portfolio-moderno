import "@/css/projectsCSS.css";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sunt amet in veniam. Laborum possimus accusamus numquam, tenetur
          deleniti amet dignissimos sed ullam, consequatur ipsum doloribus
          architecto corrupti libero a.
        </p>
        <button className="button-projects">Ver proyecto</button>
      </div>
    </div>
  );
};

export default RestaurantApis;
