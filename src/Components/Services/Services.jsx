import React from 'react'
import { services } from '../data'
import './Services.css'

const Services = () => {
  return (
    <div>
        <div className="services" id='services'>
            <h2 className="service_header">Our Services</h2>
            <p className="text">Tailored Investment Solutions to Meet Your Needs</p>
            <div className="service_container">
                {services.map(({icon, head, desc}) => {
                    return (
                        <div className="service_list">
                            <div className="service_icon">
                                <h2 className="icon">{icon}</h2>
                            </div>
                            <h2>{head} </h2>
                            <p>{desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Services