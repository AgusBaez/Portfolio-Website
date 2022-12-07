/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import customIMG from '../../assets/portfolio/custom.jpg'
import fakeCarStoreIMG from '../../assets/portfolio/fakeCarStore.jpg'
import fakeStoreIMG from '../../assets/portfolio/fakeStore.jpg'
import photo_siteIMG from '../../assets/portfolio/photo_site.jpg'
import price_tableIMG from '../../assets/portfolio/price_table.jpg'
import score_keeperIMG from '../../assets/portfolio/score_keeper.jpg'
import poke_domIMG from '../../assets/portfolio/poke_dom.png'

const data = [
  {
    id: 1,
    image: customIMG,
    title: 'E-commerce Store for any type of Clothing',
    github: 'https://github.com/AgusBaez',
    demo: 'https://www.linkedin.com/in/agus-baez/',
  },
  {
    id: 2,
    image: fakeCarStoreIMG,
    title: 'Car Sales Store Interface(API demo)',
    github: 'https://github.com/AgusBaez',
    demo: 'https://www.linkedin.com/in/agus-baez/',
  },
  {
    id: 3,
    image: fakeStoreIMG,
    title: 'Car Sales Store Interface(API demo)',
    github: 'https://github.com/AgusBaez',
    demo: 'https://www.linkedin.com/in/agus-baez/',
  },
  {
    id: 4,
    image: photo_siteIMG,
    title: 'Professional Photography Website',
    github: 'https://github.com/AgusBaez',
    demo: 'https://www.linkedin.com/in/agus-baez/',
  },
  {
    id: 5,
    image: price_tableIMG,
    title: 'Project Service Payment Table',
    github: 'https://github.com/AgusBaez',
    demo: 'https://www.linkedin.com/in/agus-baez/',
  },
  {
    id: 6,
    image: score_keeperIMG,
    title: 'Player Vs. Player Scoreboard',
    github: 'https://github.com/AgusBaez',
    demo: 'https://www.linkedin.com/in/agus-baez/',
  },
  {
    id: 7,
    image: poke_domIMG,
    title: 'A list of Pokemons',
    github: 'https://github.com/AgusBaez',
    demo: 'https://www.linkedin.com/in/agus-baez/',
  },
];

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article  key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target={'_blank'} >GitHub Proyect</a>
                  <a href={demo} className='btn btn-primary' target={'_blank'} >Live Demo</a>
                </div>
              </div>
            </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio