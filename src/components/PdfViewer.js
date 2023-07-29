import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the import path based on your file structure
import pdfPath from '../assets/EzzatMakar.pdf';
const PdfViewer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='my-cv'>
            <button onClick={openModal}>
                My CV
            </button>
            {isModalOpen && (
                <Modal onClose={closeModal} pdfPath={pdfPath} />
            )}
        </div>
    );
};

export default PdfViewer;
