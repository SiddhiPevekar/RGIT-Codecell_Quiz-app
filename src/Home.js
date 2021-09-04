import React from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Quiz from './images/Quiz.svg'

const Home = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-section-content">
                    <h1>RGIT CODECELL</h1>
                    <h3>Brings to you an Online Quiz Portal</h3>
                    <hr/>
                    <p>That will challenge your current Technical skill and enable you to upskill yourself and learn</p>
                    <button className="btn btn-primary btn1">Explore RGIT Codecell</button>
                    <button className="btn btn-primary btn2">Start Quiz</button>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/company/rgit-codecell/"className="social_media">
                            < FaLinkedinIn />
                        </a>
                        {/* <a href="https://www.youtube.com/c/jamesqquick"className="social_media">
                            < FaTwitter />
                        </a> */}
                        <a href="https://www.instagram.com/rgitcodecell/?igshid=1e8ccxcj60guy"className="social_media">
                            < FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="hero-section-img">
                    <img src={Quiz} alt=" " />
                </div>
            </div>
        </>
    );
};

export default Home;