import "../Home.css";

function Features() {
  return (
    <div className="kpd-banner">
      <div className="container">
        <div className="kpd-banner-desc">
          <h1 className="features-ul">Features</h1>
          {/* <div className="feature">
            <i className="fas fa-balance-scale featureIcon"></i>
            <h3>FAIR AND RUG-PROOF LAUNCHPAD</h3>
            <p className="bchpad-talks">
              Get early-access to presales for high quality projects without the need for large sums
              of capital.
            </p>
          </div> */}

          <div className="feature">
            <i className="fas fa-lock featureIcon"></i>
            <h3>LOCKED LIQUIDITY</h3>
            <p className="bchpad-talks">
            <span className="bchpadspan">BCHPad</span> will require project owners to lock a large share of
              their team tokens on a locker platform. This is done to protect
              investors from getting dumped or being rug-pulled.
            </p>
          </div>

          <div className="feature">
            <i className="fas fa-dice-d20 featureIcon"></i>
            <h3>FULLY DECENTRALIZED</h3>
            <p className="bchpad-talks">
              All the auction processes are done transparently on the blockchain
              through the Dapp, without interacting with anyone.
            </p>
          </div>

          <div className="feature">
            <i className="fas fa-shield-alt featureIcon"></i>
            <h3>FREE AUDIT BY A 3RD-PARTY (COMING SOON)</h3>
            <p className="bchpad-talks">
              Sales that intend to raise funds via our launchpad will have an
              audit by a 3rd-Party before listing.
            </p>
          </div>

          <div className="feature">
            <i className="fas fa-users featureIcon"></i>
            <h3>COMMUNITY REWARDS</h3>
            <p className="bchpad-talks">
              Any project wanting to do a presale on <span className="bchpadspan">BCHPad</span> will be required to make an 
              allocation for BPAD token holders which will be distributed as airdrops to
              holders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
