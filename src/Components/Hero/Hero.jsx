import React from 'react'
import './Hero.css'
import hand_icon from  '../Assets/arrow.jpg'
import hero_icon from '../Assets/hero2.jpg'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon}></img>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>

            </div>
            <div className="hero-latest-btn">
                <div>Latest Collections</div>
            </div>
        </div>
        <div className="hero-right">
            <img style={{borderRadius:"50px",paddingTop:"200px",height:"500px", width:"400px"}}  src={hero_icon} alt="" />

        </div>
    </div>
  )
}
