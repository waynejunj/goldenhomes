import React, { useEffect } from 'react';
import '../Homepage/Homepage.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js'

const Homepage = () => {
  useEffect(() => {
    // Initialize any required scripts
  }, []);

  return (
    <div className="homepage">

      {/* carousel section */}
      <section className="hero mx-3 mt-4">
        <div id="propertyCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="2"></button>
          </div>
          
          {/* Slides */}
          <div className="carousel-inner">
            {/* Slide 1 - Your original property */}
            <div className="carousel-item active">
              <div className="hero-content">
                <h2>Find Your Perfect Home</h2>
                <p>204 Olive Road, Doral FL</p>
                <p className="price">$12,000/mo</p>
                <Link className="cta-button">Schedule Viewing</Link>
              </div>
            </div>
            
            {/* Slide 2 - Additional property */}
            <div className="carousel-item">
              <div className="hero-content">
                <h2>Luxury Waterfront Condo</h2>
                <p>305 Biscayne Blvd, Miami FL</p>
                <p className="price">$15,500/mo</p>
                <Link className="cta-button">Schedule Viewing</Link>
              </div>
            </div>
            
            {/* Slide 3 - Additional property */}
            <div className="carousel-item">
              <div className="hero-content">
                <h2>Modern Downtown Apartment</h2>
                <p>122 Brickell Ave, Miami FL</p>
                <p className="price">$9,800/mo</p>
                <Link className="cta-button">Schedule Viewing</Link>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      

      {/* Services Section - Simplified to 3 core services */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Expert real estate solutions tailored to your needs</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Property Sales</h3>
              <p>Find your dream home with our expert guidance and extensive listings.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Rental Management</h3>
              <p>Stress-free rental solutions for both property owners and tenants.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Investment Advice</h3>
              <p>Maximize your returns with our market insights and strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section - Simplified layout */}
      <section id="agents" className="agents">
        <div className="container">
          <h2 className="section-title">Meet Our Agents</h2>
          <p className="section-subtitle">Professional, knowledgeable, and dedicated to your needs</p>
          
          <div className="agents-grid">
            <div className="agent-card">
              <img src="assets/img/team/team-1.jpg" alt="Walter White" />
              <h3>Walter White</h3>
              <p>CEO & Founder</p>
              <div className="social-links">
                <Link ><i className="bi bi-linkedin"></i></Link>
                <Link ><i className="bi bi-envelope"></i></Link>
              </div>
            </div>
            
            <div className="agent-card">
              <img src="assets/img/team/team-2.jpg" alt="Sarah Jhonson" />
              <h3>Sarah Jhonson</h3>
              <p>Rent Manager</p>
              <div className="social-links">
                <Link ><i className="bi bi-linkedin"></i></Link>
                <Link ><i className="bi bi-envelope"></i></Link>
              </div>
            </div>
            
            <div className="agent-card">
              <img src="assets/img/team/team-3.jpg" alt="William Anderson" />
              <h3>William Anderson</h3>
              <p>Sales Director</p>
              <div className="social-links">
                <Link ><i className="bi bi-linkedin"></i></Link>
                <Link ><i className="bi bi-envelope"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Simplified to 3 key testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What our clients say about us</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p>"Found my dream home in just two weeks! The team was incredibly professional and attentive to my needs."</p>
              <div className="client-info">
                <img src="assets/img/testimonials/testimonials-1.jpg" alt="Saul Goodman" />
                <div>
                  <h4>Saul Goodman</h4>
                  <p>Homeowner</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p>"As a first-time buyer, I appreciated their patience and clear explanations throughout the process."</p>
              <div className="client-info">
                <img src="assets/img/testimonials/testimonials-2.jpg" alt="Sara Wilsson" />
                <div>
                  <h4>Sara Wilsson</h4>
                  <p>First-time Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>EstateHub</h3>
              <p>Your trusted partner in real estate since 2010.</p>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>info@estatehub.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link>Services</Link>
              <Link>Agents</Link>
              <Link>Testimonials</Link>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} EstateHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;