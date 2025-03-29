import React from 'react'
import './Header.css'
import Marquee from '../Marquee/Marquee'

const Header = ({darkMode,clientWidth}) => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <div className="top-line">
                    We Make it Real
                    </div>
                    <div className="box">
                        <div className='hero-heading'>
                            Customized {
                                clientWidth < 408 ? <br /> : ""
                            } E-Learning Solutions {
                                clientWidth < 408 ? "" : <br/>
                            }
                            for Your Team.
                        </div>
                        <div className='simple-line'>
                            <div>
                                Supercharge your team's potential with customized e-learning experiences to enhance
                                skills, boost engagement, and deliver measurable results.
                            </div>
                           <a href="#contact"><button>Speak to an Expert</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='marquee1'>
                <Marquee darkMode={darkMode}/>
            </div>
        </>
    )
}

export default Header
