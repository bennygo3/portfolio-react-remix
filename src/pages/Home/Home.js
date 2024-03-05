import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Home.css';
import setBodyColor from '../background';


Modal.setAppElement('#root');

const Home = () => {


    setBodyColor({ color: "#c7bd9c" });

    return (
       
            <div className='background'>
                <div className='links'>
                    <div className='about'>
                        <Link to='/aboutme'>-About Me</Link>
                        <span className="star">*</span>
                    </div>
                    <div className='port'>
                        <Link to='/portfolio'>-Portfolio</Link>
                        <span className="star">*</span>
                    </div>
                    <div className='resume'>
                        <Link to='/resume'>-Resume</Link>
                        <span className="star">*</span>
                    </div>
                    <div className='contact'>
                        <Link to='/contact'>-Contact</Link>
                        <span className="star">*</span>
                    </div>
                    <div className='misc'>
                        <Link to='/misc'>-Misc.</Link>
                        <span className="star">*</span>
                    </div>
                </div>

            </div>
        
    );
}

export default Home;

