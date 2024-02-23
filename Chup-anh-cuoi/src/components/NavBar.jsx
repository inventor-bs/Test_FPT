import React, { useState } from 'react';
import BoCuc from '../assets/Side_Menu/1.svg';
import ChonMau from '../assets/Side_Menu/2.svg';
import PhongCach from '../assets/Side_Menu/3.svg';
import ChanDung from '../assets/Side_Menu/4.svg';
import TrangPhuc from '../assets/Side_Menu/5.svg';
import PhongNen from '../assets/Side_Menu/6.svg';
import HieuUng from '../assets/Side_Menu/7.svg';
import VanBan from '../assets/Side_Menu/8.svg';
import Hinh from '../assets/Side_Menu/9.svg';
import Fat from '../assets/Categories/fat.svg';
import Thin from '../assets/Categories/thin.svg';
import Category from './Category';
import Face from '../assets/Face.svg';

import Tocdai from '../assets/Hair/1.png';
import Tocngan from '../assets/Hair/2.png';
import Nganglung from '../assets/Hair/3.png';
import Ngangvai from '../assets/Hair/4.png';
import Xoatunhien from '../assets/Hair/5.png';
import Buitoc from '../assets/Hair/6.png';
import Toctem from '../assets/Hair/7.png';
import Tocxoan from '../assets/Hair/8.png';

import HideButton from '../assets/Button_Hide.svg';

export default function NavBar() {
    const [isNavVisible, setIsNavVisible] = useState(true);

    const menuItems = [
        {
            text: 'Bố cục',
            icon: BoCuc
        },
        {
            text: 'Chọn mẫu',
            icon: ChonMau
        },
        {
            text: 'Phong cách',
            icon: PhongCach
        },
        {
            text: 'Chân dung',
            icon: ChanDung
        },
        {
            text: 'Trang phục',
            icon: TrangPhuc
        },
        {
            text: 'Phông nền',
            icon: PhongNen
        },
        {
            text: 'Hiệu ứng',
            icon: HieuUng
        },
        {
            text: 'Văn bản',
            icon: VanBan
        },
        {
            text: 'Hình',
            icon: Hinh
        },
    ];

    const Categories = [
        {
            name: 'Hình dáng cơ thể',
            type: [
                {
                    text: 'Tự nhiên',
                    icon: Thin
                },
                {
                    text: 'Eo thon',
                    icon: Fat
                },
                {
                    text: 'Eo thon',
                    icon: Thin
                },
                {
                    text: 'Đồng hồ cát',
                    icon: Thin
                },
                {
                    text: 'Mũm mĩm',
                    icon: Fat
                },
                {
                    text: 'Mũm mĩm',
                    icon: Thin
                }
            ]
        },
        {
            name: 'Khuôn mặt',
            type: [
                {
                    text: 'Mặc định',
                    icon: Face
                },
                {
                    text: 'Thon dài',
                    icon: Face
                },
                {
                    text: 'Thon dài',
                    icon: Face
                },
                {
                    text: 'Mặt tròn',
                    icon: Face
                },
                {
                    text: 'Mặt vuông',
                    icon: Face
                },
                {
                    text: 'Mặt vuông',
                    icon: Face
                },
                {
                    text: 'Trái xoan',
                    icon: Face
                },
                {
                    text: 'Chữ nhật',
                    icon: Face
                },
                {
                    text: 'Chữ nhật',
                    icon: Face
                }
            ]
        },
        {
            name: 'Kiểu tóc',
            type: [
                {
                    text: 'Tóc dài',
                    icon: Tocdai
                },
                {
                    text: 'Tóc ngắn',
                    icon: Tocngan
                },
                {
                    text: 'Ngang lưng',
                    icon: Nganglung
                },
                {
                    text: 'Ngang vai',
                    icon: Ngangvai
                },
                {
                    text: 'Xõa tự nhiên',
                    icon: Xoatunhien
                },
                {
                    text: 'Búi tóc',
                    icon: Buitoc
                },
                {
                    text: 'Tóc tém',
                    icon: Toctem
                },
                {
                    text: 'Tóc xoăn',
                    icon: Tocxoan
                },
            ]
        },
        {
            name: 'Màu da',
            type: []
        }
    ];

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <div style={{ position: 'relative' }}>
            <div className='nav' style={{ display: isNavVisible ? 'block' : 'none' }}>
                <div className="nav_type">
                    <div style={{ borderBottom: '2px solid rgba(255, 103, 23, 1)' }}>
                        <p>Cá nhân hoá</p>
                    </div>
                    <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)', height: '41px' }}>
                        <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Ngẫu nhiên thú vị</p>
                    </div>
                </div>
                <div className="nav_side">
                    <div className="side_menu">
                        {menuItems.map(({ text, icon }) => (
                            <div
                                style={{ background: text === 'Bố cục' ? 'rgba(39, 40, 48, 1)' : 'transparent' }}
                                key={text}
                            >
                                <img
                                    style={{ opacity: text !== 'Bố cục' ? '0.5' : 1 }}
                                    src={icon}
                                    alt=""
                                />
                                <p style={{ opacity: text !== 'Bố cục' ? '0.5' : 1 }}>{text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="properties">
                        {Categories.map((category, index) => (
                            <Category key={index} content={category} />
                        ))}
                    </div>
                </div>
            </div>
            <img
                onClick={toggleNavVisibility}
                src={HideButton}
                alt=""
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: isNavVisible ? '101.58%' : '',
                    marginLeft: !isNavVisible ? '5px' : '',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: '100'
                }}
            />
        </div>
    );
}
