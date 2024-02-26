import React, { useState } from 'react';
import './StackedPages.css';
import youngMe from '../../assets/youngCowboyMe.jpg';
import gCanyon from '../../assets/gcDrawing.jpg';
import pease from '../../assets/peaseCap.jpg';
import Misc from '../../pages/Misc/Misc.js';

const StackedPages = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const totalPages = 4;

    const goToNextSpread = () => {
        setCurrentPageIndex((prevIndex) => (prevIndex + 2) % totalPages);
    };

    const goToPreviousSpread = () => {
        setCurrentPageIndex((prevIndex) => (prevIndex - 2 + totalPages) % totalPages);
    };

    const renderPageContent = (pageIndex) => {
        // Page content components
        switch (pageIndex) {
            case 0:
                return <div className='aboutMePgOne'>
                    <div>Benjamin A. Gomez</div>
                    <img className='gCanyon' src={gCanyon} alt='drawing of the grand canyon' />
                </div>
            case 1:
                return <div className='aboutMePgTwo'>
                    <header>
                        <h1 className='pgTwoHeader'>Chapter 1</h1>
                    </header>
                    <div className='horizontalLine'></div>
                    <div className='aboutMePgTwoParagraph'>
                        <img className='youngBe' src={youngMe} alt='Me when I was a child, dressed as a cowboy'></img>
                        <p>Hello! <br></br> 
                            My name is Ben Gomez, and I am a Software Engineer.
                            I was born and raised in Phoenix, Arizona, but now I 
                            call Austin, Texas
                            <span className='capContainer'>
                                <img className='capBuilding' src={pease} alt='Capitol building, Austin, Texas. Viewed from Pease Park'></img>
                            </span>
                            my home.
                        </p>
                        
                    </div>
                    <p>
                        Shortly after moving to Austin in 2012, I started working at the Fazio Canyons Golf Course at Barton Creek. 
                        I was chatting with a member about going to school to become a paramedic and he mentioned
                        that his company developed some of the technology used by 911 call centers. I remember being
                        impressed that folks had figured out a way to come up with a solution for that need.
                        I continued on with paramedic school and during a lesson that involved giving medications at certain intervals, 
                        I had an idea for an application that could help with keeping track of the timing for each medication. During another lesson we learned about the system Austin Travis County EMS uses
                    </p>
                </div>;
            case 3:
                return<><Misc /></>
            default:
                return <div>Default Content</div>;
        }
    };

    return (
        <>
            <h1 className='aboutMeHeader'>About Me</h1>
            <div className='stackedPagesContainer'>

                <div className='spread'>
                    <div className='leftPage'>
                        {renderPageContent(currentPageIndex)}
                    </div>
                    <div className='rightPage'>
                        {renderPageContent(currentPageIndex + 1)}
                    </div>

                </div>
                <div className='pageEdges'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className='pageEdge' />
                    ))}
                </div>
            </div>
            <button onClick={goToPreviousSpread}>&#x2190;</button>
            <button onClick={goToNextSpread}>&#x2192;</button>
        </>

    );
};

export default StackedPages;
