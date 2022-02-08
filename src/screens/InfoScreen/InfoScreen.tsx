import React from 'react'; // we need this to make JSX compile
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ActionAreaCard } from '../../components/InfoCard/InfoCard';
import { ModalComponent } from '../../components/Modal/Modal';

import { InfoScreenWrapper, Row } from './InfoScreen.style';

export const InfoScreen = () => <InfoScreenWrapper>
    <div>
    <ModalComponent />

    <Row>
        <ActionAreaCard title="Cudzoziemcy: Pobyt i praca"/>
        <ActionAreaCard title="Kursy języka polskiego"/>
    </Row>
  
    <Row>
        <ActionAreaCard title="obywatelstwo polskie"/>
        <ActionAreaCard title="biznes"/>
    </Row>

    <Row>
        <ActionAreaCard title="inne"/>
    </Row>
    </div>

{/* <ContactForm /> */}
  
</InfoScreenWrapper>
