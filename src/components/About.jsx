import { useWordReveal } from '../hooks/useWordReveal.js';
import { useOrbitReveal } from '../hooks/useOrbitReveal.js';
import AboutIllustration from './icons/AboutIllustration.jsx';

const ABOUT_TEXT = `Website Developer passionate about creating modern web experiences.
I combine technical skills, creativity, and continuous learning
to deliver high-quality solutions that make an impact.`;

export default function About() {
  const textRef = useWordReveal(ABOUT_TEXT);
  const { wrapperRef, sunRef, isGrown } = useOrbitReveal();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text" ref={textRef} />
          </div>
          <div className="about-image">
            <div
              className={`about-image${isGrown ? ' is-grown' : ''}`}
              id="about-image"
              ref={wrapperRef}
            >
              <AboutIllustration sunRef={sunRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
