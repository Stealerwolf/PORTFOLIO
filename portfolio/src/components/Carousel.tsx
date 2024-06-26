function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100 center-block" width={800} height={400} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#555" dy=".3em">
              First slide
            </text>
          </svg>
        </div>
        <div className="carousel-item active">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width={800} height={400} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#666" />
            <text x="50%" y="50%" fill="#444" dy=".3em">
              Second slide
            </text>
          </svg>
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width={800} height={400} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#555" />
            <text x="50%" y="50%" fill="#333" dy=".3em">
              Third slide
            </text>
          </svg>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
