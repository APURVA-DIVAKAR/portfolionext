import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import vedix from '../public/assets/projects/Vedix.png';
import tata from '../public/assets/projects/Tata1mg.png'
import myhours from '../public/assets/projects/Myhours.png'
import BB from '../public/assets/projects/Bigbasket.png'
import ProjectItem from './ProjectItem';


// https://wonderful-dasik-3cd912.netlify.app/
// https://bigbasket-seven.vercel.app/
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Vedix Clone'
            backgroundImg={vedix}
            projectUrl='/vedix'
            tech='HTML CSS Javascript'
          />
          <ProjectItem
            title='Tata1mg Clone'
            backgroundImg={tata}
            projectUrl='/tata1mg'
            tech='React JS'

          />
          <ProjectItem
            title='Bigbasket Clone'
            backgroundImg={BB}
            projectUrl='/bigbasket'
            tech='React JS MongoDB'

          />
          <ProjectItem
            title='MyHours Clone'
            backgroundImg={myhours}
            projectUrl='/myhours'
            tech='React JS MongoDB'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
