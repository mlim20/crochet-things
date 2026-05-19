import React from 'react'
import './Pages.css'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <div className="home-container">
            <Carousel />
            <h1 className="page-title">Welcome!</h1>
            <div id="home-options">
                <div className="option">
                    <p>About</p>
                </div>
                <div className="option">
                    <p>Materials</p>
                </div>
                <div className="option">
                    <p>Gallery</p>
                </div>
            </div>
        </div>
    )
}

export default Home