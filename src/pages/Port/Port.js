import React, { useState } from 'react';
import { useSwipeable } from "react-swipeable";


import Poke from "../../assets/PokeWeather.png";
import Decked from "../../assets/Decked.png";
import Weather from "../../assets/WhereToWeather.png";
import SQL from "../../assets/SQL.png";
import OOP from "../../assets/OOP.png";
import ORM from "../../assets/ORM.png";
import ReadMe from "../../assets/ReadMe.png";
import HardCoded from "../../assets/HardCoded.png";
import PortSamp from '../../assets/portfolioSample.png';

import './Port.css';

const PortItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Port = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (

        <div
            {...handlers}
            className="carousel"
        >

            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

            <div className="indicators">
                <button className="leftButton"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    <span className="leftArrow">&#9756;</span>

                </button>

                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                            {index + 1}
                        </button>
                    );
                })}
                
                <button className="rightButton"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <span className="rightArrow">&#9758;</span>

                </button>

            </div>

        </div>

    );
}

const Portfolio = () => {
    return (
        <div className="bckg">

            <Port>

                <PortItem>
                    <div className="group">
                        <h1 className="title">Decked-Out </h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://decked--out.herokuapp.com/" rel="noreferrer" target={"_blank"}>
                            <img src={Decked} alt="snapshot of Decked Out application"></img>
                        </a>
                    </div>
                </PortItem>

                <PortItem>
                    <div className="group">
                        <h1 className="title">PokeWeather</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://ribbonanarchy.github.io/PokemonVsNature/" rel="noreferrer" target={"_blank"}>
                            <img src={Poke} alt="snapshot of Pokemon Weather application"></img>
                        </a>
                    </div>
                </PortItem>

                <PortItem>
                    <div className='group'>
                        <h1 className="title">ORMeCommerce</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://github.com/bennygo3/ORMeCommerce" rel="noreferrer" target={"_blank"}>
                            <img src={ORM} alt="screenshot of an O R M application"></img>
                        </a>
                    </div>
                </PortItem>
                
                <PortItem>
                    <div className='group'>
                        <h1 className="title">WhereToWeather</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://bennygo3.github.io/WhereToWeather/" rel="noreferrer" target={"_blank"}>
                            <img src={Weather} alt="screenshot of Where To Weather application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">SQLisDataBased</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://github.com/bennygo3/SQLisDataBased" rel="noreferrer" target={"_blank"}>
                            <img src={SQL} alt="screenshot of a My SQL database application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">O-O-P</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://github.com/bennygo3/Object-Oriented-Profile" rel="noreferrer" target={"_blank"}>
                            <img src={OOP} alt="screenshot of an O O P application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">ReadMe Generator</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://github.com/bennygo3/README-generated" rel="noreferrer" target={"_blank"}>
                            <img src={ReadMe} alt="screenshot of a command line Read Me generator application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">HardCoded</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://bennygo3.github.io/HardCoded/" rel="noreferrer" target={"_blank"}>
                            <img src={HardCoded} alt="screenshot of a code quiz application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">PortfolioIsREACTive</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="container" href="https://bennygo3.github.io/PortfolioIsREACTive/" rel="noreferrer" target={"_blank"}>
                            <img src={PortSamp} alt="screenshot of my first portfolio application"></img>
                        </a>
                    </div>
                </PortItem>

            </Port>
        </div >
    )
}

export default Portfolio;

// this is for automatic slideshow, removed from line 26 and 37
// const [paused, setPaused] = useState(false)
//  useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (!paused) {
    //             updateIndex(activeIndex + 1);
    //         }
    //         // updateIndex(activeIndex + 1); this is for without the auto slide
    //     }, 2000);

    //     return () => {
    //         if (interval) {
    //             clearInterval(interval)
    //         }
    //     }


    // })

    //removed from line 48, has to do with auto slideshow
     // onMouseEnter={() => setPaused(true)}
     // onMouseLeave={() => setPaused(false)}



