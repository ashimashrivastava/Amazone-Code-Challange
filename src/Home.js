import { requirePropFactory } from '@material-ui/core';
import React from 'react'
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
           <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
           
                <div className="home__row">
                    {/* Product component */}
                    
                    <Product 
                        id="11075"
                        title="My Bottle glass bottle with silver cap and measurment with black washable cover"
                        price={15.99}
                        rating={4}
                        image="https://5.imimg.com/data5/LQ/CC/MY-14059082/gtg-silver-1-500x500.jpg"/>
                    
                    <Product 
                        id="11075"
                        title="Echo show 8"
                        price={79.99}
                        rating={5}
                        image="https://static.bhphoto.com/images/images2500x2500/amazon_b07pf1y28c_echo_show_8_charcoal_1573002388000_1512898.jpg"/>
                    

                </div>

                <div className="home__row">
                    {/* Product component */}
                    <Product 
                        id="211075"
                        title="Nike Precious Iii Basketball Shoes"
                        price={110.00}
                        rating={5}
                        image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9094123f-f624-4f32-9df8-9093bcc4c0ee/flyby-mid-basketball-shoe-Q2Gp58.jpg"/>
                    
                    <Product 
                        id="14895"
                        title="Leather Jacket For Men's Royal Lambskin Black Prod By Flamingo"
                        price={65.99}
                        rating={3}
                        image="https://content.woodlandworldwide.com/static/images/products/14355/main-ggjc04020661a-black-1.jpg"/>
                    
                    <Product 
                        id="3975"
                        title="Think Like a Monk: Train Your Mind for Peace and Purpose Every Day"
                        price={19.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg"/>
                    
                    {/* Product component */}
                    {/* Product component */}

                </div>

                <div className="home__row">
                    {/* Product component */}
                    <Product 
                        id="26805"
                        title="Fossil Gen 5 Julianna Stainless Steel Touchscreen Smartwatch with Speaker, Heart Rate, GPS, NFC, and Smartphone Notifications"
                        price={250.00}
                        rating={5}
                        image="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/415560-Product-0-I-637220460045700818_large.jpg"/>
                    
                    <Product 
                        id="97100"
                        title="Hamilton Beach 49976 FlexBrew Single-Serve and Full Pot Coffee Maker Compatible with K-Cup Pod and Grounds, Black"
                        price={15.99}
                        rating={4}
                        image="https://target.scene7.com/is/image/Target/GUEST_6c1de60d-5afe-49d7-815b-db285a304e06?wid=488&hei=488&fmt=pjpeg"/>
                    
                    {/* Product component */}
                    {/* Product component */}

                </div>  
           </div>
        </div>
    )
}

export default Home
