import React, { useState } from 'react';
import Close from '../assets/Close.svg'
import CoverImage from '../assets/Cover_Image.svg'
import UploadImage from '../assets/Upload_Image.png'

export default function Modal({ closeModal, onConfirm }) {

    const [image, setImage] = useState(UploadImage);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleConfirmClick = () => {
        onConfirm(image);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal_header">
                    <p>Thêm ảnh</p>
                    <img src={Close} alt=""
                        className="close" onClick={closeModal}
                    />
                </div>
                <div className="modal_image">
                    {/* <input type="file" onChange={handleImageUpload} /> */}
                    <div className="image-cover">
                        {/* <img src={UploadImage} alt="" /> */}
                        {image && <img src={image} alt="" />}
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="scale">
                        <button><p>1:1</p></button>
                        <button
                            style={{
                                background: 'linear-gradient( 0deg, rgba(255, 103, 23, 0.1), rgba(255, 103, 23, 0.1))',
                                border: '1px solid rgba(255, 103, 23, 1)'
                            }}
                        ><p
                            style={{
                                color: ' rgba(255, 103, 23, 1)'
                            }}
                        >9:16</p></button>
                        <button><p>3:2</p></button>
                        <button><p>4:3</p></button>
                        <button><p>16:9</p></button>
                    </div>
                    <button onClick={handleConfirmClick}><p>Xác nhận</p></button>
                </div>
            </div>
        </div>
    );
}
