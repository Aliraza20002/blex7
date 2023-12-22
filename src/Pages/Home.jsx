import React from 'react'

import Aboutus from '../Components/Aboutus'
import TrackShip from '../Components/TrackShip'
import Service from '../Components/Service'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import Clientsec from '../Components/Clientsec'
import Herosection from '../Components/Herosection'
import AboutHome from '../Components/AboutHome'
import Accordion from '../Components/Acordian'
import SliderText from '../Components/SliderText'
import Servicesec from '../Components/Servicesec'

const Home = () => {
  return (
    <div>
    <Herosection/>
    <SliderText/>

   <AboutHome/>
   {/* <Servicesec/> */}
   <Service/>
   
    <Accordion/>
{/* <ContactUs/> */}
<Footer/>
    </div>

    
  )
}

export default Home