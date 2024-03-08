import React from 'react';
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
    </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
     Hi, I am <span className='font-semibold'>Mariia</span> 
     <br/>
    Junior Full Stack Developer.
    </h1>
  ),
  2: (
      <InfoBox text='Work with many companies bla bla bla' link={'/about'} btnText={'Learn more'}/>
  ),
  3: (
    <InfoBox text='Led multiple project to success over the years. Curious about thr impact?' link={'/projects'} btnText={'Visit my portfolio'}/>
  ),
  4: (
    <InfoBox text='Nead a project done or looking for a dev? I`m just a few ketstrokes away' link={'/contact'} btnText={'Let`s talk'}/>
  )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo