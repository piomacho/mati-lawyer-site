import React, { useRef } from 'react';
import './App.css';
import { MainScreen } from './screens/MainScreen/MainScreen';
import { InfoScreen } from './screens/InfoScreen/InfoScreen';
import { ContactScreen } from './screens/ContactScreen/ContactScreen';

function App() {
  const infoSection = useRef<HTMLDivElement>(null);
  const mainSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <div ref={mainSection}>
        <MainScreen
            infoRef={infoSection}
            contactRef={contactSection}
            mainRef={mainSection}
          />
      </div>
      <div ref={infoSection}>
        <InfoScreen/>
      </div>
      <div ref={contactSection}>
        <ContactScreen />
      </div>
    </div>
  );
}

export default App;
