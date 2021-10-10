import LogoWhite from "../../styles/images/logo-white.png";

function Footer() {
  return (
    <footer className="kpd-footer">
      <div className="container">
        <div className="kpd-footer-inner">
          <div className="kpd-footer-logo">
            <img src={LogoWhite} alt="Logo" />
          </div>

          <p>
            Copyright © <a href="/" className="bchpadspan">BCHPAD</a>. All Rights Reserved
          </p>

          <ul className="kpd-footer-social">
            <li>
              <a href="https://t.me/bchpad">
                <i className="fas fa-paper-plane" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bchpad">
                <i className="fab fa-twitter" />
              </a>
            </li>
            {/* <li>
              <a href="https://medium.com/">
                <i className="fab fa-medium-m" />
              </a>
            </li> */}
          </ul>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
