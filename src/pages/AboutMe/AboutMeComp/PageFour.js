import React from 'react';
import medic from '../../../assets/medicBen.jpg';

const PageFour = () => {
    return (
        <>
            <figure className="medicFigure">
                <img className='medic' src={medic} alt='putting on personal protective equipment'></img>
                <figcaption>Transitioning from tackling bed bugs in emergency medicine to debugging in software development. </figcaption>
            </figure>
        </>
    )
}

export default PageFour;