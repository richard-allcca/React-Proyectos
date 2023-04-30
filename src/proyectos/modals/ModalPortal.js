import ReactDom from "react-dom";
import "./Modal.css";

/**
 * ReactDom.createPortal()
 * @param {Element} param0 -- el elemento con el contenido del modal
 * @param {id} param1 -- el id del modal en el index.html del proyecto
 * @returns muestra el modal sobre toda la pantalla
 */

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
// 4. crea en el intex.html <div id="root"></div> para mostrar el modal con portal
