import React, { useContext } from 'react'; // we need this to make JSX compile
import { EmailTxt, EmailWrapper, RightSideWrapper, Link, Links, NavigationPanel, HamburgerWrapper, Wrapper, LogoImageWrapper } from './Navigation.style';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BasicSelect from '../Select/Select';
import { MainScreenType } from '../../screens/MainScreen/MainScreen';
import GlobalState from '../../context/GlobalState';
import { Hamburger } from '../Hamburger/Hamburger';
import { useScroll } from '../../state/UseScroll';
import useWindowDimensions from '../../state/GetDimensions';

type CardProps = {
    title: string,
    paragraph: string
}

export const Navigation = ({ infoRef, mainRef, contactRef, welcomeRef, officeRef }: MainScreenType) => {
    const { lang } = useContext(GlobalState);
    const { scrollDirection } = useScroll();
    const { width } = useWindowDimensions();
    const isPl = lang === 'pl';
    const texts: Record<string, string> = {
        officeLink: isPl ? 'O nas' : 'About',
        mainLink: isPl ? 'Strona główna' : 'Home',
        aboutLink: isPl ? 'Zespół' : 'Team',
        ofertLink: isPl ? 'Oferta' : 'Offer',
        contact: isPl ? 'Kontakt' : 'Contact form'
    }
    const isMobile = width <= 1000;
    const valueToSubstract = isMobile ? 70 : 100;

    const goToMainSection = () => {
        window.scrollTo({
            top: (mainRef?.current?.offsetTop ?? 0) - valueToSubstract,
            behavior: 'smooth'
        });
    }

    const goToInfoSection = () => {
        window.scrollTo({
            top: (infoRef?.current?.offsetTop ?? 0) - valueToSubstract,
            behavior: 'smooth'
        });
    }
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

    const goToWelcomeSection = () => {
        window.scrollTo({
            top: (welcomeRef?.current?.offsetTop ?? 0) - valueToSubstract,
            behavior: 'smooth'
        });
    }
    const styles = {
        active: {
            visibility: "visible",
            transition: "all 0.5s"
        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.5s",
            transform: "translateY(-100%)"
        }
    }

    return (
        <Wrapper isDown={scrollDirection ?? true} isMobile={width <= 768}>
            <HamburgerWrapper>
                <Hamburger
                    isPl={isPl}
                    texts={texts}
                    goToMainSection={goToMainSection}
                    goToWelcomeSection={goToWelcomeSection}
                    goToInfoSection={goToInfoSection}
                    goToContactSection={goToContactSection}
                    goToOfficeSection={goToOfficeSection}
                />
            </HamburgerWrapper>
            <NavigationPanel>

                <EmailWrapper>
                    <LogoImageWrapper />
                </EmailWrapper>

                <RightSideWrapper>
                    <Links>

                        <Link onClick={goToWelcomeSection}>
                            {texts.mainLink}
                        </Link>
                        <Link onClick={goToOfficeSection}>
                            {texts.officeLink}
                        </Link>
                        <Link onClick={goToInfoSection}>
                            {texts.ofertLink}
                        </Link>
                        <Link onClick={goToMainSection}>
                            {texts.aboutLink}
                        </Link>
                        <Link onClick={goToContactSection}>
                            {texts.contact}
                        </Link>
                    </Links>

                    <div style={{ marginBottom: '9px', marginLeft: '20px' }}>
                        <BasicSelect />
                    </div>
                </RightSideWrapper>
            </NavigationPanel>
        </Wrapper>

    )
}
