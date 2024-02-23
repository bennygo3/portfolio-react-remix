import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
    const navigate = useNavigate();
    return (
        <button className ="portfolioHomeButton" onClick={() => navigate('/')}>Home</button>
    );
};

export default HomeButton;
