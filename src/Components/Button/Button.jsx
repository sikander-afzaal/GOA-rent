import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = ({ link, url, cta, text, width, height }) => {
  const navigate = useNavigate();

  return cta ? (
    !url ? (
      <button
        onClick={() => {
          if (link) {
            navigate(link);
          }
        }}
        target="blank"
        style={{ width: width, height: height }}
        className="cta-btn"
      >
        <div>{text}</div>
      </button>
    ) : (
      <a
        href={url}
        target="blank"
        style={{ width: width, height: height }}
        className="cta-btn"
      >
        <div>{text}</div>
      </a>
    )
  ) : !url ? (
    <button
      onClick={(e) => {
        if (link) {
          navigate(link);
        }
      }}
      target="blank"
      style={{ width: width, height: height }}
      className="transparent"
    >
      {text}
    </button>
  ) : (
    <a
      href={url}
      target="blank"
      style={{ width: width, height: height }}
      className="transparent"
    >
      {text}
    </a>
  );
};

export default Button;
