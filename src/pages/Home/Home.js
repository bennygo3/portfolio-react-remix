import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import RepeatChar from '../../funFactory/repeatComponent';
import './Home.css';
import setBodyColor from '../background';
import newspaper from '../../assets/BenNewestNews.png';

Modal.setAppElement('#root');

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    setBodyColor({ color: "#c7bd9c" });

    return (
        <>
            <div className='background'>
                <div className='links'>

                    <div id='about'>
                        <button onClick={openModal}>-About Me</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="About Me Modal"
                            style={{
                                content: {
                                    border: '5px double black',
                                },
                            }}
                        >
                            <div id="aboutMeHeader">
                                <h2>About Me</h2>

                                <button onClick={closeModal}>X</button>
                                <img src={newspaper} id="newsModal" alt="information about me pop up"></img>

                            </div>
                            {/* repeatchar component was a challenge to myself. come up with a different way to display repeating elements */}
                            <RepeatChar id="repStars" character="*" count={10} />
                        </Modal>
                        <span id="star">*</span>

                    </div>
                    <div id='port'>
                        <Link to='/portfolio'>-Portfolio</Link>
                        <span id="star">*</span>
                    </div>
                    <div id='resume'>
                        <Link to='/resume'>-Resume</Link>
                        <span id="star">*</span>
                    </div>
                    <div id='contact'>
                        <Link to='/contact'>-Contact</Link>
                        <span id="star">*</span>
                    </div>
                    <div id='misc'>
                        <Link to='/misc'>-Misc.</Link>
                        <span id="star">*</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;

