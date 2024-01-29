import React from 'react';

function RepeatChar(props) {
    const elements = [];

    for (let i = 0; i < props.count; i++) {
        elements.push(<span key={i}>{props.character}</span>)
    }

    return <div className='repStars'>{elements}</div>;
}

export default RepeatChar;