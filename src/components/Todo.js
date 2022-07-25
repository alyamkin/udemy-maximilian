import { useState } from "react";
import BackDrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { text } = props;

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCloseModal={closeModalHandler} />}
      {modalIsOpen && <BackDrop onCloseModal={closeModalHandler} />}
    </div>
  );
};

export default Todo;
