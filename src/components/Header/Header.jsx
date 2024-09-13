import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "./Header.css";

function Header() {
  return (
    <nav className="navigation">
      <img src={logo} className="logo" alt="Logo Kasa" />
      <div className="navigationItems">
        <Link to="/">Accueil</Link>
        <Link to="/APropos">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
