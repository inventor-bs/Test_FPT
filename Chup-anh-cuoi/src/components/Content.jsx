import React, { useState } from 'react';
import Upload from '../assets/Push_Photo.svg';
import Plus from '../assets/Plus.svg';
import Camera from '../assets/Camera.svg';
import Modal from './Modal';

export default function Content() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="content">
            <div className="upload">
                <img src={Upload} alt="" />
                <button onClick={openModal}>
                    <img src={Plus} alt="" />
                    <p>Tải ảnh lên</p>
                </button>
            </div>

            <div className="command">
                <div className="describe">
                    <p>Mô tả yêu cầu của bạn bằng câu lệnh:</p>
                </div>
                <div className="input">
                    <input type="text" placeholder="Câu lệnh mẫu: Bộ ảnh cưới phong cách Châu Âu hiện đại" />
                    <button>
                        <img src={Camera} alt="" />
                        <p>Tạo hình ảnh</p>
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <Modal closeModal={closeModal} />
            )}
        </div>
    );
}
