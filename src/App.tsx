import React, { useRef, useState } from 'react';
import './App.css';
import { MainScreen } from './screens/MainScreen/MainScreen';
import { InfoScreen } from './screens/InfoScreen/InfoScreen';
import { ContactScreen } from './screens/ContactScreen/ContactScreen';
import GlobalState, { defaultState } from './context/GlobalState';
import { init } from '@emailjs/browser';
import { WelcomeScreen } from './screens/WelcomeScreen/WelcomeScreen';
import { OfficeScreen } from './screens/OfficeScreen/OfficeScreen';
import { Navigation } from './components/Navigation/Navigation';
import { WrapperMain } from './screens/WelcomeScreen/WelcomeScreen.style';
import { Copyright } from './components/Copyright/Copyright';

function App() {
  const welcomeSection = useRef<HTMLDivElement>(null);
  const infoSection = useRef<HTMLDivElement>(null);
  const mainSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);
  const officeSection = useRef<HTMLDivElement>(null);
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
        <Navigation
          welcomeRef={welcomeSection}
          infoRef={infoSection}
          contactRef={contactSection}
          mainRef={mainSection}
          officeRef={officeSection}
        />
        <WrapperMain ref={welcomeSection} >
          <WelcomeScreen
            welcomeRef={welcomeSection}
            infoRef={infoSection}
            contactRef={contactSection}
            mainRef={mainSection}
            officeRef={officeSection}
          />
        </WrapperMain>
        <div ref={officeSection}>
          <OfficeScreen />
        </div>
        <div ref={infoSection}>
          <InfoScreen />
        </div>
        <div ref={mainSection}>
          <MainScreen
          />
        </div>
        <div ref={contactSection}>
          <ContactScreen />
        </div>
        <Copyright />
      </div>
    </GlobalState.Provider>
  );
}

export default App;
