import "./NftBoxDash.css";

const NftBoxDash = ({ img, name, desc, price, count }) => {
  return (
    <div className="dash-nft-card">
      {count && <p className="count trajan">73</p>}
      <div className="img-wrap-card">
        <img src={img} alt="" />
      </div>
      <h4 className="trajan">{name}</h4>
      <p>{desc}</p>
      <div className="card-row">
        <p className="trajan">
          <img src="/dashboard/asg.png" /> 4.0
        </p>
        <h6 className="trajan">{price}</h6>
      </div>
      <button>Buy Now</button>
    </div>
  );
};

export default NftBoxDash;
