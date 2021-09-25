import classes from './Modal.module.css';
import ReactDOM from 'react-dom'
const ModalPortal = (props) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>{props.children}</div>
    </>
  )
}

const Modal = (props) => {
  return(
    <>{ReactDOM.createPortal(<ModalPortal>{props.children}</ModalPortal>, document.getElementById('modal-root'))}</>
 )
}

export default Modal;
