import React from 'react';
import '../styles/Modal.css';

const Modal = ({ onClose, pdfPath }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>
                    Close
                </button>
                <iframe title="PDF Viewer" src={pdfPath} width="100%" height="auto" />
            </div>
        </div>
    );
};

export default Modal;
