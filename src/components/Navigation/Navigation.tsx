import React, { useContext } from 'react'; // we need this to make JSX compile
import { EmailTxt, EmailWrapper, RightSideWrapper, Link, Links, NavigationPanel, HamburgerWrapper } from './Navigation.style';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BasicSelect from '../Select/Select';
import { MainScreenType } from '../../screens/MainScreen/MainScreen';
import GlobalState from '../../context/GlobalState';
import { Hamburger } from '../Hamburger/Hamburger';

type CardProps = {
  title: string,
  paragraph: string
}

export const Navigation = ({ infoRef, mainRef, contactRef }: MainScreenType) => {
    const { lang } = useContext(GlobalState);
    const isPl = lang === 'pl';
    const texts: Record<string, string> = {
        homeLink: isPl ? 'Strona główna' : 'Home',
        ofertLink: isPl ? 'Oferta' : 'Offer',
        contact: isPl ? 'Kontakt' : 'Contact form'
    }

    
    const goToMainSection = () => {
        window.scrollTo({
            top: mainRef?.current?.offsetTop,
            behavior: 'smooth'
        });
    }
    const goToInfoSection = () => {
        window.scrollTo({
            top: infoRef?.current?.offsetTop,
            behavior: 'smooth'
        });
    }
    const goToContactSection = () => {
        window.scrollTo({
            top: contactRef?.current?.offsetTop,
            behavior: 'smooth'
        });
    }

  
    return (
        <>
          <HamburgerWrapper>
                <Hamburger 
                    isPl={isPl}
                    texts={texts}
                    goToMainSection={goToMainSection}
                    goToInfoSection={goToInfoSection}
                    goToContactSection={goToContactSection}
                />
            </HamburgerWrapper>
            <NavigationPanel>
            
            <EmailWrapper>
                <MailOutlineIcon />
                <EmailTxt>mateusz.kozlowski@gmail.com</EmailTxt>
            </EmailWrapper>
          
            <RightSideWrapper>
                <Links>
                    <Link onClick={goToMainSection}>
                        {texts.homeLink}
                    </Link>
                    <Link onClick={goToInfoSection}>
                        {texts.ofertLink}
                    </Link>
                    <Link onClick={goToContactSection}>
                        {texts.contact}
                    </Link>
                </Links>
          
                <div style={{marginTop: '10px', marginLeft: '20px'}}>
                    <BasicSelect />
                </div>
            </RightSideWrapper>
        </NavigationPanel>
        </>
      
    )
}
