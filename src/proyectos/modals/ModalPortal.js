import ReactDom from "react-dom";
import "./Modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {
  const handleStopPropagation = (e) => e.stopPropagation();

  return ReactDom.createPortal(
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleStopPropagation}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalPortal;

// ! crea un element en el index.html para usar este portal
// 1. importa ReactDom
// 2. en el return usa el ReactDom.createPortal
// 3. ReactDom.createPortal(componente, elemento del DOM paralelo al root en index.html)
