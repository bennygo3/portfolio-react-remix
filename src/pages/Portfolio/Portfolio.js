import React, { useState } from 'react';
import { useSwipeable } from "react-swipeable";
import HomeButton from '../../funFactory/Buttons/HomeButton';
import setBodyColor from '../background';
import Poke from "../../assets/PokeWeather.png";
import Decked from "../../assets/Decked.png";
import Weather from "../../assets/WhereToWeather.png";
import SQL from "../../assets/SQL.png";
import OOP from "../../assets/OOP.png";
import ORM from "../../assets/ORM.png";
import ReadMe from "../../assets/ReadMe.png";
import HardCoded from "../../assets/HardCoded.png";
import PortSamp from '../../assets/portfolioSample.png';

import './Portfolio.css';

// dynamic rendering for react-swipeable
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
            <header className="header">
                <h1>Portfolio:</h1>
            </header>

            {/* fixed borders */}
            <div id="left"></div>
            <div id="right"></div>
            <div id="top"></div>
            <div id="bottom"></div>

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
                <HomeButton className="portfolioHomeButton" />
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
    setBodyColor({ color: "rgb(212, 176, 112" });
    return (

        <div className="bckg">

            <h1 className="title"> </h1>

            <Port>

                <PortItem>

                    <div className="group">
                        <h1 className="title">Decked-Out </h1>
                        <p className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </p>


                        <a className="portContainer" href="https://decked--out.herokuapp.com/" rel="noreferrer" target={"_blank"}>
                            <img src={Decked} alt="snapshot of Decked Out application"></img>
                        </a>
                    </div>


                </PortItem>

                <PortItem>
                    <div className="group">
                        <h1 className="title">PokeWeather</h1>
                        <p className="info">
                            A weather application using multiple server-side API requestes. Pokémon suggestions are offered based on current weather conditions in a chosen location.
                        </p>
                        <a className="portContainer" href="https://ribbonanarchy.github.io/PokemonVsNature/" rel="noreferrer" target={"_blank"}>
                            <img src={Poke} alt="snapshot of Pokemon Weather application"></img>
                        </a>
                    </div>
                </PortItem>

                <PortItem>
                    <div className='group'>
                        <h1 className="title">ORMeCommerce</h1>
                        <p className="info">
                            A project focused on the back end for an e-commerce website that utilizes Express.js and Sequelize to interact with a MySQL database.
                        </p>
                        <a className="portContainer" href="https://github.com/bennygo3/ORMeCommerce" rel="noreferrer" target={"_blank"}>
                            <img src={ORM} alt="screenshot of an O R M application"></img>
                        </a>
                    </div>
                </PortItem>

                <PortItem>
                    <div className='group'>
                        <h1 className="title">WhereToWeather</h1>
                        <p className="info">
                            A weather dashboard application featuring dynamically updated HTML and CSS. The OpenWeather API is used to generate real time and forecasted weather.
                        </p>
                        <a className="portContainer" href="https://bennygo3.github.io/WhereToWeather/" rel="noreferrer" target={"_blank"}>
                            <img src={Weather} alt="screenshot of Where To Weather application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">SQLisDataBased</h1>
                        <p className="info">
                            A command-line application that creates a database for a business to keep track of employee names,
                            job title, salary, department and manager.

                        </p>
                        <a className="portContainer" href="https://github.com/bennygo3/SQLisDataBased" rel="noreferrer" target={"_blank"}>
                            <img src={SQL} alt="screenshot of a My SQL database application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">O-O-P</h1>
                        <p className="info">
                            A command line application using Node.js that generates user input to an HTML webpage.
                        </p>
                        <a className="portContainer" href="https://github.com/bennygo3/Object-Oriented-Profile" rel="noreferrer" target={"_blank"}>
                            <img src={OOP} alt="screenshot of an O O P application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">ReadMe Generator</h1>
                        <p className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </p>
                        <a className="portContainer" href="https://github.com/bennygo3/README-generated" rel="noreferrer" target={"_blank"}>
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
                        <a className="portContainer" href="https://bennygo3.github.io/HardCoded/" rel="noreferrer" target={"_blank"}>
                            <img src={HardCoded} alt="screenshot of a code quiz application"></img>
                        </a>
                    </div>
                </PortItem>
                <PortItem>
                    <div className="group">
                        <h1 className="title">PortfolioIs REACTive</h1>
                        <div className="info">
                            A MERN stack project which allows users to create and save flashcards for studying and learning.
                        </div>
                        <a className="portContainer" href="https://bennygo3.github.io/PortfolioIsREACTive/" rel="noreferrer" target={"_blank"}>
                            <img src={PortSamp} alt="screenshot of my first portfolio application"></img>
                        </a>
                    </div>
                </PortItem>

            </Port>
        </div >

    )
}

export default Portfolio;