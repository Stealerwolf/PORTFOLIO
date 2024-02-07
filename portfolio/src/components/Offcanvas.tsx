import Assunto2 from "../Images/Assunto2.png";

function Offcanvas() {
  return (
    <div
      className="offcanvas offcanvas-start show"
      tabIndex={-1}
      id="offcanvas"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">
          <div>
            <img
              src={Assunto2}
              className="card-img-offcanvas"
              alt="profileMemoji"
            />
          </div>
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div></div>
        <div>
          <a
            href="https://github.com/Stealerwolf"
            className="btn btn-primary btn-github "
          >
            Github
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Stealerwolf"
            className="btn btn-primary btn-youtube"
          >
            Youtube
          </a>
        </div>
        <div>
          <a href="../Projects.tsx" className="btn btn-primary btn-projects ">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Offcanvas;
