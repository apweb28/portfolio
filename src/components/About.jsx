import { useWordReveal } from '../hooks/useWordReveal.js';
import { useOrbitReveal } from '../hooks/useOrbitReveal.js';
import AboutIllustration from './icons/AboutIllustration.jsx';

const ABOUT_TEXT = `Web Developer with 2.5+ years of experience building modern web experiences — from CMS-based sites on Shopify, WordPress, and Webflow to custom front-end builds with React and JavaScript. I care about performance, SEO, and clean, functional design in everything I build.`;

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
