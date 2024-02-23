import React from 'react'
import Logo from '../assets/Vector.svg'
import Crown from '../assets/Crown.svg'
import Control from '../assets/Control_left.svg'

export default function Header() {

    const navitems = [
        'Chụp ảnh cưới',
        'Thiết kế nhà cửa',
        'Mẹ và bé',
        'Thú cưng',
    ]

    return (
        <div className='header'>

            <div className="brand">
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
                <div className="name">
                    <div style={
                        {
                            width: '119px',
                            height: '21px'
                        }
                    }>
                        <p style={
                            {
                                width: '98px',
                                height: '21px',
                                margin: '0',
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '21px',
                                letterSpacing: '0em',
                                textAlign: 'center',
                                color: 'rgba(255, 255, 255, 1)'
                            }}>
                            FPT Lifestyle
                            <span
                                style={{
                                    width: '21px',
                                    height: '21px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    lineHeight: '21px',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                    background: 'linear-gradient(87.04deg, #FF600E 0%, #FF8F4C 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                .AI
                            </span>
                        </p>
                    </div>
                    <p style={
                        {
                            width: '60px',
                            height: '14px',
                            opacity: '50%',
                            fontSize: '10px',
                            fontWeight: '500',
                            lineHeight: '14px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                            margin: '0',
                            color: 'rgba(242, 242, 242, 1)'
                        }}>
                        Happy Club
                    </p>
                </div>

            </div>

            <div className="items">
                {
                    navitems.map((text, index) => {
                        return <p
                            style={{
                                opacity: index == 0 ? 1 : 0.5
                            }}
                            key={index}
                        >
                            {text}
                        </p>
                    })

                }
            </div>

            <div className='header_control'>
                <img
                    style={{
                        width: '24px',
                        height: '24px',
                        color: 'rgba(255, 255, 255, 1)',
                        transform: 'scaleX(-1)',
                        opacity: '30%',
                        cursor: 'pointer'

                    }}
                    src={Control} alt="" />
                <img
                    style={{
                        position: 'relative',
                        width: '24px',
                        height: '24px',
                        left: '24px',
                        cursor: 'pointer'
                    }}
                    src={Control} alt="" />
            </div>

            <div className="upgrade">
                <span
                    style={{
                        width: '16px',
                        height: '16px',
                        padding: '3px 6px 3.25px 2.5px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src={Crown} alt="" />
                </span>
                <p>
                    Nâng cấp gói
                </p>
            </div>
        </div >
    )
}
