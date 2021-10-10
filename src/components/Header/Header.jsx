import { useState, useRef } from "react";
import Logo from "../../styles/images/logo-white.png";
import Tokenomics from "../../styles/images/tokenomics.png";
import Roadmap from "../../styles/images/roadmap.png";
import $ from "jquery";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const navMenu = useRef(undefined);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
    $(".kpd-main-menu .nav-menu").slideToggle();
  };
  return (
    <header className="kpd-header">
      <div className="container">
        <div className="kpd-header-inner">
          <div className="kpd-logo">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <nav className="kpd-main-menu">
            <button
              className={`mobile-menu-icon ${menuOpened ? "open" : ""}`}
              aria-label="Main Menu Icon"
              onClick={toggleMenu}
            >
              <span />
              <span />
              <span />
            </button>
            <ul className="nav-menu" ref={navMenu}>
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="https://app.mistswap.fi">
                  Buy
                </a>
              </li>
              <li>
                <a href="https://forms.gle/818xYUehVxoexo1D7">
                  Apply IDO
                </a>
              </li>
              <li>
                <a href={Tokenomics}>
                  Tokenomics
                </a>
              </li>
              <li>
                <a href={Roadmap}>
                  RoadMap
                </a>
              </li>
              <li>
                <a href="https://app.bchpad.cash/">BCHPad</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
