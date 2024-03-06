import React from 'react';

const PageThree = () => {
    return (
        <main>
            <p className='aboutMePgThreeFirstP'>
                Another moment that hinted at my eventual shift towards software development occurred during my paramedic training.
                We were practicing resuscitation on a mannequin, which involved administering various medications at precise intervals
                amidst ongoing chest compressions. For example, we needed to administer medication 'm' after 2 minutes of chest compressions
                if the cardiac rhythm was 'x', followed by another dose every 8 minutes if the rhythm persisted. If the rhythm changed to 'y',
                we switched to medication 'z', with additional doses every 4 minutes. Juggling these details while keeping track of time and dosages 
                was entirely challenging. It was during one of these practice sessions that I thought of a software application that could assist 
                in timing these critical interventions, providing alerts to the medical team at each crucial juncture.
            </p>
        </main>
    )
};

export default PageThree;