import React from 'react'; // we need this to make JSX compile
import { EmailTxt, EmailWrapper, RightSideWrapper, Link, Links, NavigationPanel } from './Navigation.style';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BasicSelect from '../Select/Select';
import { MainScreenType } from '../../screens/MainScreen/MainScreen';

type CardProps = {
  title: string,
  paragraph: string
}

export const Navigation = ({ infoRef, mainRef, contactRef }: MainScreenType) => {
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
        <NavigationPanel>
            <EmailWrapper>
                <MailOutlineIcon />
                <EmailTxt>mateusz.kozlowski@gmail.com</EmailTxt>
            </EmailWrapper>
            <RightSideWrapper>
                <Links>
                    <Link onClick={goToMainSection}>
                        Home
                    </Link>
                    <Link onClick={goToInfoSection}>
                        Oferta
                    </Link>
                    <Link onClick={goToContactSection}>
                        Kontakt
                    </Link>
                </Links>
                <div style={{marginTop: '10px'}}>
                    <BasicSelect />
                </div>
            </RightSideWrapper>
        </NavigationPanel>
    )
}
