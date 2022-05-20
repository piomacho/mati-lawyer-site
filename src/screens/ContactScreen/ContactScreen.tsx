import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/Person';
import PhoneOutlineIcon from '@mui/icons-material/Phone';
import React, { useContext } from 'react'; // we need this to make JSX compile
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { EmailTxt } from '../../components/Navigation/Navigation.style';
import GlobalState from '../../context/GlobalState';
import { SectionTitle } from '../InfoScreen/InfoScreen.style';

import { ContactContainer, ContactInfo, ContactScreenWrapper, InfoWrapper, Row } from './ContactScreen.style';


export const ContactScreen = () => {
  const { lang } = useContext(GlobalState);
  const isPl = lang === 'pl';

  const texts: Record<string, string> = {
    sectionTitle: isPl ? 'Kontakt' : 'Contact',
  }

  return (
    <div>
      <ContactScreenWrapper>
        <ContactContainer>
          <ContactForm />
          <ContactInfo>
            <InfoWrapper>
              <PersonOutlineIcon />
              <EmailTxt>Mateusz Kozłowski</EmailTxt>
            </InfoWrapper>
            <InfoWrapper>
              <MailOutlineIcon />
              <EmailTxt>h4foreigners@gmail.com</EmailTxt>
            </InfoWrapper>
            <InfoWrapper>
              <PhoneOutlineIcon />
              <EmailTxt>+48 694 307 031</EmailTxt>
            </InfoWrapper>
          </ContactInfo>
        </ContactContainer>
      </ContactScreenWrapper>
    </div>
  )

}
