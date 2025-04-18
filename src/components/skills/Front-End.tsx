import { CSS } from "../svg/svgFront-End/CSS";
import { HTML5 } from "../svg/svgFront-End/HTML5";
import { JavaScript } from "../svg/svgFront-End/JavaScript";
import { React } from "../svg/svgFront-End/React";
import TailwindCSS from "../svg/svgFront-End/TailwindCSS";
import { TypeScript } from "../svg/svgFront-End/TypeScript";

const FrontEnd = () => {
  return (
    <div className="skills-container">
      <h3 className="title-skills">Front-End</h3>
      <div className="fila-skills">
        <HTML5 className="skill" />
        <CSS className="skill" />
        <JavaScript className="skill" />
        <TypeScript className="skill" />
      </div>
      <div className="fila-skills">
        <React className="skill" />
        <TailwindCSS className="skill" />
      </div>
    </div>
  );
};

export default FrontEnd;
