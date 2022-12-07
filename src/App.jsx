//#React COMPONENTs
//Extencion JSX por que se usa emit(imagenes) para atajos
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contacts/Contact'
//Van a exitir diferentes componentes para cada seccion de la app, cada carpeta contendria cada seccion de componentes
//# Creando una funcion componente react
const App = () => {
  return (
    //Componentes en el orden que quiera ir cargandolos en la app
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  )
}

export default App