import { useEffect, useRef, useState } from 'react';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import {gsap} from 'gsap/all'
import AnimationContext from './contexts/animation-context';

function App() {

  const [currentBg, setCurrentBg] = useState('#fff')
  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg,
    })
  }, [currentBg]);

  return (
    <AnimationContext.Provider value={{ setCurrentBg }}>
      <div ref={appRef} className="App">
        <First />
        <Second />
        <Third />
      </div>
    </AnimationContext.Provider>
  );
}

export default App;
