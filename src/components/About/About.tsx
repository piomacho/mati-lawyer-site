import React, { useContext } from 'react'; // we need this to make JSX compile
import GlobalState from '../../context/GlobalState';
import { AboutText, AboutWrapper, Name } from './About.style';

type CardProps = {
  title: string,
  paragraph: string
}

export const About = () => {
    const { lang } = useContext(GlobalState);
    const isPl = lang === 'pl';
    const texts: Record<string, string> = {
        description: isPl ? 'Weź biznes w swoje ręce. Kwestie prawne pozostaw naszym specjalistom.' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
    
    return (
        <AboutWrapper>
            <Name>Mateusz Kozłowski</Name>
            <AboutText>
               {texts.description}
            </AboutText>
        </AboutWrapper>
      
    )
}
