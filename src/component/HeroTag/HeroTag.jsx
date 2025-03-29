import React from 'react'
import { FaGamepad } from "react-icons/fa";
import { MdImportantDevices } from "react-icons/md";
import { TbCalendarMonth } from "react-icons/tb";
import { SiMuller } from "react-icons/si";
import './HeroTag.css'

const HeroTag = () => {
    return (
        <>
            <div className="tages">
                <div className="tag-content">
                <div className='box2'>
                    <div className="icon">
                        <FaGamepad />
                    </div>
                    <div>Gamify complex topics with ease.</div>
                </div>
                <div  className='box2'>
                    <div className="icon">
                        <MdImportantDevices />
                    </div>
                    <div>Access training on any device, anytime.</div>
                </div>
                <div  className='box2'>
                    <div className="icon">
                        <TbCalendarMonth />
                    </div>
                    <div>Launch training in weeks, not months.</div>
                </div>
                <div  className='box2'>
                    <div className="icon">
                        <SiMuller />
                    </div>
                    <div>Learn through immersive simulations.</div>
                </div>
                </div>
            </div>
        </>
    );
}

export default HeroTag
