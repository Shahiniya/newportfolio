import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import javascript from '../assets/javascript.png';
import github from '../assets/github.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';




const Skill = () => {
  return (
    <div name='skills' className='bg-[#0a192f]  text-gray-300 w-full h-screen '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center 
        w-full h-full'>
        <div className=''>
            <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={html} alt='html icon '/>
                <p className='py-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={css} alt='html icon '/>
                <p className='py-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={javascript} alt='javascript icon '/>
                <p className='py-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={react} alt='raect icon '/>
                <p className='py-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={tailwind} alt='tailwind icon '/>
                <p className='py-4'>TailwindCss</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto ' src={github} alt='github icon '/>
            <p className='py-4'>Github</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto ' src={mongo} alt='mongo icon '/>
        <p className='py-4'>MongoDB</p>
    </div>
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto ' src={node} alt='node icon '/>
    <p className='py-4'>Node.js</p>
</div>        

        </div>
        </div>
    </div>
  )
}

export default Skill;