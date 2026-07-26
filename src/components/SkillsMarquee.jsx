import { skills } from '../data/navLinks.js';

export default function SkillsMarquee() {
 
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
