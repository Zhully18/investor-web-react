import React from 'react'
import './About.css'
import img from '../../assets/about.jpg'
import { about_list } from '../data'

const About = () => {
  return (
    <div>
        <div className="about" id='about'>
          <div className="left_about">
              <img src={img} alt="about_img" />
          </div>
          <div className="right_about">
            <h2 className='right_header'> About Us</h2>
            <p>At Investo, we are committed to guiding you through the complex world 
              of investing with confidence and clarity. With over 16 years of experience in the
               financial industry, our team of experts is dedicated to crafting investment strategies 
               that align with your unique financial goals.</p>
            {about_list.map(({icon, title}) => {
                return (
                    <div className="list_container">
                        <div className="list">
                            <h2 className="icon">{icon} </h2>
                            <p>{title} </p>
                        </div>
                    </div>
                )
            })}
            <button>Book A Call</button>
          </div>
        </div>
    </div>
  )
}

export default About