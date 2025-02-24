import React, { useState } from "react";
import LandingPageHeader from './LandingPageHeader'
import { Tabs, Collapse } from "antd";
import '../../styles/LandingPageMainPage/LandingPageMainPage.css'
import digital_transformation_ideas from "../../images/landingpageimages/digital_transformation_ideas.png"
import aboutimages from "../../images/landingpageimages/aboutimages.jpg"
import { SlArrowRightCircle } from "react-icons/sl";
import Redaygstimage from "../../images/hero/AccountingSoftware.webp"
import anshmandliimage from "../../images/hero/AccountingSoftware.webp"
import coastingdying from "../../images/hero/AccountingSoftware.webp"
import AccountingSoftware from "../../images/hero/AccountingSoftware.webp"
import LandingPageFooter from "./LandingPageFooter"
import { Link, useLocation } from "react-router-dom";
import  Dashborads_headers from "../../images/landingpageimages/Dashboards_Header.png"
function LandingPageMainPage() {
  const location = useLocation()
  const [selectedProduct, setSelectedProduct] = useState("I-Fins");
  const Product = [
    {
      id: "01",
      title: "I-Fins",
      description: "I-Fins simplifies business accounting, invoicing, inventory tracking and reporting using one powerful interface.",
      image: AccountingSoftware,
      path: "/home", 
    },
    {
      id: "02",
      title: "E-Mandli",
      description: "E-Mandli simplifies business accounting, invoicing, inventory tracking and reporting using one powerful interface.",
      image: anshmandliimage,
      path: "/e-mandli", 
    },
    {
      id: "03",
      title: "Ready GST",
      description: "Ready GST simplifies business accounting, invoicing, inventory tracking and reporting using one powerful interface.",
      image: Redaygstimage,
      path: "/ready-gst",
    },
    {
      id: "04",
      title: "Costing Dying",
      description: "Costing Dying simplifies business accounting, invoicing, inventory tracking and reporting using one powerful interface.",
      image: coastingdying,
      path: "/costing-dying", 
    },
  ];
  
  const { TabPane } = Tabs;


  return (
    <>
      <div>
        <LandingPageHeader />
      </div>
      {/* MAIN SECTION START */}
      <section className='ansh-software-first-section d-flex align-items-center' id='home'>
        <div className='row align-items-center justify-content-center text-center text-md-start'>

          {/* ✅ Left Content - Text */}
          <div className='col-md-6 col-lg-6'>
            <div className='first-section-content'>
              <h1 className='fw-bold'>Transforming Ideas into <br /> Innovative Software</h1>
              <p>
                We are a passionate team of software developers, designers, and strategists dedicated to<br /> building high-quality,
                reliable, and scalable software. Our diverse expertise spans custom software development, web and mobile app creation,
                cloud solutions, and more. We take pride in turning complex challenges into simple, effective solutions.
              </p>
            </div>
          </div>

          {/* ✅ Right Content - Image */}
          <div className='col-md-6 col-lg-6 d-flex justify-content-center'>
            <img src={Dashborads_headers} className='digital-transformation-image img-fluid' alt="Digital Transformation" />
          </div>

        </div>
      </section>
      {/* MAIN SECTION END */}

      {/* ABOUT US SECTION START */}

      <section className='ansh-software-second-section' id='aboutus'>
        <div className='container'>
          <h2 className='aboutus-sec-heading'>About Us</h2>
          <div className='row ' style={{ marginTop: "5vh" }}>
            <div className='col-md-6  col-lg-6'>
              <img src={aboutimages} className='aboutus-images' />
            </div>
            <div className='col-md-6  col-lg-6'>
              <div className='about-sec-content'>
                <h3>Our Mission:</h3>
                <p>To empower businesses and individuals by delivering innovative,<br /> reliable, and scalable software solutions that drive growth and efficiency.</p> <br />
                <br />
                <h3>Our Vision:</h3>
                <p>To be a leading software development company known for transforming ideas into impactful digital solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US  SECTION  END */}

      {/*  PRODUCT SECTION  START */}
      <section className='ansh-software-third-section' id="product">
        <div className='container'>
          <h2 className='aboutus-sec-heading'>Product</h2>
          <div className="product">
            {/* <h1 className="title">MERN Stack Development Services We Offer</h1> */}
            <p className="description">
              In today’s  fast-paced digital world, having the right software can make all the difference.
              Our advanced Ansh Software is designed to streamline your operations, enhance productivity, and drive business success.
            </p>
            <div className="product-container">
              <div className="product-list">
                {Product.map((Product) => (
                  <React.Fragment key={Product.id}>
                    <button
                      className={`product-button ${selectedProduct === Product.title ? "active" : ""
                        }`}
                      onClick={() => setSelectedProduct(Product.title)}
                    >
                      {Product.id}. {Product.title}
                    </button>
                    <hr className="divider" />
                  </React.Fragment>
                ))}
              </div>
              <div className="product-details">
                {Product
                  .filter((Product) => Product.title === selectedProduct)
                  .map((Product) => (
                    <div key={Product.id}>
                      <div className="product-header">
                        <span className="product-icon">{Product.icon}</span>
                        <h2 className="product-title">{Product.title}</h2>
                      </div>
                      <img src={Product.image} alt={Product.title} className="product-image" />
                      <p className="product-description">{Product.description}</p>
                      <Link
                        className="show-more-btn"
                        to={Product.path} 
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      >
                        Show More
                      </Link>


                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  PRODUCT SECTION  END */}

      {/*  SERVISE SECTION  START */}

      <section className="servises-section" id="services">
        <div className="container">
          <h2 className="aboutus-sec-heading">Services</h2>
          <div className="Ready-GST-Outer-section" >
            <Tabs defaultActiveKey="1" left animated={{ inkBar: true, tabPane: false }}>
              <TabPane tab="Ready GST" key="1">
                <div className="Ready-GST-inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Ready-GST-p">
                        Ready GST Software Features
                      </p>
                      <div className="Ready-GST-icons-section">
                        <ul className="Ready-GST-icons-section-main">
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            User Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Financial Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Expense and Income Tracking
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Invoicing and Billing

                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Financial Reporting
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Tax Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Inventory Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Data Security and Backup
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Multi-Currency and Import Export Modules
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img src={Redaygstimage} alt="Invoicing Summary" className="ready-gst-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="E-Mandli" key="2">
                <div className="Ready-GST-inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Ready-GST-p">
                        Key Features of Ansh-Mandli App With Multi Branch
                      </p>
                      <div className="Ready-GST-icons-section">
                        <ul className="Ready-GST-icons-section-main">
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Financial Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Loan Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Savings Recuring nagement
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Fixed Deposite Management

                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Payroll Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Anaj/Kapad/Iron/Petroll Trading Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Expense and Income and Rebate Tracking
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Invoicing and Billing
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Financial Reporting
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Tax Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Multi Level Stock Management
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Data Security and Data Verification
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img src={anshmandliimage} alt="Invoicing Summary" className="ready-gst-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Costing Dying" key="3">
                <div className="Ready-GST-inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Ready-GST-p">
                        Key Features of Software
                      </p>
                      <div className="Ready-GST-icons-section">
                        <ul className="Ready-GST-icons-section-main">
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Purchase/Inward of Color/Chemical
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Issue Color/Chemical Department Wise
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Purchase Order
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Stock Dashboard

                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Stock Ledgers
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Issue Register with Costing
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img src={coastingdying} alt="Invoicing Summary" className="ready-gst-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="I-Fins" key="4">
                <div className="Ready-GST-inner-section">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <p className="Ready-GST-p">
                        The Features of I-Fins
                      </p>
                      <div className="Ready-GST-icons-section">
                        <ul className="Ready-GST-icons-section-main">
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Accounting Software Designed for Non-Accountants
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Grow Your Sales With Powerful Invoicing
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Track Inventory With Ease
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Take Control of Your Business Expenses
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Financial Reporting
                          </li>
                          <li className="Ready-GST-icons-content">
                            <SlArrowRightCircle className="Ready-GST-icon-style" />
                            Making Tax & GST Compliance Easy
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img src={AccountingSoftware} alt="Invoicing Summary" className="ready-gst-img" />
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </section>
      {/*  SERVISE SECTION  END */}

      {/* TESTIMONIALS SECTION START */}

      <section className="testimonial-section" id="testimonial">
        <div className="container">
          <h2 className="aboutus-sec-heading">Testimonial</h2>
          <p className="testimonial-p"> "Trusted by Businesses, Powered by Innovation!"
            We take pride in delivering high-performance solutions that help businesses scale and succeed.
            Here's what our valued clients have to say about their journey with us.</p>
          <div className="row" style={{ marginTop: "5vh" }}>
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="testimonial-card">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Amit Sharma"
                  className="testimonial-img"
                />
                <h3 className="testimonial-name">Amit Sharma</h3>
                <p className="testimonial-feedback">
                  This company provides excellent service! Highly satisfied with their professionalism and dedication.
                </p>
                <div className="testimonial-rating">★★★★★</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="testimonial-card">
                <img
                  src="https://randomuser.me/api/portraits/women/50.jpg"
                  alt="Priya Singh"
                  className="testimonial-img"
                />
                <h3 className="testimonial-name">Priya Singh</h3>
                <p className="testimonial-feedback">
                  Great experience working with them. The team is very supportive and delivers high-quality work.
                </p>
                <div className="testimonial-rating">★★★★☆</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="testimonial-card">
                <img
                  src="https://randomuser.me/api/portraits/men/55.jpg"
                  alt="Rahul Verma"
                  className="testimonial-img"
                />
                <h3 className="testimonial-name">Rahul Verma</h3>
                <p className="testimonial-feedback">
                  One of the best services I have ever used. Highly recommended for businesses looking for tech solutions!
                </p>
                <div className="testimonial-rating">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION END */}


      {/* CONTACT US SECTION START  */}
      <section className="contact-us-section" id="contactus">
        <div className="container shadow-lg rounded">
          <h2 className="aboutus-sec-heading">Contact</h2>
          <div className="row">
            {/* Contact Details */}
            <div className="col-lg-6 col-md-6">
              <div className="contact-details ">
                <h2 className="mb-4">Get in Touch</h2>
                <p><strong>📍 Address:</strong> E-104 Vasu Pujya Palanour Jakatnaka,Surat 395003</p>
                <p><strong>📞 Call:</strong> +91 9033623320</p>
                <p><strong>📧 Email:</strong> anshsoftwaresolutions@gmail.com
                  deshmukh.shailesh4@gmail.com</p>
                <p><strong>⏰ Open Hours:</strong>Monday - Friday <br />8:00AM - 04:00PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6 col-md-6">
              <div className="contact-form p-5 ">
                <h2 className="mb-4 text-center">Send a Message</h2>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control input-custom" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control input-custom" placeholder="Your Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control input-custom" placeholder="Subject" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control input-custom" rows="4" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="submit-btn w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT US SECTION END  */}

      {/* FOOTER SECTION START  */}

      <LandingPageFooter />

      {/* FOOTER SECTION END  */}

    </>
  )
}

export default LandingPageMainPage