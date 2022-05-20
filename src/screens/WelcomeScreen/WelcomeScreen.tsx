import React, { useContext } from 'react'; // we need this to make JSX compile
import { Navigation } from '../../components/Navigation/Navigation';
import GlobalState from '../../context/GlobalState';
import useWindowDimensions from '../../state/GetDimensions';
import { BackgroundOpacity, Buttons, ImageWrapper, InnerWrapper, LogoBackgroud, MainScreenWrapper, NavigationWrapper, PersonDescription, PlatformPagesWrapper, ScrollWrapper, Wrapper } from './WelcomeScreen.style';

export interface WelcomeScreenType {
  infoRef: React.RefObject<HTMLDivElement>, mainRef: React.RefObject<HTMLDivElement>, contactRef: React.RefObject<HTMLDivElement>, welcomeRef: React.RefObject<HTMLDivElement>, officeRef: React.RefObject<HTMLDivElement>
}


export const WelcomeScreen = ({ infoRef, mainRef, contactRef, welcomeRef, officeRef }: WelcomeScreenType) => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 1000;
  const { lang } = useContext(GlobalState);
  const isPl = lang === 'pl';
  const valueToSubstract = isMobile ? 70 : 100;

  const goToOfficeSection = () => {
    window.scrollTo({
      top: (officeRef?.current?.offsetTop ?? 0) - valueToSubstract,
      behavior: 'smooth'
    });
  }
  const goToContactSection = () => {
    window.scrollTo({
      top: (contactRef?.current?.offsetTop ?? 0) - valueToSubstract,
      behavior: 'smooth'
    });
  }

  const texts: Record<string, string> = {
    lernMore: isPl ? 'Dowiedz się więcej' : 'Find out more',
    contact: isPl ? 'Kontakt' : 'Contact',
  }

  return (
    <MainScreenWrapper >
      {/* <Navigation
        infoRef={infoRef}
        mainRef={mainRef}
        contactRef={contactRef}
        welcomeRef={welcomeRef}
        officeRef={officeRef}
      /> */}
      <BackgroundOpacity />

      <Wrapper>
        <InnerWrapper>
          <LogoBackgroud />


          <Buttons>
            <NavigationWrapper>
              <PlatformPagesWrapper>
                {/* Find out more */}
                <div onClick={goToOfficeSection} className="button">{texts.lernMore}</div>
                <div onClick={goToContactSection} className="button">{texts.contact}</div>
              </PlatformPagesWrapper>


              <ScrollWrapper onClick={goToOfficeSection} />

            </NavigationWrapper>
          </Buttons>
        </InnerWrapper>
      </Wrapper>

    </MainScreenWrapper>);
};
