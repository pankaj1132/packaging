
import GetInTouch from '../Components/GetInTouch.jsx'
import Map from '../Components/Map.jsx'
import About from '../Components/About.jsx'
import Gallery from '../Components/Gallery.jsx'
import WhatWeDo from '../Components/WhatWeDo.jsx'
import HomeBanner from '../Components/HomeBanner.jsx'
import WhyChoose from '../Components/WhyChoose.jsx'

const Home = () => {
  return (
    <>
    <HomeBanner/>
   <About/>
   <Gallery/>
   <WhatWeDo/>
   <WhyChoose/>
    <GetInTouch/>
    <Map/>
    </>
  )
}

export default Home