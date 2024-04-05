import React from 'react'
import { FaApple } from "react-icons/fa6";
import './Main.css'
function Main() {
  return (
    <>
    <div className="container">
        <div className="hero">
            <div className="hero-left">
                <span>
                  <FaApple  className='ios'/>
                    <p>iPhone 14 Series</p>
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main