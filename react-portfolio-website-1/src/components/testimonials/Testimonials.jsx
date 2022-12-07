import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/profile-pic3.png'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Name Person',
    review: 'Description about my work or me'
  },
  {
    avatar: AVTR1,
    name: 'Name2 Person2',
    review: 'Description2 about my work or me'
  },
];

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from people</h5>
      <h2>Testimonials</h2>
      <Swiper className="container container__testimonials"       modules={[Pagination, Navigation]}
      spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials