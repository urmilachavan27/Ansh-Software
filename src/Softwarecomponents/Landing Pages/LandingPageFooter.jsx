import React from 'react';
import '../../styles/LandingPageFooter/LandingPageFooter.css';
import { BiTwitter, BiFacebook, BiInstagram, BiLinkedin } from 'react-icons/bi';

const LandingPageFooter = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4 gap-4">
            {/* About Section */}
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">ANSH SOFTWARE SOLUTIONS</span>
              </a>
              <div className="footer-contact pt-3 ">
                <p>E-104 Vasu Pujya</p>
                <p>Palanour Jakatnaka, Surat 395003</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+91 9033623320</span></p>
                <p><strong>Email:</strong> <span>anshsoftwaresolutions@gmail.com</span></p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-3 footer-links ">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Desktop Software Development</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile Development</a></li>
                <li><a href="#">Customized Development</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Products</h4>
              <ul>
                <li><a href="#">Ready GST</a></li>
                <li><a href="#">E-Mandli</a></li>
                <li><a href="#">Color Costing</a></li>
                <li><a href="#">E-Commerce</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div>
              © Copyright <strong><span>Ansh Software Solutions</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://anshsoft.in/">Shailesh Deshmukh</a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            {/* <a href="#"><BiTwitter /></a>
            <a href="#"><BiFacebook /></a>
            <a href="#"><BiInstagram /></a>
            <a href="#"><BiLinkedin /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
