import React from 'react'
import './Pages.css'

const About = () => {
    return (
        <div className="about-container">
            {/* TODO: Add images */}
            <div className="about-section" id="inciting">
                <h1>The Inciting Incident</h1>
                <p>In 2013, I learned how to crochet using a crocheting kit from a bookstore. I've always loved arts and crafts, and I was excited to try a new medium.</p>
                <img className="about-image" src="src/resources/crochet_art.jpg" alt="(image error)"></img>
            </div>
            <div className="about-section" id="training">
                <h1>Training Arc</h1>
                <p>I continued this hobby by making crochet appliqués, which were small, flat, decorative pieces. These small projects helped me practice various stitches and familiarize myself with the world of crochet.</p>
            </div>
            <div className="about-section" id="friends">
                <h1>New Friends</h1>
                <p>I eventually discovered the world of amigurumi, a Japanese art meaning "crocheted or knitted stuffed toy". With a package of stuffing and some safety eyes, I made many little friends for myself, my family, and my friends.</p>
            </div>
            <div className="about-section" id="wares">
                <h1>Wares</h1>
                <p>In 2024, I tested the waters of making more "practical" items, like coasters and pouches. I vended with these at a local craft fair. I also made animal-themed cup sleeves.</p>
            </div>
            <div className="about-section" id="forth">
                <h1>And so on and so forth</h1>
                <p>Today, I find crocheting to be a hobby I keep coming back to, no matter how long it's been since I picked up a crochet hook.</p>
            </div>
        </div>
    )
}

export default About