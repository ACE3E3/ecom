import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
           <div className="home_container">
            <img 
            className="home_image"
            src={process.env.PUBLIC_URL + './banner1.jpg'}
            alt="" />
           <div className="home_row">
                <Product 
                id="12321341"
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                price={29.99} 
                image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg'
                rating={5} 
                />
                <Product id="49538094"
                title='KitchenAid KHM512IC 5-Speed Ultra Power Hand Mixer, Ice Blue'
                price={15.99} 
                image='https://m.media-amazon.com/images/I/71aaIXqPdfL._AC_UY218_.jpg'
                rating={4}
                />
           </div>
           <div className="home_row">
                <Product
                id="4903850"
                title='EVGA GeForce GTX 1080 Ti SC Black Edition Gaming, 11GB GDDR5X, iCX Cooler & LED, Optimized Airflow Design, Interlaced Pin Fin Graphics Card 11G-P4-6393-KR'
                price={1200.00} 
                image='https://m.media-amazon.com/images/I/71WBvOZbLJL._AC_UY218_.jpg'
                rating={4} 
                />
                <Product
                id="23445930"
                title='SteelSeries Rival 95 Optical Gaming Mouse - Black/PC Bang Premium Edition, Non LED Ver. of Rival 100'
                price={18.20} 
                image='https://m.media-amazon.com/images/I/51R-dIxk2lL._AC_UY218_.jpg'
                rating={3} 
                />
                <Product 
                id="3254354345"
                title='Cooler Master Cosmos C700P Black Edition E-ATX Full-Tower with Curved Tempered Glass Panel, Flexible Interior Layout, Type-C Port & RGB Lighting Control'
                price={337.83} 
                image='https://m.media-amazon.com/images/I/81hXVEab62L._AC_UY218_.jpg'
                rating={5}
                />
           </div>
           <div className="home_row">
                <Product 
                id="90829332"
                title='SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model'
                price={1892.61} 
                image='https://m.media-amazon.com/images/I/81r8JazRcoL._AC_UY218_.jpg'
                rating={5}
                />
           </div>
           </div>
        </div>
    )
}

export default Home
