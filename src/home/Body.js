import dagdusethganapthi from "./../img/dagdusethganapthi.jpg";
import tajmahal from "./../img/tajmahal.jpg";
import gatewayofindia from "./../img/gatewayofindia.jpg";
import kishtwarnationalpark from "./../img/kishtwarnationalpark.jpg";
import rameshwaram from "./../img/rameshwaram.jpg";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const HomeBody = () => {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1>Welcome to Travelogue</h1>
          <h2>
            We are here to plan your tour and help to collect your moment...
          </h2>
          <Link
            to="dashboard"
            className="btn-get-started scrollto"
            data-bs-toggle="modal"
            data-bs-target="#signin"
          >
            Let's Travel
          </Link>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="section-title">
              <span>Places</span>
              <h2>Places</h2>
              <p>Some places to visit...</p>
            </div>
            <div className="row">
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <img
                      src={dagdusethganapthi}
                      className="d-block"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Shreemant Dagduseth Ganapati</h5>
                      <p>Pune, Maharashtra</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={tajmahal} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Taj Mahal</h5>
                      <p>Agra, Uttar Pradesh</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={gatewayofindia} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Gate Way of India</h5>
                      <p>Mumbai, Maharashtra</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img
                      src={kishtwarnationalpark}
                      className="d-block"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Kishtwar National Park</h5>
                      <p>Kistawar, Jammu and Kashmir</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={rameshwaram} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Rameshwaram</h5>
                      <p>Rameshwaram, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <span>Features</span>
              <h2>Features</h2>
              <p>Here some features of Travelogue</p>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-person-plus"></i>
                  </div>
                  <h4>
                    <a href="">Add friends</a>
                  </h4>
                  <p>
                    Organizer need to create tour diary and add people. All the
                    added people will have access for adding here. User can set
                    timeline and tell others what to do.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-images"></i>
                  </div>
                  <h4>
                    <a href="">Keep track of moment and expenditure</a>
                  </h4>
                  <p>
                    This is main part of our website. Here added user can create
                    breakpoints and can add images/videos or can share
                    descriptive info. Anyone in group add their expenses here
                    with description about it.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-flag"></i>
                  </div>
                  <h4>
                    <a href="">Flag visited Spots</a>
                  </h4>
                  <p>
                    The globe map will be updated by marking with flag. This map
                    will be different for everyone depending upon which tour he
                    has done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <h3>Pack your bags...</h3>
              <p>
                {" "}
                Grab all neccessary things and connect with all your friends to
                plan and rock it 🤘
              </p>
              <a className="cta-btn" href="#">
                Go to top
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End Cta Section --> */}

        {/* signup module imorting */}
        <Signup />

        {/* <!-- sign in --> */}
        <div
          className="modal fade"
          id="signin"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <form action="#">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Sign In
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong> Wrong </strong> email or password!
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      required
                      id="signinemail"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <br />
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      required
                      id="signinpassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="signinbtn"
                    className="btn btn-primary"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      {/* <!-- End #main --> */}
    </>
  );
};

export default HomeBody;
