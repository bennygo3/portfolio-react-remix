import React from 'react';
import youngMe from '../../../assets/youngCowboyMe.jpg'

const PageTwo = () => {
    return (
        <div className='aboutMePgTwo'>
            <header>
                <h1 className='pgTwoHeader'>Chapter 1</h1>
            </header>
            <div className='horizontalLine'></div>
            <p className='aboutMePgTwoFirstP'>
                <img className='youngBe' src={youngMe} alt='Me when I was a child, dressed as a cowboy'></img>
                Hello! My name is Ben Gomez, and I am a Software         Engineer. I was born and raised in Phoenix, Arizona, but now I call Austin, Texas my home.


            </p>
            <p className='aboutMePgTwoSecondP'>
                Shortly after moving to Austin in 2012, I started working at the Fazio Canyons Golf Course at Barton Creek.
                This job provided me with much more than just a paycheck. It was an opportunity to meet and interact with
                members from diverse backgrounds.
            </p>
            <p className='aboutMePgTwoThirdP'>
                One memorable morning, I was chatting with a member about my enrollment in paramedic school, and he shared insights into his company's development of technology used by  911 call centers. This conversation not only piqued my curiosity about innovative software solutions but also underscored how integral and sometimes overlooked software is in shaping our everyday world.
            </p>

        </div>
    );
};

export default PageTwo;