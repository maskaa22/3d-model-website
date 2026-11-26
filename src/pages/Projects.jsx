import React from 'react';
import {projects} from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <p className='eyebrow'>Portfolio</p>
      <h1 className='head-text'>My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span></h1>

      <div className='mt-5 max-w-2xl text-slate-300 leading-relaxed'>
        <p>Here are some of the projects I&apos;ve worked on: full-stack platforms, an educational app and
        team-built websites.</p>
      </div>

      <div className='grid md:grid-cols-2 gap-8 mt-14 mb-16'>
        {projects.map((project) => (
          <article key={project.name} className='glass-card glass-card-hover p-7 flex flex-col'>
            <div className='block-container w-14 h-14'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={project.iconUrl} alt='' className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>

            <h4 className='mt-6 text-xl font-poppins font-semibold text-white'>{project.name}</h4>

            {project.stack && (
              <div className='mt-3 flex flex-wrap gap-2'>
                {project.stack.split(' · ').map((tech) => (
                  <span key={tech} className='tag'>{tech}</span>
                ))}
              </div>
            )}

            <p className='mt-4 text-sm text-slate-300 leading-relaxed flex-1'>{project.description}</p>

            {project.link ? (
              <Link to={project.link} target='_blank' rel='noopener noreferrer'
                className='mt-6 inline-flex items-center gap-2 font-poppins font-semibold text-cyan-300 hover:text-white transition-colors'>
                Live Link
                <img src={arrow} alt='' className='w-4 h-4 object-contain'/>
              </Link>
            ) : (
              <p className='mt-6 text-sm text-slate-500'>Link coming soon</p>
            )}
          </article>
        ))}
      </div>

      <CTA />
    </section>
  )
}

export default Projects
