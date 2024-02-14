import React, { useState } from 'react';
import './StackedPages.css';
import youngMe from '../../assets/youngCowboyMe.jpg';
import gCanyon from '../../assets/gcDrawing.jpg';
import pease from '../../assets/peaseCap.jpg';

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
                return <div>
                    <div className='aboutMePgOne'>Benjamin A. Gomez</div>
                    <img className='gCanyon' src={gCanyon} alt='drawing of the grand canyon' />
                </div>
            case 1:
                return <div className='aboutMePgTwo'>
                    <header className='pgTwoHeader'>
                        <h1>Chapter &#x2776;</h1>
                    </header>
                    <div className="horizontalLine"></div>
                    <p>Hello! <br></br> My name is Ben Gomez. I am a Software Engineer.<br></br> 
                        I was born and raised in Phoenix, Arizona. <br></br>I am
                        currently residing in Austin, Texas 
                        <span className='capContainer'>
                        <img className='capBuilding' src={pease} alt='Capitol building, Austin, Texas. Viewed from Pease Park'></img>
                        </span>
                         .
                    </p>
                </div>;
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
