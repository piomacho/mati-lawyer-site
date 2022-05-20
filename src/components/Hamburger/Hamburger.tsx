import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GlobalState from '../../context/GlobalState';
import { Link, LinksWrapper, TopNav } from './Hamburger.style';

interface HamburgerType {
  isPl: boolean,
  texts: Record<string, string>,
  goToInfoSection: () => void,
  goToMainSection: () => void,
  goToWelcomeSection: () => void,
  goToContactSection: () => void,
  goToOfficeSection: () => void,
}

export const Hamburger = ({ isPl, texts, goToInfoSection, goToOfficeSection, goToWelcomeSection, goToMainSection, goToContactSection }: HamburgerType) => {
  const [showLinks, setShowLinks] = React.useState(false);

  const mainSectionClick = () => {
    goToMainSection();
    setShowLinks(false);
  }
  const officeSectionClick = () => {
    goToOfficeSection();
    setShowLinks(false);
  }
  const goToWelcomeClick = () => {
    goToWelcomeSection();
    setShowLinks(false);
  }

  const infoSectionClick = () => {
    goToInfoSection();
    setShowLinks(false);
  }

  const contactSectionClick = () => {
    goToContactSection();
    setShowLinks(false);
  }
  return (
    <TopNav>
      <MenuIcon style={{ color: '#111' }} onClick={() => setShowLinks(!showLinks)} />
      <LinksWrapper showLinks={showLinks}>
        <Link onClick={goToWelcomeClick}>{texts.mainLink}</Link>
        <Link onClick={officeSectionClick}>{texts.officeLink}</Link>
        <Link onClick={infoSectionClick}>{texts.ofertLink}</Link>
        <Link onClick={mainSectionClick}>{texts.aboutLink}</Link>
        <Link onClick={contactSectionClick}>{texts.contact}</Link>
      </LinksWrapper>
    </TopNav>
  );
}

