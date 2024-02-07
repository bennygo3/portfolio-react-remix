import React, { useState } from 'react';
import './StackedPages.css';

const StackedPages = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const totalPages = 6;

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
                return <div>Page 1 Content</div>;
            case 1:
                return <div>Page 2 Content</div>;
            default:
                return <div>Default Content</div>;
        }
    };

    return (
        <div className='stackedPagesContainer'>
            <div className='spread'>
                <div className='leftPage'>
                    {renderPageContent(currentPageIndex)}
                </div>
                <div className='rightPage'>
                    {renderPageContent(currentPageIndex +1)}
                </div>

            </div>
            <div className='pageEdges'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className='pageEdge' />
                ))}
            </div>
            <button onClick={goToPreviousSpread}>&#x2190;</button>
            <button onClick={goToNextSpread}>&#x2192;</button>
        </div>
    );
};

export default StackedPages;

// <div className='stackedPagesContainer'>
 //<div className='stackedPages'> 
   // {Array.from({ length: totalPages }, (_,i) => (
        //<div key={i} className={`page ${i === currentPage ? 'active' : ''}`}>
            //{renderPageContent(i)}
       // </div>
   // ))}
//</div>
//<button onClick={goToPreviousPage}>&#x2190;</button>
//<button onClick={goToNextPage}>&#x2192;</button>
//</div> 