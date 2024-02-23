import React, { useState } from 'react'
import ArrowDown from '../assets/arrow-down.svg'

export default function Category(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleWrapper = () => {
        setIsOpen(!isOpen);
    };

    const content = props.content;
    return (
        <div className='category'>
            <div className="title" onClick={toggleWrapper}>
                <div>
                    <p>
                        {content.name}
                    </p>
                    <img src={ArrowDown} alt="" />
                </div>
            </div>

            {isOpen && content.type.length > 0 && content.name !== 'Kiểu tóc' ?
                (<div className="category_type">
                    <div className='wrapper'
                        style={{

                            padding: content.name === 'Khuôn mặt' ? '12px 16px 16px 16px' : '12px 16px 4px 16px'
                        }}
                    >
                        {
                            content.type.map(({ text, icon }, index) => {
                                return <div className="category_type-item"
                                    style={{
                                        background: index === 0 ? 'linear-gradient(0deg, #413d38, #413d38),linear-gradient(0deg, #ff6717, #ff6717)' : 'transparent',
                                        border: index === 0 ? '1px solid rgba(255, 103, 23, 1)' : '1px solid rgba(59, 67, 81, 1)',
                                        marginBottom: content.name === 'Khuôn mặt' ? '2px' : '4px',
                                        padding: content.name === 'Khuôn mặt' ? '8px 0' : '12px 0'
                                    }}

                                    key={index}
                                >
                                    <img
                                        style={{
                                            opacity: index === 0 ? '1' : '0.5'
                                        }}
                                        src={icon} alt="" />
                                    <p
                                        style={{
                                            opacity: index === 0 ? '1' : '0.5'
                                        }}
                                    >{text}</p>
                                </div>
                            })
                        }
                    </div>
                </div>)
                :
                (
                    isOpen && content.type.length > 0 && <div className="category_type">
                        <div className='wrapper'

                            style={{
                                padding: '12px 16px 16px 16px'
                            }}
                        >
                            {
                                content.type.map(({ text, icon }, index) => {
                                    return <div className="category_hair-item"
                                        key={index}
                                    >
                                        <img
                                            style={{
                                                border: index === 1 ? '1px solid rgba(255, 103, 23, 1)' : '1px solid rgba(59, 67, 81, 1)',
                                                cursor: 'pointer'
                                            }}
                                            src={icon} alt="" />
                                        <p
                                            style={{
                                                opacity: index === 1 ? '100%' : '0.32'
                                            }}
                                        >{text}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                )
            }

        </div>
    )
}
