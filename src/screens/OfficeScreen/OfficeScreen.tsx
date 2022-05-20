import React, { useContext } from 'react'; // we need this to make JSX compile
import { ActionAreaCard } from '../../components/InfoCard/InfoCard';
import { ModalComponent } from '../../components/Modal/Modal';
import GlobalState from '../../context/GlobalState';

import { ColorfullBar, InfoScreenContainer, InfoScreenWrapper, ListItem, ListTitle, ListWrapper, Row, SectionTitle, SectionTitleInfo, Title } from './OfficeScreen.style';

export const OfficeScreen = () => {
    const { lang } = useContext(GlobalState);
    const { modalType } = useContext(GlobalState);
    const isPl = lang === 'pl';

    const texts: Record<string, string> = {
        sectionTitle: isPl ? 'O nas' : 'About company',
        is: isPl ? 'Help For Foreigners Law & Insurance to:' : 'Help For Foreigners Law & Insurance is:',
        manyYears: isPl ? 'wieloletnie doświadczenie' : 'many years of experience',
        approach: isPl ? 'świeże i otwarte podejście do potrzeb naszych Klientów' : 'a fresh and open approach to the needs of our clients',
        team: isPl ? 'zespół wzajemnie uzupełniających się specjalistów' : 'a team of complementary specialists',
        services: isPl ? 'szeroki zakres świadczonych usług' : 'a wide range of services provided',
        analysis: isPl ? 'wnikliwa analiza przedstawionych zagadnień' : 'thorough analysis of the presented issues',
        speed: isPl ? 'szybkość działania' : 'speed of action',
        transparency: isPl ? 'przejrzyste zasady rozliczeń' : 'transparent rules of settlements',
    }

    return (
        <InfoScreenContainer>
            <InfoScreenWrapper>
                <ColorfullBar />
                <Title>{texts.sectionTitle}</Title>
                <ListWrapper>
                    <ListTitle>{texts.is}</ListTitle>
                    <ul>
                        <ListItem>{texts.manyYears}</ListItem>
                        <ListItem>{texts.approach}</ListItem>
                        <ListItem>{texts.team}</ListItem>
                        <ListItem>{texts.services}</ListItem>
                        <ListItem>{texts.analysis}</ListItem>
                        <ListItem>{texts.speed}</ListItem>
                        <ListItem>{texts.transparency}</ListItem>
                    </ul>
                </ListWrapper>
            </InfoScreenWrapper>
        </InfoScreenContainer>
    )
};





