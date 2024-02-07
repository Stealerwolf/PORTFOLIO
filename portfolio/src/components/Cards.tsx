import Assunto from "../Images/Assunto.png";

function Cards() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="card text-bg-dark mb-3  " style={{ maxWidth: "18rem" }}>
        <div className="card-body">
          <p className="card-text">
            <img src={Assunto} className="card-img-top" alt="profileMemoji" />
            <h1 className="about-me">about me</h1>
          </p>
        </div>
      </div>
      <div
        className="card text-bg-dark mb-3 card2-margin  "
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <p className="card-text-2">
            Hi, my name is Davi, i'm 20 years old and a "beautiful designs"
            enthusiast, my opinion is that a code is beautiful when it has style
            and simply works.
          </p>
        </div>
      </div>
      <div
        className="card text-bg-dark mb-3 card3-margin"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <p className="card-text-3">
            "Functionality and a stunning design go hand on hand"
            <br /> Davi M.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
