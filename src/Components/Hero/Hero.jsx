import React from 'react'
import './Hero.css'
import classroom from '../../assets/coin_up.jpg'

const Hero = () => {
  return (
    <div>
        <div className="hero">
          <div className="media_container">
            <div className="invest">
              <p>Growth Investing</p>
            </div>
            <div className="invest">
              <p>Income Investing</p>
            </div>
            <div className="invest">
              <p>Value Investing</p>
            </div>
            <div className="invest">
              <p>ESG Investing</p>
            </div>
          </div>
            <h1 className="hero_header">EMPOWER</h1>
            <img src={classroom} alt="hero-img" className='hero_img'/>
            <h1 className="hero_bottom_header">YOUR FINANCIAL FUTURE</h1>
            <h1 className='hero_txt'>ONE SMART INVESTMENT AT A TIME.</h1>
        </div>
    </div>
  )
}

export default Hero