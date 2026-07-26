import { skills } from '../data/navLinks.js';

export default function SkillsMarquee() {
  // Rendered twice back-to-back so the CSS marquee animation (translateX -50%) loops seamlessly.
  const track = [...skills, ...skills];

  return (
    <section className="skills-marquee">
      <div className="marquee-track">
        {track.map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
