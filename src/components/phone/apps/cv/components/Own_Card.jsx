import React from "react";





const OwnCard = ()=>(
    <div className="card">
        <p className='card_header_title'>Zebiri Mohamed Amine</p>
        <div className='card_img_wrapper'> 
            <img className='card_img ' src="https://scontent-pmo1-1.xx.fbcdn.net/v/t31.18172-1/p200x200/26220740_2188957071122337_270348859813787467_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=-RbGkkgFl_YAX9eVMQf&_nc_ht=scontent-pmo1-1.xx&tp=6&oh=cf70b309c13d05957619ed5f097cbd76&oe=60CBBF47" alt ="me"/>
        </div>
        <div className='card_badge_wrapper'>
            <div className='card_badge_space'>
                <p>Javascript</p>
                <img className="card_badge_icon" src="https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/gold-medal.png" alt="badge icon" />
            </div>
        </div>
        <p className='card_disc'>Fullstack Web Developer Based in ALGERIA with 3 years of experience in the Web industry.</p>
    </div>
)

export default OwnCard;