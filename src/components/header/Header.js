import React from 'react'
import './Header.css'
import { IoIosSearch } from "react-icons/io";

function Header() {
    const navLink = ["Home" , "Contact" , "About" , "sign In"]
    let links =  navLink.map((value , inx)=>{
        return <li key={inx}><a href="">{value}</a></li>
    })
    return (
    <>
       <div className="head-top">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - <b> OFF 50%!</b></p>
        </div> 
        <header>
        <div className="container">
            <div className="navbar">
                <div className="nav-logo">
                    <h1>Exclusive</h1>
                </div>
                <div className="nav-link">
                    <ul>
                        { links }
                    </ul>
                </div>
                <div className="nav-input">
                    <form action="">
                    <input type="text" placeholder='What are you looking for?' />
                        <IoIosSearch  className='search'/>
                    </form>
                </div>
            </div>
        </div>
        </header>
    </>
  )
}

export default Header