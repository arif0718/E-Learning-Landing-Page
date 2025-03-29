import React from 'react';
import './WorkWith.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const IconLottie = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/53551254-6ecc-48cd-b089-9271585cfc16/toqJUuXVDc.lottie"
      loop
      autoplay
      style={{
        width: '582px',
        height: '582px',
      }}
    />
  );
};



const WorkWith = () => {

    return (
        <>
            <div className="ww-container">
                <div className="ww-left">
                    <div className="ww-box-1">
                        <div  >Diverse Expertise</div>
                        <div className='ww-heading'  >Customized Training for Every Industry</div>
                        <h3  >We specialize in crafting tailored training solutions
                            that meet the unique needs of diverse
                            industries. From fintech to healthcare, manufacturing to retail,
                            our expertise
                            ensures that every
                            module is designed to address real world challenges, 
                            drive engagement, and deliver measurable
                            results.</h3>
                    </div>
                </div>
                <div className="ww-right">
                    <div>
                      {/* <img style={{mixBlendMode:"difference"}} src="assets/by-1.gif" alt="" /> */}
                      <IconLottie/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorkWith
