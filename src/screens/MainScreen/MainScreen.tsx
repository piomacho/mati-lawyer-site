import React, { MutableRefObject } from 'react'; // we need this to make JSX compile
import { About } from '../../components/About/About';
import { Navigation } from '../../components/Navigation/Navigation';
import { ProfilePhoto } from '../../components/ProfilePhoto/ProfilePhoto';
import BasicSelect from '../../components/Select/Select';
import { MainScreenWrapper, PersonDescription, Wrapper } from './MainScreen.style';

export interface MainScreenType {
  infoRef:  React.RefObject<HTMLDivElement>, mainRef:  React.RefObject<HTMLDivElement>, contactRef:  React.RefObject<HTMLDivElement>
}

export const MainScreen = ({ infoRef, mainRef, contactRef }: MainScreenType) => <MainScreenWrapper>
  <Navigation 
    infoRef={infoRef}
    mainRef={mainRef}
    contactRef={contactRef}
  />
    <ProfilePhoto />
    <About/>
</MainScreenWrapper>
