import React, { useState } from 'react';
import Upload from '../assets/Push_Photo.svg';
import Plus from '../assets/Plus.svg';
import Camera from '../assets/Camera.svg';
import Modal from './Modal';
import Wedding from '../assets/Wedding.png'
import Wedding1 from '../assets/Wedding1.png'
import Wedding2 from '../assets/Wedding2.png'
import Download from '../assets/Control/Download.svg'
import Extend from '../assets/Control/Extend.svg'
import Delete from '../assets/Control/Delete.svg'

export default function Content() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUploadImage = (image) => {
        setUploadedImage(image);
        closeModal();
    };

    const [isInputFocused, setInputFocused] = useState(false);

    const handleFocus = () => {
        setInputFocused(true);
    };

    const handleBlur = () => {
        setInputFocused(false);
    };
    return (
        <div className="content"
            style={{
                gap: uploadedImage ? '45px' : '210px'
            }}
        >
            {uploadedImage ? (
                <div className="uploaded-image-container">

                    <div className="uploaded-image image-left">
                        <div className="status">
                            <p>Before</p>
                        </div>
                        <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
                    </div>
                    <div className="uploaded-image image-right">
                        <div className="status">
                            <p>After</p>
                        </div>
                        <img src={Wedding} alt="Uploaded" className="uploaded-image" />
                        <div className="control">
                            <img src={Download} alt="" />
                            <img src={Extend} alt="" />
                            <img src={Delete} alt="" />
                        </div>
                        <div className="preview_image">
                            <img src={Wedding} alt="" />
                            <img src={Wedding1} alt="" />
                            <img src={Wedding2} alt="" />
                        </div>
                    </div>


                    {/* <button onClick={openModal}>
                        <img src={Plus} alt="" />
                        <p>Tải ảnh lên</p>
                    </button> */}
                </div>
            ) : (
                <div className="upload">
                    <img src={Upload} alt="" />
                    <button onClick={openModal}>
                        <img src={Plus} alt="" />
                        <p>Tải ảnh lên</p>
                    </button>
                </div>
            )}

            <div className="command">
                <div className="describe">
                    <p>Mô tả yêu cầu của bạn bằng câu lệnh:</p>
                </div>
                <div className={isInputFocused ? "input focused" : "input"}>
                    <input type="text" placeholder="Câu lệnh mẫu: Bộ ảnh cưới phong cách Châu Âu hiện đại" onFocus={handleFocus} onBlur={handleBlur} />
                    <button>
                        <img src={Camera} alt="" />
                        <p>Tạo hình ảnh</p>
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <Modal closeModal={closeModal} onConfirm={handleUploadImage} />
            )}
        </div>
    );
}
