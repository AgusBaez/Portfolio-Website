//#React COMPONENTs
//Extencion JSX por que se usa emit(imagenes) para atajos
import React from 'react'
import "./about.css";
import {TbAward} from 'react-icons/tb'
import {FaUserGraduate} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
//Van a exitir diferentes componentes para cada seccion de la app, cada carpeta contendria cada seccion de componentes

import ME from '../../assets/me2.jpg'
//# Creando una funcion componente react
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Years Working & Learning</small>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Computer Technician</h5>
              <small>Qualified Professional</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyects</h5>
              <small>14+ Competed Proyects</small>
            </article>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nihil quisquam sequi nam recusandae provident sunt est delectus sed nesciunt, nostrum iusto doloremque repudiandae, amet expedita. Neque magni excepturi exercitationem?</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About