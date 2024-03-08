import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import Tortoise from '../models/Tortoise';

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
    to_name: "Adrian",
    from_email: form.email,
    to_email: 'contactBla@dfdfv.pro',
    message: form.message
   },
   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  ).then(() => {
    setIsLoadeng(false);
    showAlert({show: true, text: 'Message sent succefully!', type: 'success'});
    setCurrentAnimation('looking');
    setTimeout(() => {
      hideAlert();
      setCurrentAnimation('walking');
      setForm({name: '', email: '', message: ''});
    }, [3000])

  }).catch((error) => {
    setCurrentAnimation('walking');
    setIsLoadeng(false);
    showAlert({show: true, text: 'Z didnt receive your message', type: 'danger'});
  })
};

  return (
    <section className='relative flex lg:flex-row flex-col max-container '>
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit} ref={formRef}>
          <label className='text-black-500 font-semibold'>Name</label>
          <input className='input' type='text' name='name' placeholder='John' required value={form.name} 
          onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          <label className='text-black-500 font-semibold'>Email</label>
          <input className='input' type='email' name='email' placeholder='john@gmail.com' required value={form.email} 
          onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          <label className='text-black-500 font-semibold'>Your message</label>
          <textarea className='textarea' rows={4} name='message' placeholder='Let me know how I can help you!' required value={form.message} 
          onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
          <button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send message'}</button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h[350px]'>
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