import { Link } from "react-router-dom";

function HereButton() {
  return (
    <div>
      <Link to="/Projects" className="btn btn-primary BlackPageText HereButton">
        HERE
      </Link>
    </div>
  );
}

export default HereButton;
