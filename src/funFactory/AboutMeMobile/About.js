import React , { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web'

import { useDrag } from 'react-use-gesture'
import lilCowboy from '../../assets/babyBenCowboyPlastic.png';
import remote from '../../assets/Remote.png';
import poster from '../../assets/Poster.png';

import styles from './styles.module.css';
import setBodyColor from '../../pages/background';

const cards = [
  `${lilCowboy}`,
  `${remote}`,
  `${poster}`,
];

    
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

    
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r: number, s: number ) => `perspective(1500px) rotateX(5deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
    
function Deck() {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) gone.add(index);
    
    api.start(i => {
      if (index !== i) 
      return
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });
          
    if (!down && gone.size === cards.length)
    setTimeout(() => { 
      gone.clear()
      api.start(i => to(i))
    }, 600);
  });
  setBodyColor({color: "#000000"});
  return (
    <>
          
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y, }} >
          <animated.div
             
            {...bind(i)}
            style={{
            transform: interpolate([rot, scale], trans),
            backgroundImage: `url(${cards[i]})`,
            }}
            
            
          />
          
        </animated.div>
            
      ))}
          
    </>
  )
};

    
export default function AboutMe() {
  
  return (
    <div className={styles.container}>
      <Deck /> 
    </div>
  )
};
    
    
    
// // These two are just helpers, they curate spring data, values that are later being interpolated into css
    // const go = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
    // const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
    // // This is being used down there in the view, it interpolates rotation and scale into a css transform
    // const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
    
    
    //   const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    //   const [props, set] = useSprings(cards.length, i => ({ ...go(i), from: from(i) })) // Create a bunch of springs using the helpers above
    //   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    //   const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    //     const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    //     const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    //     if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    //     set(i => {
    //       if (index !== i) return // We're only interested in changing spring-data for the current spring
    //       const isGone = gone.has(index)
    //       const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
    //       const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
    //       const scale = down ? 1.1 : 1 // Active cards lift up a bit
    //       return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    //     })
    //     if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    //   })
    //   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    //   return props.map(({ x, y, rot, scale }, i) => (
    //     <animated.div id="cardsContainer" key={i} style={{ transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
    //       {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
    //       <animated.div id='cards' {...bind(i)} style={{ transform: to([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    //     </animated.div>
    //   ))
    // }
    

// import Newspaper from '../../assets/BenNewspaper.png';

// const AboutMe = () => {
//     return (
//         <div className="aboutMePage">
            
//             <div id="meContainer">
//                 {/* <img src={Me} alt="me talking" className="ben" /> */}
//                 <div id="info">

//                     <img 
//                         id= "news"
//                         src= {Newspaper}
//                         alt= "Front page of a created newspaper"
//                     />

//                     <Link to='/'> 
//                         <div id='home'>-&#x1F3E0; Home -</div>
//                     </Link >

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AboutMe