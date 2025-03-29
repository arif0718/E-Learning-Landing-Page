import React from 'react'
import './TestmonialCard.css'
import { FaStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdArrowRight } from "react-icons/md";

const TestmonialCard = ({testimonial}) => {
    const  {companyImg,text,avatarSrc,name,title,company} = testimonial;
    return (
        <>
            <div className="testmonial-card">
                <div className="testmonial-head">
                    <img loading="lazy" src={companyImg}  />
                </div>
                <div className="testmonial-info">
                        <div className="info-img">
                            <img loading="lazy" src={avatarSrc} alt="client-1" />
                        </div>
                        <div className="info-name-desc">
                            <h3 style={{marginBottom:"4px",fontSize:"16px"}}>{name}</h3>
                            <h4 style={{fontWeight:"300",fontSize:"9px"}}>
                               <MdArrowRight fontSize={"18px"} color='#af0101'/>
                                <p>{title}</p>
                            </h4>
                            <h5 style={{fontWeight:"300",fontSize:"9px"}}>
                               <MdArrowRight fontSize={"18px"} color='#af0101'/>
                                <p>{company}</p>
                            </h5>
                        </div>
                    </div>
                <div className="testmonial-body">
                   <div className="test-desc-box">
                    <div className="test-top-desc-box">
                        <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>
                        <div><BsThreeDots/></div>
                    </div>
                   <div className="testmonial-desc">
                        {text}
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default TestmonialCard
