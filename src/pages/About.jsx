import React from 'react'
import './Pages.css'
import { motion, useScroll } from 'motion/react'

const About = () => {
    const wordsVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
    }

    const imageVariantsRight = {
        hidden: {opacity: 0, x: 10},
        visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
    }

    const imageVariantsLeft = {
        hidden: {opacity: 0, x: 10},
        visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
    }

    return (
        <div className="about-container">
            <div className="about-section" id="start">
                <h1>Here's my crochet journey...</h1>
            </div>
            <div className="about-section" id="inciting">
                <motion.div     className="words"
                                variants={wordsVariants} initial="hidden" whileInView="visible">
                    <h1>The Inciting Incident</h1>
                    <p>In 2013, I learned how to crochet using a crocheting kit from a bookstore. I've always loved arts and crafts, and I was excited to try a new medium.</p>
                </motion.div>
                <motion.img     className="image"
                                variants={imageVariantsRight} initial="hidden" whileInView="visible"
                                src="src/resources/crochet_art.jpg" 
                                alt="(image error)"/>
            </div>
            <div className="about-section" id="training">
                <motion.img     className="image"
                                variants={imageVariantsLeft} initial="hidden" whileInView="visible"
                                src="src/resources/ms-cloud.jpg" alt="(image error)" />
                <motion.div     className="words"
                                variants={wordsVariants} initial="hidden" whileInView="visible">
                    <h1>Training Arc</h1>
                    <p>I continued this hobby by making crochet appliqués, which were small, flat, decorative pieces. These small projects helped me practice various stitches and familiarize myself with the world of crochet.</p>
                </motion.div>
            </div>
            <div className="about-section" id="friends">
                <motion.div     className="words"
                                variants={wordsVariants} initial="hidden" whileInView="visible">
                    <h1>New Friends</h1>
                    <p>I eventually discovered the world of amigurumi, a Japanese art meaning "crocheted or knitted stuffed toy". With a package of stuffing and some safety eyes, I made many little friends for myself, my family, and my friends.</p>
                </motion.div>
                <motion.img     className="image"
                                variants={imageVariantsRight} initial="hidden" whileInView="visible"
                                src="src/resources/ms-cloud.jpg" alt="(image error)" />
            </div>
            <div className="about-section" id="wares">
                <motion.img     className="image"
                                variants={imageVariantsLeft} initial="hidden" whileInView="visible"
                                src="src/resources/ms-cloud.jpg" alt="(image error)" />
                <motion.div     className="words"
                                variants={wordsVariants} initial="hidden" whileInView="visible">
                    <h1>Wares</h1>
                    <p>In 2024, I tested the waters of making more "practical" items, like coasters and pouches. I vended with these at a local craft fair. I also made animal-themed cup sleeves.</p>
                </motion.div>
            </div>
            <div className="about-section" id="forth">
                <motion.div     className="words"
                                variants={wordsVariants} initial="hidden" whileInView="visible">
                    <h1>And so on and so forth</h1>
                    <p>Today, I find crocheting to be a hobby I keep coming back to, no matter how long it's been since I picked up a crochet hook.</p>
                </motion.div>
                <motion.img     className="image"
                                variants={imageVariantsRight} initial="hidden" whileInView="visible"
                                src="src/resources/ms-cloud.jpg" alt="(image error)" />
            </div>
        </div>
    )
}

export default About