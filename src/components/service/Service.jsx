import React from 'react'
import './service.css'
import {TiInputChecked} from 'react-icons/ti'
import {FiAlertOctagon} from 'react-icons/fi'
function Service() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <TiInputChecked className='service__list-icon'/>
              <p>Structure of website</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon'/>
              <p>Functions/Functionality of Web Site</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon'/>
              <p>Styles of Web Site</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon'/>
              <p>Server-side functionality</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon'/>
              <p>Database of Web Site</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon'/>
              <p>Deployment the Web Site</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV*/}
        <article className="service">
          <div className="service__head">
            <h3>APIs</h3>
          </div>
          <ul className='service__list'>
            <li>
              <TiInputChecked className='service__list-icon'/>
              <p>Types of services with client/server functionality</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon' />
              <p>Middleware/Intermediate functionality</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon' />
              <p>User Management and Authentication</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon' />
            <p>Database Service</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon' />
            <p>Basic Testing</p>
            </li>
            <li>
            <TiInputChecked className='service__list-icon' />
            <p>Documentation whit Swagger or PostMan</p>
            </li>
            <li>
              <TiInputChecked className='service__list-icon' />
              <p>Deployment the API Project</p>
            </li>
          </ul>
        </article>    
        {/* END OF API */}
        <article className="service">
          <div className="service__head">
            <h3>Amazon Web Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FiAlertOctagon className='service__list-icon'/>
              <p>Coming soon in a future. . .</p>
            </li>
            <li>
              <FiAlertOctagon className='service__list-icon'/>
              <p>Amazon EC2</p>
            </li>
            <li>
              <FiAlertOctagon className='service__list-icon'/>
              <p>Amazon RDS</p>
            </li>
            <li>
              <FiAlertOctagon className='service__list-icon'/>
              <p>Amazon S3</p>
            </li>
            <li>
              <FiAlertOctagon className='service__list-icon'/>
              <p>Amazon Lambda</p>
            </li>
            <li>
              <FiAlertOctagon className='service__list-icon'/>
              <p>. . . And more coming soon</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service