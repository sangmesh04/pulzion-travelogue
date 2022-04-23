import dagdusethganapthi from './img/dagdusethganapthi.jpg'
import tajmahal from './img/tajmahal.jpg'
import gatewayofindia from './img/gatewayofindia.jpg'
import kishtwarnationalpark from './img/kishtwarnationalpark.jpg'
import rameshwaram from './img/rameshwaram.jpg'

import { Link } from 'react-router-dom';

const Home = () => {

    const MobileToggle = () => {
        var mobileTogggle = document.getElementById("mobileTogl");
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle('navbar-mobile');
        mobileTogggle.classList.toggle('bi-list');
        mobileTogggle.classList.toggle('bi-x');
  }

  const regsiterLogin = () => {
      var regsiterLogin1 = document.getElementById("regsiterLogin");
        regsiterLogin1.style.display = "block";
  }
  const HideNavbar = () =>{
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile')
      var mobileTogggle = document.getElementById("mobileTogl");
      mobileTogggle.classList.toggle('bi-list')
      mobileTogggle.classList.toggle('bi-x')
    }
  }
    return ( 
        <div className="home">
{/* //   <!-- ======= Header ======= --> */}
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><Link to="dashboard">Trave<span id="logospan">log</span>ue</Link></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto" href="#hero" onClick={HideNavbar}>Home</a></li>
          <li><a className="nav-link scrollto" href="#about" onClick={HideNavbar}>Places</a></li>
          <li><a className="nav-link scrollto" href="#services" onClick={HideNavbar}>Features</a></li>
          {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li> */}
          {/* <li><a className="nav-link scrollto" href="#team" onClick={HideNavbar}>Team</a></li> */}
          <li className="dropdown"><a href="#" onClick={regsiterLogin}><span>Travel</span> <i className="bi bi-chevron-down"></i></a>
            <ul id='regsiterLogin'>
              <li><a href="#" onClick={HideNavbar} data-bs-toggle="modal" data-bs-target="#signup">Sign Up</a></li>
              <li><a href="#" onClick={HideNavbar} data-bs-toggle="modal" data-bs-target="#signin">Sign In</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" onClick={HideNavbar} href="#footer">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" id='mobileTogl' onClick={MobileToggle}></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
      <h1>Welcome to Travelogue</h1>
      <h2>We are here to plan your tour and help to collect your moment...</h2>
      <Link to="dashboard" className="btn-get-started scrollto" data-bs-toggle="modal" data-bs-target="#signin">Let's Travel</Link>
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
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={dagdusethganapthi} className="d-block"  alt="..." />
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
      <img src={kishtwarnationalpark} className="d-block" alt="..." />
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
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
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
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-person-plus"></i></div>
              <h4><a href="">Add friends</a></h4>
              <p>Organizer need to create tour diary and add people. All the added people will  have access for adding here. User can set timeline and tell others what to do.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="150">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-images"></i></div>
              <h4><a href="">Keep track of moment and expenditure</a></h4>
              <p>This is main part of our website. Here added user can create breakpoints and can add images/videos or can share descriptive info. Anyone in group add their expenses here with description about it.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-flag"></i></div>
              <h4><a href="">Flag visited Spots</a></h4>
              <p>The globe map will be updated by marking with flag. This map will be different for everyone depending upon which tour he has done.</p>
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
          <p> Grab all neccessary things and connect with all your friends to plan and rock it 🤘</p>
          <a className="cta-btn" href="#">Go to top</a>
        </div>

      </div>
    </section>
    {/* <!-- End Cta Section --> */}

    {/* <!-- sign up --> */}
<div className="modal fade" id="signup" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
  <form action="#">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Sign Up</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
  Password must have <strong> minimum length of 6. </strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className="alert alert-success alert-dismissible fade show" role="alert">
<strong>  Congratulation!  </strong>Sign up successful.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      <div className="form-floating">
      <input type="email" className="form-control" required id="signupemail" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
      </div>
      <br />
      <div className="form-floating">
      <input type="password" className="form-control" required id="signuppassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
      </div>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" id='signupbtn' className="btn btn-primary">Sign Up</button>
      </div>
    </div>
    </form>
  </div>
</div>

    {/* <!-- sign in --> */}
    <div className="modal fade" id="signin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
  <form action="#">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Sign In</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
   <strong> Wrong </strong> email or password!
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      <div className="form-floating">
      <input type="email" className="form-control" required id="signinemail" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
      </div>
      <br />
      <div className="form-floating">
      <input type="password" className="form-control" required id="signinpassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
      </div>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" id='signinbtn' className="btn btn-primary">Sign In</button>
      </div>
    </div>
    </form>
  </div>
</div>

  </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>Travelogue</h3>
              <p>
                PICT Dhankawadi <br />
                Pune 411046, India<br /><br />
                <strong>Phone:</strong> +91 80109 65429<br />
                <strong>Email:</strong> mahajansangmeshwar04@gmail.com<br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Travelogue</span></strong>. All Rights Reserved
      </div>
      
    </div>
  </footer>
  {/* <!-- End Footer --> */}
          </div> 
     );
}
 
export default Home;