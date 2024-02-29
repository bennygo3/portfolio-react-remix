import React from 'react';
import { ModalContextProvider } from '../src/pages/ModalContext/ModalContext.js';
import './App.css';
import { 
  Routes, 
  Route,
} from "react-router-dom";


import Home from './pages/Home/Home';
import AboutMe from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

import Portfolio  from  './pages/Portfolio/Portfolio';
import Misc from './pages/Misc/Misc';

function App () {
  
    return (
      
      <ModalContextProvider>
       <Routes >
          <Route path = '/' element = {<Home/>} />
          <Route path = '/aboutme' element = {<AboutMe/>} />
          <Route path = '/resume' element = {<Resume/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/portfolio' element = {<Portfolio/>} />
          <Route path = '/misc' element = {<Misc/>} />
          
        </Routes>
        </ModalContextProvider>
      
    );
  }


export default App;




// GRAVEYARD:

// export default function App() {
//   let location = useLocation();
//   // The `backgroundLocation` state is the location that we were at when one of
//   // the gallery links was clicked. If it's there, use it as the location for
//   // the <Routes> so we show the gallery in the background, behind the modal.
//   let state = location.state as { backgroundLocation?: Location };

//   return(
//     <div>
//       <Routes location={state?.backgroundLocation || location}>
//         <Route path = '/' element = {<Home/>} />
//       <Route path = '/aboutme' element = {<AboutMe/>} />
//       <Route path = '/misc/:id' element = {<Misc/>} />
//       </Routes>
//       {/* show the modal when a `backgroundLocation` is set */}
//       {state?.backgroundLocation && (
//         <Routes>
//           <Route path = '/misc/:id' element = {<MiscModal/>} />
//         </Routes>
//       )}
//     </div>
//   );
// }

// function Misc() {
//   let location = useLocation();
//   return (
//     <div style={{ padding: "0 24px" }}>
//       <h2>Gallery</h2>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "24px",
//         }}
//       >
//         {IMAGES.map((image) => (
//           <Link
//           key={image.id}
//           to={`/misc/${image.id}`}
//           // This is the trick! Set the `backgroundLocation` in location state
//             // so that when we open the modal we still see the current page in
//             // the background.
//             state={{ backgroundLocation: location }}
//             >
//               <img
//               width={200}
//               height={200}
//               style={{
//                 width: "100%",
//                 aspectRatio: "1 / 1",
//                 height: "auto",
//                 borderRadius: "8px",
//               }}
//               src={image.src}
//               alt={image.title}
//             />
          
//             </Link>
//         ))
//         }
         
//          </div>
//       </div>
//   );
// }

// function Modal() {
//   let navigate = useNavigate();
//   let { id } = useParams<"id">();
//   let image = getImageById(Number(id));
//   let buttonRef = React.useRef<HTMLButtonElement>(null);

//   function onDismiss() {
//     navigate(-1);
//   }

//   if (!image) return null;

//   return (<Dialog
//     aria-labelledby="label"
//     onDismiss={onDismiss}
//     initialFocusRef={buttonRef}
//   >
//     <div
//       style={{
//         display: "grid",
//         justifyContent: "center",
//         padding: "8px 8px",
//       }}
//     >
//       <h1 id="label" style={{ margin: 0 }}>
//         {image.title}
//       </h1>
//       <img
//         style={{
//           margin: "16px 0",
//           borderRadius: "8px",
//           width: "100%",
//           height: "auto",
//         }}
//         width={400}
//         height={400}
//         src={image.src}
//         alt=""
//       />
//       <button
//         style={{ display: "block" }}
//         ref={buttonRef}
//         onClick={onDismiss}
//       >
//         Close
//       </button>
//     </div>
//   </Dialog>
//   );
// }
// const appRootEl = document.getElementById('app-root');
// const modalRootEl = document.getElementById('modal-root');

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement('div');
//   }
//   componentDidMount() {
//     modalRootEl.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     modalRootEl.removeChild(this.el);
//   }

//   render() {
//     return ReactDOM.createPortal(
//       this.props.children,
//       this.el,
//     );
//   }
// }


// constructor(props){
  //   super(props);
  //   this.state = {showModal:false}

  //   this.handleShow = this.handleShow.bind(this);
  //   this.handleHide = this.handleHide.bind(this);
  // }

  // handleShow() {
  //   this.setState({showModal:true});
  // }

  // handleHide() {
  //   this.setState({showModal:false});
  // }

//   componentWillUpdate() {
//     let { location } = this.props;

//     if (!(location.state && location.state.modal)) {
//       this.previousLocation = location;
//     }
//   }

//     // const { location } = this.props;
//     // const isModal = (
//     //   location.state && 
//     //   location.state.modal &&
//     //   this.previouslocation !== location
//     // );
    // const modal = this.state.showModal ? (
    //   <Modal>
    //     <div className='modal'>
    //       TEststetst
    //       <button onClick={this.handleHide}>Hide modal</button>
    //     </div>
        
    //   </Modal>
    // ) : null;

//   {/* <div className="app">
      //   This div has overflow: hidden.
      //   <button onClick={this.handleShow}>Show modal</button>
      //   {modal}
      // </div> */}
        // {/* {isModal
      //   ?<Route path = "/misc/:id"><MiscModal isModal ={isModal}/></Route>
      // : null } */}
      // </Router>

      // function App() {
 
//   return (
//     <Router>
//       <Routes>
//         <Route path = '/' element = {<Home/>} />
//         <Route path = '/aboutme' element = {<AboutMe/>} />
//         <Route path = '/misc' element = {<MiscModal/>} />
//       </Routes>
//     </Router>
   
//   );
// }
// const root = ReactDOM.createRoot(appRootEl);
// root.render(<App />);

 
