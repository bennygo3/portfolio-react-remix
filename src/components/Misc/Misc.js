// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
// import lilCowboy from '../../assets/babyBenCowboyPlastic.png'
// import './Misc.css';

// let IMAGES = [
//     {
//     id: 0,
//     title: "Baby Ben",
//     src: {lilCowboy}
//     }
// ];

// function getImageById(id: number){
//     return IMAGES.find((image) => image.id === id);
// }

// export { IMAGES, getImageById };

// import Me from '../../assets/babyBenCowboyPlastic.png';

// class MiscModal extends Component {
//     constructor() {
//         super();
//         this.modalRef = React.createRef();
//     }

//     componentDidMount() {
//         const { isModal } = this.props;

//         if (isModal) {
//             disableBodyScroll(this.modalRef.current);
//         }
//     }

//     componentWillUnmount() {
//         enableBodyScroll(this.modalRef.current);
//     }

//     render() {
//         const { id } = this.props.match.params;

//         if (this.props.isModal){
//             return (
//                 <div
//                 ref= {this.ModalRef}
//                 className="meModal"
//                 onClick={() => this.props.history.goBack()}
//                 >
//                     <div className="modalTest" onClick={e => e.stopPropagation()}>
//                         <p>
//                             TEST
//                         </p>
//                     </div>
//                 </div>
//             );
//         } else {
//             return (
//                 <div className="noModalTest">
//                     <h1>{id}</h1>
//                     <p>
//                         No Test
//                     </p>
//                 </div>
//             );
//         }
//     }
    // const[showModal, setShowModal] = useState(false);
//     return (
//         <>
//         {/* {showModal ? <img id = "me" alt= "test" src= {Me}></img> : null }; */}
//         </>
//     )
// }

// export default MiscModal;

// function MiscPopUp(props) {
//     // const [PopUp, setPopUp] = useState(false);
    
//     return (props.trigger) ? (
//         <div>
//             <div className="mPopUp">
                
//                 <img id= "me" alt="test" src={Me}></img>
//                 </div>
//         </div>
//     ): "";
// }

// export default MiscPopUp;














// const appRootEl = document.getElementById('app-root');
// const modalRootEl = document.getElementById('modal-root');

// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.el = document.createElement('div');
//     }
//     componentDidMount() {
//         modalRootEl.appendChild(this.el);
//     }

//     componentWillUnmount() {
//         modalRootEl.removeChild(this.el);
//     }

//     render() {
//         return ReactDOM.createPortal(
//             this.props.children,
//             this.el
//         );
//     }
// }

// class Misc extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showModal: false};
        
//         this.handleShow = this.handleShow.bind(this);
//         this.handleHide = this.handleHide.bind(this);
//     }

//     handleShow() {
//         this.setState({showModal: true});
//     }

//     handleHide() {
//         this.setState({showModal: false});
//     }

//     render(){
//         const modal = this.state.showModal ? (
//             <Modal>
//                 <div className= "modal">
//                 <img id="ben" alt="author" src= {Me} />
//                 <button onClick={this.handleHide}>
//                     Hide modal
//                     </button>
//                 </div>
//             </Modal>
//         ) : null;

//         return (
//             <div className="app">
//                 <button onClick={this.handleShow}>
//                     Show modal
//                 </button>
//                 {modal}
//                 </div>
//         );
//     }

// }

// const root = ReactDOM.createRoot(appRootEl);
// root.render(<Misc />)























// import Home from '../Home/Home';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useHistory,
//     useLocation,
//     // useParams
// } from "react-router-dom";
// export default function miscPopUp() {
//     return (
//         <Router>
//             <ModalSwitch />
//         </Router>
//     );
// }

// function ModalSwitch() {
//     let location = useLocation();
//     let background = location.state && location.state.background;

//     return (
//         <div>
//             <Switch location={background || location}>
//                 <Route exact path="/" children={<Home />} />
//                 <Route path="/misc" children={<Misc />} />

//             </Switch>
//             {background && <Route path="/misc" children={<Modal />} />}
//         </div>
//     );
// }

// function Modal (){
//     let history = useHistory();

//     let back = e => {
//         e.stopPropagation();
//         history.goBack();
//     };

//     return (
//         <div
//             onClick={back}
//         >
//         <h1>{Me}</h1>
//         <button type ="button" onClick={back}>
//             close
//         </button>
//         </div>
//     );
// }





// function PopUp() {
//     let location = useLocation();
//     return (
//         <div>
//             <Link
//                 key={id}
//                 to={{
//                     pathname: `/popUp/${id}`,
//                     state: { background: location }
//                 }}
//             ></Link>
//         </div>
//     )
// }
