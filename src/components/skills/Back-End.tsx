import Java from "../svg/svgBack-End/Java";
import PostgreSQL from "../svg/svgBack-End/PostgreSQL";
import Prisma from "../svg/svgBack-End/Prisma";
import Spring from "../svg/svgBack-End/Spring";
import Nextjs from "../svg/svgBack-End/Next";
import Nodejs from "../svg/svgBack-End/Node";

const BackEnd = () => {
  return (
    <div className="skills-container">
      <h3 className="title-skills">Back-End</h3>
      <div className="fila-skills">
        <Java className="skill" />
        <Spring className="skill" />
        <PostgreSQL className="skill" />
        <Prisma className="skill" />
      </div>
      <div className="fila-skills">
        <Nodejs className="skill" />
        <Nextjs className="skill" />
      </div>
    </div>
  );
};

export default BackEnd;
