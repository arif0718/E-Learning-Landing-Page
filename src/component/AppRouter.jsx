import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import HeroTag from './HeroTag/HeroTag'
import Partner from './Partner/Partner'
import Contact from './Contact/Contact'
import Why from './Why/Why'
import Wedeliver from './Wedeliver/Wedeliver'
import WorkWith from './WorkWith/WorkWith'
import WithSpeechBubbles from './Testomonial/Testomonial'
import OverServices from './OurServices/OverServices'
import Process from './Process/Process'
import AboutUs from './AboutUs/AboutUs'

const AppRouter = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update client width
        const updateWidth = () => {
            setClientWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener("resize", updateWidth);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

  useEffect(() => {
    document.body.classList.toggle("for-dark-theme", !darkMode);
    document.body.classList.toggle("for-light-theme", darkMode);
  }, [darkMode]);
  return (
    <>
    {/* 1 */}
     <section style={{height:"100%",background:darkMode?"#fafafa":""}}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Header darkMode={darkMode} clientWidth={clientWidth}/>
     <HeroTag/>
     </section>
     {/* 2 */}
     <section style={{height:"100%",background:darkMode?"#fafafa":"#202020"}}>
      <Partner darkMode={darkMode}/>
     </section>
     <section style={{height:"100%"}}>
      <AboutUs clientWidth={clientWidth}/>
     </section>
     {/* 3 */}
     <section style={{background:darkMode?"#fafafa":"#202020"}}>
      <OverServices/>
     </section>
     
     {/* 4 */}
     <section style={{height:"100%"}}>
      <Why/>
     </section>
     {/* 5 */}
     <section style={{height:"100%",backgroundColor:darkMode ? "#fafafa":'var(--partner-bg)',paddingBottom:"10px"}}>
      <WithSpeechBubbles/>
     </section>
     {/* 6 */}
     <section style={{height:"100%"}}>
      <WorkWith/>
     </section>
     
     {/* 7 */}
     <section style={{backgroundColor:darkMode ? "#fafafa":'var(--partner-bg)'}}>
      <Process/>
     </section>
     {/* 8 */}
     <section style={{height:"100%"}}>
      <Wedeliver/>
     </section>
     {/* 9 */}
     <section id='contact' style={{backgroundColor:darkMode ? "#fafafa":'var(--partner-bg)'}}>
      <Contact/>
     </section>
    
    </>
  )
}

export default AppRouter
