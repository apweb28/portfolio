import { testimonials } from '../data/testimonials.js';
import { useTestimonialSlider } from '../hooks/useTestimonialSlider.js';
import QuoteIcon from './icons/QuoteIcon.jsx';

export default function Testimonials() {
  const { firstCardRef, currentIndex, setCurrentIndex, translateX, totalDots } =
    useTestimonialSlider(testimonials.length);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <h2>Our Testimonials</h2>
        </div>

        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <article
                className="testimonial-card"
                key={testimonial.id}
                ref={index === 0 ? firstCardRef : undefined}
              >
                <div className="quote-icon">
                  <QuoteIcon />
                </div>
                <p>{testimonial.quote}</p>
                <span>{testimonial.author}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`testimonial-dot${index === currentIndex ? ' active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
