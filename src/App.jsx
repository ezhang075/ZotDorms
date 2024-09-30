import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome import (you can use a local version or CDN as well)
import './styles.css'; // Local styles
//import AppRouter from "./route";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Vista_Del_Campo_Norte from './vdcn';
// import About from './pages/About';
// import Contact from './pages/Contact';

// import external JS libraries if needed via npm or public CDN


function App() {
  return (
    <>
      {/* Monsterrat Google Font*/}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>

      {/* Ubuntu Google Font*/}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>

      <section id="title">
        <div className="container-fluid">
          {/* Nav Bar */}
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">ZotDorms</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#footer">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="sign-in-button" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cta">Download</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Title */}
          <div className="row">
            <div className="col-lg-6">
              <h1 className="title-heading">Search & Rate UCI Dorms</h1>

              <button type="button" className="btn btn-dark btn-lg download-button">
                <i className="fab fa-apple"></i> Download
              </button>

              <button type="button" className="btn btn-dark btn-lg download-button">
                <i className="sign-in-button"></i> Sign In
              </button>

              <button type="button" className="btn btn-outline-light btn-lg download-button">
                <i className="fab fa-google-play"></i> Download
              </button>

              <button type="button" className="btn btn-outline-light btn-lg download-button">
                <i className="log-in-button"></i> Log In
              </button>

              <div class="dropdown">
                <a class="btn btn-dark btn-lg dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Select a Dorm
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="/vdcn">Vista Del Campo Norte (VDCN)</a></li>
                  <li><a class="dropdown-item" href="/vdcn">element={<Vista_Del_Campo_Norte />}</a></li>
                  <li><a class="dropdown-item" href="/vdc">Vista Del Campo (VDC)</a></li>
                  <li><a class="dropdown-item" href="/pv">Plaza Verde</a></li>
                  <li><a class="dropdown-item" href="/pv2">Plaza Verde II</a></li>
                  <li><a class="dropdown-item" href="/camino-del-sol">Camino del Sol</a></li>
                  <li><a class="dropdown-item" href="/puerta-del-sol">Puerta del Sol</a></li>
                  {/* <AppRouter> */}
                    {/* <li><Link className="dropdown-item" to="/">Vista_Del_Campo_Norte</Link></li>
                    <li><Link className="dropdown-item" to="/about">About</Link></li>
                    <li><Link className="dropdown-item" to="/contact">Contact</Link></li> */}
                  {/* </AppRouter> */}

                </ul>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="title-image">
                <img className="title-image" src="images/iphone6.png" alt="iphone-mockup" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features">
        <div className="row">
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-circle-check fa-4x"></i>
            <h3>Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-bullseye fa-4x"></i>
            <h3>Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-heart fa-4x"></i>
            <h3>Guaranteed to work.</h3>
            <p>Find the love of your dog's life or your money back.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div id="carouselExampleControls" className="carousel slide" data-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
              <img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile" />
              <em>Pebbles, New York</em>
            </div>
            <div className="carousel-item">
              <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
              <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile" />
              <em>Beverly, Illinois</em>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      {/* Press */}
      <section id="press">
        <img className="press-logo" src="images/TechCrunch.png" alt="tc-logo" />
        <img className="press-logo" src="images/tnw.png" alt="tnw-logo" />
        <img className="press-logo" src="images/bizinsider.png" alt="biz-insider-logo" />
        <img className="press-logo" src="images/mashable.png" alt="mashable-logo" />
      </section>

      {/* Pricing */}
      <section id="pricing">
        <h2>A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for you and your dog.</p>
        <div className="card-group">
          <div className="card">
            <div className="card-header">
              <h3>Chihuahua</h3>
            </div>
            <div className="card-body">
              <h2>Free</h2>
              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-lg btn-outline-dark">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Labrador</h3>
            </div>
            <div className="card-body">
              <h2>$49 / mo</h2>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-lg btn-dark">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Mastiff</h3>
            </div>
            <div className="card-body">
              <h2>$99 / mo</h2>
              <p>Priority Listing</p>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-lg btn-dark">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta">
        <h3 className="cta-text">Find the True Love of Your Dog's Life Today.</h3>
        <button type="button" className="download-button btn btn-dark btn-lg">
          <i className="fab fa-apple"></i> Download
        </button>
        <button type="button" className="download-button btn btn-outline-light btn-lg">
          <i className="fab fa-google-play"></i> Download
        </button>
      </section>

      {/* Footer */}
      <footer id="footer">
        <i className="social-icon fab fa-twitter"></i>
        <i className="social-icon fab fa-facebook-f"></i>
        <i className="social-icon fab fa-instagram"></i>
        <i className="social-icon fa-solid fa-envelope"></i>
        <p className="footer-text">© 2024 ZotDorms Inc.</p>
      </footer>
    </>
  );
}

export default App;