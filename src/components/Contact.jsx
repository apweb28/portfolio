import { useContactForm } from '../hooks/useContactForm.js';
import PhoneIcon from './icons/PhoneIcon.jsx';
import EmailIcon from './icons/EmailIcon.jsx';
import AddressIcon from './icons/AddressIcon.jsx';

export default function Contact() {
  const { values, handleChange, handleSubmit, isPopupOpen, closePopup } = useContactForm();

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="contact-title">Contact Me</h2>

              <div className="contact-item">
                <PhoneIcon />
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+919898229187">+91 98982 29187</a>
                </div>
              </div>

              <div className="contact-item">
                <EmailIcon />
                <div>
                  <h3>Email</h3>
                  <a href="mailto:apwebdev@gmail.com">apwebdev@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <AddressIcon />
                <div>
                  <h3>Address</h3>
                  <p>Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={values.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={values.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className={`contact-popup${isPopupOpen ? ' active' : ''}`}>
        <div className="popup-content">
          <h3>Thank You!</h3>
          <p>
            This is a portfolio demo form. Please contact me directly via email for project
            inquiries.
          </p>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    </>
  );
}
