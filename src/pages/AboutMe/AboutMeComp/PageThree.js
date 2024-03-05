import React from 'react';

const PageThree = () => {
    return (
        <>
            <p className='aboutMePgThreeFirstP'>
                Another pivotal moment in my transition from EMS to software development occurred during my paramedic training.
                We were tasked with administering multiple medications at specific intervals, as needed. For instance, we had to give medication (m) after
                2 minutes of chest compressions if the cardiac rhythm displayed (x) rhythm, followed by another dose of medication (m) every 8 minutes if rhythm (x) persisted.
                If rhythm (y) was present, we would administer medication (z), followed by more chest compressions and another dose of medication (z) after 4 minutes.
                This process was complex and challenging, requiring us to remember a multitude of details while simultaneously keeping track of time.
                At some point in the middle of compressions, I had an idea that could help with keeping track of the timing: an application that notifies the crew during each critical
                interval, providing a reminder that a certain amount of time has passed.
            </p>
        </>
    )
};

export default PageThree;