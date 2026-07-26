import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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
          modules={[Pagination, Autoplay]}
          loop
          speed={800}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
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

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}