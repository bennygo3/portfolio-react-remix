import React, { useState } from 'react';
import './AboutMe.css';
import PageOne from './AboutMeComp/PageOne.js';
import PageTwo from './AboutMeComp/PageTwo.js';
import PageThree from './AboutMeComp/PageThree.js';
import PageFour from './AboutMeComp/PageFour.js';
import Misc from '../Misc/Misc.js';

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
                return <PageOne />
            case 1:
                return <PageTwo />
            case 2:
                return <PageThree />
            case 3:
                return <PageFour />
            case 4:
                return <Misc className="aboutMeMisc" />
            default:
                return <></>
        }
    };

    return (
        <main className="aboutMeBody">
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
            <div className='aboutMeButtons'>
                <button className='leftPageArrow' onClick={goToPreviousSpread}>&#x2190;Page</button>
                <button className='rightPageArrow' onClick={goToNextSpread}>Page&#x2192;</button>
            </div>
        </main>

    );
};

export default StackedPages;
