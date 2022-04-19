import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GlobalState from '../../context/GlobalState';
import { Link, LinksWrapper, TopNav } from './Hamburger.style';

interface HamburgerType {
    isPl: boolean,
    texts: Record<string,string>,
    goToInfoSection: () => void,
    goToMainSection: () => void,
    goToContactSection: () => void,
}

export const Hamburger = ({ isPl, texts, goToInfoSection, goToMainSection, goToContactSection }: HamburgerType) => {
    const [showLinks, setShowLinks] = React.useState(false);  

    const mainSectionClick = () => {
        goToMainSection();
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
      <MenuIcon style={{color: '#111'}} onClick={() => setShowLinks(!showLinks)}/>
      <LinksWrapper showLinks={showLinks}>
        <Link onClick={mainSectionClick}>{texts.homeLink}</Link>
        <Link onClick={infoSectionClick}>{texts.ofertLink}</Link>
        <Link onClick={contactSectionClick}>{texts.contact}</Link>
      </LinksWrapper> 
    </TopNav>
  );
}

