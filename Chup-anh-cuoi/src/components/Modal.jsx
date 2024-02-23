import React from 'react';

export default function Modal({ closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
            </div>
        </div>
    );
}
