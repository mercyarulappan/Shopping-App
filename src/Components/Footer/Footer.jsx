import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/fashion.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquarePinterest } from "@fortawesome/free-brands-svg-icons";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <div className='footer'> 
    <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p className='p1'>FASHION SHOPPING <sub>own-sm</sub></p>
        
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icons">
        <div className="footer-icons-container">
                <a 
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
             <FontAwesomeIcon icon={faSquareInstagram} size="2x"   />
             </a>
        </div>
        <div className="footer-icons-container">
             <a
                href="https://wa.me/916360281800"  // replace with your number (country code + number)
                target="_blank"
                rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" />
            </a>
        </div>
        <div className="footer-icons-container">
            <FontAwesomeIcon icon={faSquarePinterest} size="2x" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright @mercy-2025 - All rights reserved</p>
    </div>
    </div>
  )
}
