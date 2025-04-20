import Link from "next/link";
import "@/css/NavBarCSS.css";

const NavBar = () => {
  return (
    <nav className="nav-scroll">
      <div className="nav-container">
        <div className="link-container">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="#skills" className="link">
            Skills
          </Link>
          <Link href="#proyectos" className="link">
            Proyectos
          </Link>
          <Link href="#sobre-mi" className="link">
            About me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
