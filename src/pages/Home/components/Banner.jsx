function Banner() {
  return (
    <div className="kpd-banner">
      <div className="container">
        <div className="kpd-banner-desc">
          <h1>
            {/* <span className="highlight"> xxxx </span> */}
            <span className="bchpadspan">BCHPAD</span> is a decentralized launchpad coming on Smart BitcoinCash.
          </h1>
          <p className="bchpad-talks">
          <span className="bchpadspan">BCHPad</span> is a decentralized IDO platform protocol built on Smart BitcoinCash,
            giving projects the possibility to raise capital and kickstart their project in a
            permissionless and decentralized manner.
          </p> <br />

          <h3 className="whybchpad">
            Why <span className="bchpadspan">BCHPad</span>?
          </h3> <br />
          <p className="bchpad-talks">
            As we all know that currently in the DeFi space, there are 
            lot of rugs that happens day in and out and scams in which project owners take-off
            with raised funds and most investors are victims of this.
            Our service <span className="bchpadspan">BCHPad</span> aim to build a platform with a goal of solving these problems
            in this space that ensures the safety of all investors funds.
          </p>

          <a href="https://github.com/sVNT-Token/bchpad-landing/blob/main/src/styles/litepaper.pdf" target="_blank" className="kpd-cta-desc btn btn-global">
            LitePaper
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
