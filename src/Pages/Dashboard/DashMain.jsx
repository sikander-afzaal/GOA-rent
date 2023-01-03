import "./styles/DashMain.css";
import NftBoxDash from "../../Components/NftBoxDash/NftBoxDash";
import Button from "../../Components/Button/Button";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashMain = () => {
  return (
    <div className="container dash-main-wrapp">
      <div className="blur-circ1"></div>
      <div className="blur-circ2"></div>
      <img src="/roadmap-break.png" alt="" />
      <div className="nft-row-dash">
        <NftBoxDash
          count
          name="Thor"
          img="/dashboard/thor.png"
          desc="The great & powerful all-father and king of Asgard."
          price="$120"
        />
        <NftBoxDash
          count
          name="Freya"
          img="/dashboard/freya.png"
          desc="Queen of the valkyries and goddess of love and war, Freya"
          price="$120"
        />
        <NftBoxDash
          count
          name="heimdall"
          img="/dashboard/heim.png"
          desc="The great & powerful all-father and king of Asgard."
          price="$120"
        />
        <NftBoxDash
          count
          name="odin"
          img="/dashboard/odin.png"
          desc="The great & powerful all-father and king of Asgard."
          price="$120"
        />
      </div>
    </div>
  );
};

export default DashMain;
