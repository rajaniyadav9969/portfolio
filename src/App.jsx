import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Ball from './Components/Ball/Ball';
import Header from './Components/Header/Header';
import { TextParallaxContentExample } from './Components/TextParallaxContent/TextParallaxContent';
import { useSelector } from 'react-redux';
function App() {
  // const [fontSize, setFontSize] = useState({ f: '1rem' });

  // const fontsize = (e) => {
  //   setFontSize({
  //     f: e.clientY
  //   })
  // }
  // useEffect(() => {
  //   window.addEventListener('mousemove', fontsize);

  //   // Clean up event listener
  //   return () => {
  //     window.removeEventListener('mousemove', fontsize);
  //   };
  // }, []);


  const animate = useSelector(p => p.animate.type)
  console.log(animate)





  return (
    <div className='container-fluid'
    // style={{ fontSize: fontSize.f }}
    >
      <Header />
      <Ball animate={animate} />

      {/* <SmoothScroll> */}
      <TextParallaxContentExample />
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