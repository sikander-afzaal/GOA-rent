import "./styles/DashboardHero.css";

const DashboardHero = () => {
  return (
    <div className="container dash-hero">
      <div className="dash-hero-div">
        <div className="dash-filters">
          <a href="https://mint.godsofasgardp2e.com/" target={"blank"}>
            Mint
          </a>
          <button>Rent</button>
          <button>Sacrifice</button>
          <button>Summon</button>
        </div>
        <div className="dash-stats">
          <div className="dash-col">
            <h3 className="trajan">Rewards</h3>
            <p className="trajan">0</p>
          </div>
          <div className="dash-col">
            <h3 className="trajan">Owner</h3>
            <p className="trajan">GOA</p>
          </div>
          <div className="dash-col">
            <h3 className="trajan">USER NAME</h3>
            <p className="trajan">GOA PLAYER</p>
          </div>
          <div className="dash-col">
            <h3 className="trajan">GUILD</h3>
            <p className="trajan">GOA GUILD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
