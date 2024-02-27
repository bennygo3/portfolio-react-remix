import React, { useState } from 'react';
import './StackedPages.css';
import youngMe from '../../assets/youngCowboyMe.jpg';
import gCanyon from '../../assets/gcDrawing.jpg';
import pease from '../../assets/peaseCap.jpg';
import Misc from '../../pages/Misc/Misc.js';

const StackedPages = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const totalPages = 5;

    const goToNextSpread = () => {
        setCurrentPageIndex((prevIndex) => {
            if (prevIndex >= totalPages - 2) {
                return 0;
            } else {
                return (prevIndex + 2) % totalPages;
            }
        }) 
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
                    <div>
                        <img className='gCanyon' src={gCanyon} alt='drawing of the grand canyon' />
                    </div>
                </div>;
            case 1:
                return <div className='aboutMePgTwo'>
                    <header>
                        <h1 className='pgTwoHeader'>Chapter 1</h1>
                    </header>
                    <div className='horizontalLine'></div>
                    <div className='aboutMePgTwoFirstP'>
                        <img className='youngBe' src={youngMe} alt='Me when I was a child, dressed as a cowboy'></img>
                        <p>Hello! <br></br>
                            My name is Ben Gomez, and I am a Software Engineer.
                            I was born and raised in Phoenix, Arizona, but now I
                            call Austin, Texas my home
                            <span className='capContainer'>
                                <img className='capBuilding' src={pease} alt='Capitol building, Austin, Texas. Viewed from Pease Park'></img>
                            </span>
                            .
                        </p>

                    </div>
                    <p className='aboutMePgTwoSecondP'>
                        Shortly after moving to Austin in 2012, I started working at the Fazio Canyons Golf Course at Barton Creek.
                        One morning, I was chatting with a member about going to school to become a paramedic, and he mentioned
                        that his company developed some of the technology used by 911 call centers. I remember being
                        perpexled that folks had figured out a way to come up with a solution for that need. My curiosity was piqued!
                    </p>

                </div>;
            case 2:
                return <>
                    <p className='aboutMePgThreeFirstP'>
                        Another pivotal moment in my transition from EMS to software development occurred during my paramedic training.
                        We were tasked with administering multiple medications at specific intervals, as needed. For instance, we had to give medication (m) after
                        2 minutes of chest compressions if the cardiac rhythm displayed (x) rhythm, followed by another dose of medication (m) every 8 minutes if rhythm (x) persisted.
                        If rhythm (y) was present, we would administer medication (z), followed by more chest compressions and another dose of medication (z) after 4 minutes.
                        This process was complex and challenging, requiring us to remember a multitude of details while simultaneously keeping track of time. 
                        At some point in the middle of compressions, I had an idea that could help with keeping track of the timing: an application that notifies the crew during each critical 
                        interval, providing a reminder that a certain amount of time has passed. 
                    </p>
                </>;
            case 3:
                return <>
                    <Misc className="aboutMeMisc"/>
                    </>;
            default:
                return <div>TBD Content</div>;
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
