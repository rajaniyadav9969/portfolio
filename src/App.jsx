import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ball from './Components/Ball/Ball';
import Header from './Components/Header/Header';
import { TextParallaxContentExample } from './Components/TextParallaxContent/TextParallaxContent';
import { useSelector } from 'react-redux';
import Home from './Pages/Home/Home';

function App() {
  const animate = useSelector(p => p.animate.type)
  // console.log(animate)



  return (
    <div className=''
    // style={{ fontSize: fontSize.f }}
    >
      <Header />
      <Ball animate={animate} />
      <Home />
      {/* <SmoothScroll> */}
      {/* <TextParallaxContentExample /> */}
      {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes> */}
      {/* </SmoothScroll> */}
    </div>
  )
}

export default App


// https://www.youtube.com/watch?v=UUhoCb5nagY


// https://www.tonygines.com/
// https://www.enricodeiana.design/
// https://github.com/edeiana
// https://dribbble.com/Enrideia