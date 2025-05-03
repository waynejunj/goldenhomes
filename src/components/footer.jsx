import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Golden Homes</h3>
              <p>Your trusted partner in real estate since 2010.</p>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>info@goldenhomes.com</p>
              <p>+254 721 799055</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link>Services</Link>
              <Link>Agents</Link>
              <Link>Testimonials</Link>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} GoldenHomes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
