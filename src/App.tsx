import React, { useRef, useState } from 'react';
import './App.css';
import { MainScreen } from './screens/MainScreen/MainScreen';
import { InfoScreen } from './screens/InfoScreen/InfoScreen';
import { ContactScreen } from './screens/ContactScreen/ContactScreen';
import GlobalState, { defaultState } from './context/GlobalState';

function App() {
  const infoSection = useRef<HTMLDivElement>(null);
  const mainSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState(defaultState.lang);  
  const [modalType, setModalOpen] = useState<string | null>(defaultState.modalType);  
  return (
    <GlobalState.Provider value={{ 
      lang,
      modalType,
      setModalOpen,
      setLang
    }}>
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
    </GlobalState.Provider>
  );
}

export default App;
