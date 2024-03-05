import React from "react";
import gCanyon from '../../../assets/gcDrawing.jpg'

const PageOne = () => {
    return (
      <div className='aboutMePgOne'>
        <div>Benjamin A. Gomez</div>
        <div>
          <img className='gCanyon' src={gCanyon} alt='drawing of the grand canyon' />
        </div>
      </div>
    );
};
  
export default PageOne;