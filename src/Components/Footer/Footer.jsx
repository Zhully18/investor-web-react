import React from 'react'
import './Footer.css'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_top">
            <h2>Ready To Get Started ?</h2>
            <p>Join our community of Investors</p>
            <div className="input">
              <input type="email" name="email" id="" placeholder='Enter your Email'/>
              <button>Join Now</button>
            </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <div className="footer_left">
            <h2>Investo</h2>
            <div className="socials">
              <FaFacebook  className='social_icon' />
              <BsInstagram className='social_icon'  />
              <BsYoutube   className='social_icon' />
            </div>
          </div>
          <div className="footer_right">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        <p className="copy">© 2024 Investo. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer