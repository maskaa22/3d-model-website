import React from 'react';
import { skills, experiences, education, projects, socialLinks, contactInfo } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const skillGroups = [
  { title: 'Frontend', type: 'Frontend' },
  { title: 'Backend', type: 'Backend' },
  { title: 'Databases', type: 'Database' },
  { title: 'Tools & Design', type: 'Tools' },
];

const stats = [
  { value: '2+', label: 'years of experience' },
  { value: projects.length, label: 'projects' },
  { value: skills.length, label: 'technologies' },
];

const About = () => {
  return (
    <section className='max-container'>
      {/* Intro */}
      <div className='grid lg:grid-cols-5 gap-10 items-start'>
        <div className='lg:col-span-3'>
          <p className='eyebrow'>About me</p>
          <h1 className='head-text'>Hello, I&apos;m <span className='blue-gradient_text font-semibold drop-shadow'>Mariia</span></h1>

          <div className='mt-6 flex flex-col gap-4 text-slate-300 leading-relaxed'>
            <p>I&apos;m a Full-Stack Developer with 2 years of practical experience in web development. I build modern,
              responsive web applications, combining frontend development with backend integration. My main technologies are
              JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL and MongoDB.</p>
            <p>I enjoy turning ideas into functional digital products, solving technical challenges, and writing clean,
              maintainable code with a well-structured architecture. I&apos;m detail-oriented, motivated to learn, and comfortable
              working both independently and as part of a team.</p>
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            <a href={`mailto:${contactInfo.email}`} className='btn'>Say hello</a>
            {socialLinks.map((social) => (
              <a key={social.name} href={social.link} target='_blank' rel='noopener noreferrer' className='btn-outline'>
                <span className='icon-badge'><img src={social.iconUrl} alt='' className='w-4 h-4 object-contain'/></span>
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <aside className='lg:col-span-2 glass-card p-6 flex flex-col gap-6'>
          <div className='grid grid-cols-3 gap-3 text-center'>
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className='blue-gradient_text font-poppins text-2xl font-bold'>{stat.value}</p>
                <p className='text-xs text-slate-400'>{stat.label}</p>
              </div>
            ))}
          </div>
          <hr className='border-white/10'/>
          <div>
            <p className='text-xs uppercase tracking-widest text-cyan-400'>Location</p>
            <p className='mt-1 text-white'>{contactInfo.location}</p>
          </div>
          <div>
            <p className='text-xs uppercase tracking-widest text-cyan-400'>Looking for</p>
            <p className='mt-1 text-slate-300 text-sm leading-relaxed'>
              A Full-Stack Developer role where I can build real-world products with modern technologies
              and grow my backend expertise.
            </p>
          </div>
          <div>
            <p className='text-xs uppercase tracking-widest text-cyan-400'>Outside of code</p>
            <p className='mt-1 text-slate-300 text-sm'>Fishing, mushroom foraging and exploring new ideas.</p>
          </div>
        </aside>
      </div>

      {/* Skills */}
      <div className='pt-20'>
        <p className='eyebrow'>Tech stack</p>
        <h3 className='subhead-text'>My skills</h3>
        <div className='mt-8 grid sm:grid-cols-2 gap-5'>
          {skillGroups.map((group) => (
            <div key={group.title} className='glass-card p-6'>
              <h4 className='font-poppins font-semibold text-white'>{group.title}</h4>
              <div className='mt-4 flex flex-wrap gap-2.5'>
                {skills.filter((skill) => skill.type === group.type).map((skill) => (
                  <span key={skill.name} className='chip'>
                    <span className='icon-badge'><img src={skill.imageUrl} alt='' className='w-4 h-4 object-contain'/></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className='pt-20'>
        <p className='eyebrow'>Career</p>
        <h3 className='subhead-text'>Work experience</h3>
        <div className='mt-10'>
          <VerticalTimeline className='timeline-dark' lineColor='rgba(255,255,255,0.15)'>
            {experiences.map((experience) => (
              <VerticalTimelineElement key={experience.company_name} date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                    <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
                  </div>}
                contentStyle={{
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: `4px solid ${experience.iconBg}`,
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                  backdropFilter: 'blur(10px)',
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.15)' }}
                iconStyle={{background: experience.iconBg, boxShadow: '0 0 0 4px rgba(255,255,255,0.1)'}}
                >
                <div>
                  <h3 className='text-white text-xl font-poppins font-semibold'>{experience.title}</h3>
                  <p className='text-cyan-300 font-medium' style={{margin:0}}>{experience.company_name}</p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-slate-300 font-normal pl-1 text-sm'>{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Education */}
      <div className='pt-20 pb-16'>
        <p className='eyebrow'>Learning</p>
        <h3 className='subhead-text'>Education</h3>
        <div className='mt-8 grid md:grid-cols-3 gap-5'>
          {education.map((item) => (
            <div key={item.school} className='glass-card glass-card-hover p-6 flex flex-col gap-2'>
              <p className='text-sm font-medium text-cyan-300'>{item.period}</p>
              <p className='font-poppins font-semibold text-white'>{item.school}</p>
              <p className='text-sm text-slate-300'>{item.degree}</p>
            </div>
          ))}
        </div>
        <p className='mt-6 text-slate-400 text-sm'>
          Languages: Ukrainian (native), Russian (native), English (pre-intermediate).
        </p>
      </div>

      <CTA/>
    </section>
  )
}

export default About
