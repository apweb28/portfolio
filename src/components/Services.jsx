import { services } from '../data/services.js';

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <h2>My Services</h2>
        </div>
        <div className="services-grid">
          {services.map(({ id, icon: Icon, title, description }) => (
            <article className="service-card" key={id}>
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
