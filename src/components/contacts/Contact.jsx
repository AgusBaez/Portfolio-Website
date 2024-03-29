//#React COMPONENTs
//Extencion JSX por que se usa emit(imagenes) para atajos
import React from 'react'
import {BiMailSend} from 'react-icons/bi'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import "./contact.css";

<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

//Van a exitir diferentes componentes para cada seccion de la app, cada carpeta contendria cada seccion de componentes
//# Creando una funcion componente react
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMailSend className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>agustinbaezignacio@gmail.com</h5>
            <a href="mailto:agustinbaezignacio@gmail.com">Send a message</a>
            </article>
          <article className="contact__option">
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@agustin baez developer</h5>
            <a href="https://www.instagram.com/agustin_baez_developer/">Send a message</a>
            </article>
          <article className="contact__option">        
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Agustin Baez</h5>
            <div class="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="agus-baez" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ar.linkedin.com/in/agus-baez?trk=profile-badge">Send me a Message</a></div>
            </article>
          {/* <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required/>  
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required />
            <button type='sumbit' className='btn btn-primary'>Send Message</button>
          </form> */}
        </div>
      </div>
</section>
  )
}


export default Contact