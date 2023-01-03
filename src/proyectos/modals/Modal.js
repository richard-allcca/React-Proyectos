import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  // este evento evita la propagacion del click en el contenido del modal
  const handleStopPropagation = (e) => e.stopPropagation();

  // onClick={closeModal} al contenedor del modal y al button de cerrar
  return (
    <article
      className={ `modal ${isOpen && "is-open"}` }
      onClick={ closeModal }
    >
      <div className="modal-container" onClick={ handleStopPropagation }>

        <button className="modal-close" onClick={ closeModal }> X </button>

        { children }

      </div>
    </article>
  );
};

export default Modal;
