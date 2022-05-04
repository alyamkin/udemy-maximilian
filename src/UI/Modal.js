import { Fragment } from "react";
import ReactDom from "react-dom";

import Card from "./Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <section className={classes.modal}>
      <Card>{props.children}</Card>
    </section>
  );
};

const overlaysElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onCloseModal} />,
        overlaysElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlaysElement
      )}
    </Fragment>
  );
};

export default Modal;
