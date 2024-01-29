import Assunto from "../Images/Assunto.png";

function Cards() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="card text-bg-dark mb-3  " style={{ maxWidth: "18rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card text-bg-dark mb-3  " style={{ maxWidth: "18rem" }}>
        <img src={Assunto} className="card-img-top" alt="yeah" />
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card text-bg-dark mb-3 " style={{ maxWidth: "18rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
