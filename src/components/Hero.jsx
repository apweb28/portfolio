import { forwardRef } from 'react';
import { heroRoles } from '../data/navLinks.js';
import { useRoleRotator } from '../hooks/useRoleRotator.js';

const Hero = forwardRef(function Hero(_props, ref) {
  const { activeIndex, isExiting } = useRoleRotator(heroRoles);

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-intro gradient-text">Hello, I am</p>
          <h1 className="hero-title">Abhay Prajapati</h1>
          <div className="hero-role">
            {heroRoles.map((role, index) => {
              const classes = ['role-text', 'gradient-text'];
              if (index === activeIndex) {
                classes.push('active');
                if (isExiting) classes.push('exit');
              }
              return (
                <span key={role} className={classes.join(' ')}>
                  {role}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
