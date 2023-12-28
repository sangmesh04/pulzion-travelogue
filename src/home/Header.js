import { Link } from "react-router-dom";

const HomeHeader = () => {
  const MobileToggle = () => {
    var mobileTogggle = document.getElementById("mobileTogl");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-mobile");
    mobileTogggle.classList.toggle("bi-list");
    mobileTogggle.classList.toggle("bi-x");
  };

  const regsiterLogin = () => {
    var regsiterLogin1 = document.getElementById("regsiterLogin");
    regsiterLogin1.style.display = "block";
  };
  const HideNavbar = () => {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      var mobileTogggle = document.getElementById("mobileTogl");
      mobileTogggle.classList.toggle("bi-list");
      mobileTogggle.classList.toggle("bi-x");
    }
  };

  return (
    <>
      {/* //   <!-- ======= Header ======= --> */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="dashboard">
              Trave<span id="logospan">log</span>ue
            </Link>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#hero"
                  onClick={HideNavbar}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#about"
                  onClick={HideNavbar}
                >
                  Places
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  href="#services"
                  onClick={HideNavbar}
                >
                  Features
                </a>
              </li>
              {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li> */}
              {/* <li><a className="nav-link scrollto" href="#team" onClick={HideNavbar}>Team</a></li> */}
              <li className="dropdown">
                <a href="#" onClick={regsiterLogin}>
                  <span>Travel</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul id="regsiterLogin">
                  <li>
                    <a
                      href="#"
                      onClick={HideNavbar}
                      data-bs-toggle="modal"
                      data-bs-target="#signup"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={HideNavbar}
                      data-bs-toggle="modal"
                      data-bs-target="#signin"
                    >
                      Sign In
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="#footer"
                >
                  Contact
                </a>
              </li>
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              id="mobileTogl"
              onClick={MobileToggle}
            ></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};

export default HomeHeader;
