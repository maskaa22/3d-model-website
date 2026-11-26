import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import Tortoise from '../models/Tortoise';
import { socialLinks, contactInfo } from '../constants';

const Contact = () => {

const formRef = useRef(null);
const [form, setForm] = useState({name: '', email: '', message: ''});
const [isLoading, setIsLoadeng] = useState(false);
const [currentAnimation, setCurrentAnimation] = useState('walking');
const {alert, showAlert, hideAlert} = useAlert();

const handleChange = (e) => {
  setForm({...form, [e.target.name]: e.target.value})
};

const handleFocus = (e) => {setCurrentAnimation('make-male');};

const handleBlur = () => setCurrentAnimation('walking');

const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoadeng(true);
  setCurrentAnimation('make-male');

  emailjs.send(
   import.meta.env.VITE_APP_EMAILJS_SERVISE_ID,
   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
   {
    form_name: form.name,
    to_name: "Mariia",
    from_email: form.email,
    to_email: contactInfo.email,
    message: form.message
   },
   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  ).then(() => {
    setIsLoadeng(false);
    showAlert({show: true, text: 'Message sent successfully!', type: 'success'});
    setCurrentAnimation('looking');
    setTimeout(() => {
      hideAlert();
      setCurrentAnimation('walking');
      setForm({name: '', email: '', message: ''});
    }, [3000])

  }).catch((error) => {
    setCurrentAnimation('walking');
    setIsLoadeng(false);
    showAlert({show: true, text: 'Sorry, your message was not sent. Please try again.', type: 'danger'});
  })
};

  return (
    <section className='relative flex lg:flex-row flex-col max-container '>
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col lg:pr-10'>
        <p className='eyebrow'>Contact</p>
        <h1 className='head-text'>Get in <span className='blue-gradient_text font-semibold drop-shadow'>Touch</span></h1>
        <p className='mt-5 max-w-lg text-slate-300 leading-relaxed'>
          Have a project in mind or looking for a developer? Send me a message and I&apos;ll get back to you.
        </p>

        <div className='mt-6 flex flex-wrap items-center gap-3'>
          <a href={`mailto:${contactInfo.email}`} className='chip'>
            <span aria-hidden='true'>✉</span> {contactInfo.email}
          </a>
          {socialLinks.map((social) => (
            <a key={social.name} href={social.link} target='_blank' rel='noopener noreferrer' className='chip'>
              <span className='icon-badge'><img src={social.iconUrl} alt='' className='w-4 h-4 object-contain'/></span>
              {social.name}
            </a>
          ))}
        </div>

        <form className='glass-card w-full flex flex-col gap-2 mt-10 p-6 sm:p-8' onSubmit={handleSubmit} ref={formRef}>
          <label className='text-white font-semibold'>Name</label>
          <input className='input mb-4' type='text' name='name' placeholder='John' required value={form.name}
          onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          <label className='text-white font-semibold'>Email</label>
          <input className='input mb-4' type='email' name='email' placeholder='john@gmail.com' required value={form.email}
          onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          <label className='text-white font-semibold'>Your message</label>
          <textarea className='textarea mb-4' rows={4} name='message' placeholder='Let me know how I can help you!' required value={form.message}
          onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          <button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send message'}</button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{position: [0, 0, 5], fov: 75, near: 0.1, far: 1000}}>
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader/>}>
            <Tortoise position={[0.5, -1.35, 0]} rotation={[6.6, -0.8, 0]} scale={[2.5, 2.5, 2.5]} currentAnimation={currentAnimation}/>          
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact