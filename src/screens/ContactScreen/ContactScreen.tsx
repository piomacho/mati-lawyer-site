import { makeStyles } from '@mui/material';
import React, { useContext } from 'react'; // we need this to make JSX compile
import { ContactForm } from '../../components/ContactForm/ContactForm';
import GlobalState from '../../context/GlobalState';
import { SectionTitle } from '../InfoScreen/InfoScreen.style';

import { ContactScreenWrapper, Row } from './ContactScreen.style';


export const ContactScreen = () => {
  const { lang } = useContext(GlobalState);
  const isPl = lang === 'pl';

  const texts: Record<string, string> = {
      sectionTitle: isPl ? 'Kontakt' : 'Contact',
  }

  return(
    <div>
      <SectionTitle themeDark={true}>{texts.sectionTitle}</SectionTitle>
      <ContactScreenWrapper>
        <ContactForm />
      </ContactScreenWrapper>
  </div>
  )

}
