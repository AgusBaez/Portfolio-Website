import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Node JS</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Express JS</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Nest JS</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Moongose</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>MySQL</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>Sequelize</h4>
              <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>PHP</h4>
              <small className='text-ligth'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>Testing(Mocha + Chai)</h4>
              <small className='text-ligth'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>Swagger</h4>
              <small className='text-ligth'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>PostMan</h4>
              <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF BACKEND */}

        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>React</h4>
                <small className='text-ligth'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience