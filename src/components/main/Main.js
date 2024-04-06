import React from 'react'
import { FaApple } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import  iphone from '../images/hero_endframe__cvklg0xk3w6e_large 2.png'
import title from '../images/Rectangle 17.png'
import phone from '../images/Category-CellPhone.svg'
import comp from '../images/Category-Computer.png'
import watch from '../images/Category-SmartWatch.svg'
import camera from '../images/Category-Camera.png'
import headphone from '../images/Category-Headphone.png'
import joystik from '../images/Category-Gamepad.png'
import prod1 from '../images/prod1.png'
import prod2 from '../images/prod2.png'
import prod3 from '../images/prod3.png'
import prod4 from '../images/prod7.png'
import prod5 from '../images/prod4.png'
import prod6 from '../images/prod5.png'
import prod7 from '../images/prod6.png'
import prod8 from '../images/prod7.png'
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import './Main.css'
function Main() {
    const data = [
        {
            id : 1 , 
            img : phone ,
            title : 'phones'
        },
        {
            id : 2 , 
            img : comp ,
            title : 'Computers'
        },
        {
            id : 3 , 
            img : watch ,
            title : 'SmartWatch'
        },
        {
            id : 4 , 
            img : camera ,
            title : 'Camera'
        },
        {
            id : 5 , 
            img : headphone ,
            title : 'Headphones'
        },
        {
            id : 6 , 
            img : joystik ,
            title : 'Gaming'
        }
    ]

    let card = data?.map((el) => 
    <div key={el.id} className='card'>
    <img src={el.img} alt="" />
    <p>{el.title}</p>
    </div>)

const productData = [
    {
        id:1 ,
        img: prod1 ,
        title : 'Breed Dry Dog Food'
    },
    {
        id:2 ,
        img: prod2 ,
        title : 'CANON EOS DSLR Camera'
    },
    {
        id:3 ,
        img: prod3 ,
        title : 'ASUS FHD Gaming Laptop'
    },
    {
        id:4 ,
        img: prod4 ,
        title : 'Curology Product Set '
    },
    {
        id:5 ,
        img: prod5 ,
        title : 'Kids Electric Car'
    },
    {
        id:6 ,
        img: prod6 ,
        title : 'Jr. Zoom Soccer Cleats'
    },
    {
        id:7 ,
        img: prod7 ,
        title : 'GP11 Shooter USB Gamepad'
    },
    {
        id:8 ,
        img: prod8 ,
        title : 'Quilted Satin Jacket'
    }
]

    let productCard = productData?.map((el) => 
        <div key={el.id} className="product-card">
        <div className="df">
        <img src={el.img} alt="" />
           <span className='product-wish'>
               <CiHeart className='eye'/>
               <FaEye className='eye'/>
           </span>
        </div>
        <p>{el.title}</p>
       </div>
    )
    
  return (
    <>
    <div className="container">
        <div className="hero">
            <div className="hero-left">
                <span>
                  <FaApple  className='ios'/>
                    <p>iPhone 14 Series</p>
                </span>
                <h1>Up to 10% off Voucher</h1>
                <span className='shop-now'>
                <li><a href="">Shop Now</a></li>
                <GoArrowRight className='arrow' />
                </span>
            </div>
            <div className="hero-right">
                <img src={iphone} alt="" />
            </div>
        </div>
        <div className="categories">
            <div className="categories-title">
                <img src={title} alt=""/>
                <p>Categories</p>
            </div>
                <h1>Browse By Category</h1>
            <div className="cards">
                  {card}
            </div>
        </div>
        <div className="products">
        <div className="categories-title">
                <img src={title} alt=""/>
                <p>Products</p>
            </div>
            <div className="products-cards">
               {productCard}
            </div>
        </div>
    </div>
    </>
  )
}

export default Main