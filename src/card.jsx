import React from 'react'
import logo from './images/illustration-hero.svg'
import Music from './images/icon-music.svg'
import './card.css'
const Card = () => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <img src={logo} alt="" className="logo" />
                    <div className="mainContent">
                        <h1 className="heading">
                            Order Summary
                        </h1>
                        <p className="para">
                            You can now listen to millions of songs,audiobooks and podcasts on any device anywhere you like!
                        </p>
                        <div className="annualplanbox">
                            <img src={Music} alt="" className="music" />
                            <div className="musicHeading">
                                <h2>Annual Plan</h2>
                            </div>
                            <a href="blank" className='change'>Change</a>
                        </div>
                        <div className="price">$59.99/year</div>
                        <button className="btn">
                            Proceed to Payment
                        </button>
                        <button className="btn1">Cancel order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card