import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section className="projects-section" id="project">
      <div className="container">
        <div className="section-heading section-heading-left">
          <h2>Featured Projects</h2>
        </div>

        <Swiper
          className="swiper projects-slider"
          modules={[Navigation, Autoplay]}
          loop
          speed={800}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-card">
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="#">View Project →</a>
                </div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
}
