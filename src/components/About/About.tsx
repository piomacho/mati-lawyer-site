import React from 'react'; // we need this to make JSX compile
import { AboutText, AboutWrapper, Name } from './About.style';

type CardProps = {
  title: string,
  paragraph: string
}

export const About = () => {
    return (
        <AboutWrapper>
            <Name>Mateusz Kozlowski</Name>
            <AboutText>
                Weź biznes w swoje ręce.
                Kwestie prawne pozostaw naszym specjalistom.
            </AboutText>
        </AboutWrapper>
      
    )
}
