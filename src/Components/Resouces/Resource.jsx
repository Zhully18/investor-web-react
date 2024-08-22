import React from 'react'
import coin from '../../assets/piless.png'
import { resource } from '../data'
import './Resources.css'

const Resource = () => {
  return (
    <div>
         <div className="resource" id='resource'>
          <div className="left_resource">
              <img src={coin} alt="resource_img" />
          </div>
          <div className="right_resource">
            <h2 className='right_header'>Resources for Investors</h2>
            {resource.map(({title, desc}) => {
                return (
                    <div className="right_container">
                        <div className="right">
                            <h2>{title} </h2>
                            <p>{desc} </p>
                        </div>
                    </div>
                )
            })}
            <button>Access All Resources</button>
          </div>
        </div>
    </div>
  )
}

export default Resource