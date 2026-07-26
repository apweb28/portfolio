import { quickLinks, serviceLinks } from '../data/footerLinks.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="footer-about">
          <a href="#" className="footer-logo">
            <img src="/images/logo.png" alt="Logo" />
          </a>
          <p>
            We build high-quality websites that are modern, fast, responsive, and optimized for
            businesses looking to grow online.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>E: <a href='apwebdev@gmail.com'>apwebdev@gmail.com</a></li>
            <li>P: <a href='tel:9898229187'>+91 9898229187</a></li>
            <li>A: Ahmedabad, Gujarat, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©{year} Abhay Prajapati All Rights Reserved.</p>
      </div>
    </footer>
  );
}
