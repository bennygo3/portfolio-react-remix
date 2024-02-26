import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import StackedPages from '../../funFactory/MagazineComp/StackedPages';
import RepeatChar from '../../funFactory/repeatComponent';
import './Home.css';
import setBodyColor from '../background';


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
       
            <div className='background'>
                <div className='links'>

                    <div className='about'>
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
                            <StackedPages />

                                <button onClick={closeModal}>X</button>
                                
                            {/* repeatchar component was a challenge to myself to come up with a different way to display repeating elements */}
                            <RepeatChar id="repStars" character="*" count={10} />
                        </Modal>
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

