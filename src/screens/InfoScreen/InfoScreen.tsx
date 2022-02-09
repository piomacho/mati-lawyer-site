import React, { useContext } from 'react'; // we need this to make JSX compile
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ActionAreaCard } from '../../components/InfoCard/InfoCard';
import { ModalComponent } from '../../components/Modal/Modal';
import GlobalState from '../../context/GlobalState';

import { InfoScreenWrapper, Row } from './InfoScreen.style';

export const InfoScreen = () => {
    const { modalType, setModalOpen } = useContext(GlobalState);
    
    return( <InfoScreenWrapper>
    
    <div>
        {modalType === null ? null : <ModalComponent type={modalType} />}

        <Row>
            <ActionAreaCard type="immigrants" title="Cudzoziemcy: Pobyt i praca"/>
            <ActionAreaCard type="polish-courses" title="Kursy języka polskiego"/>
        </Row>
    
        <Row>
            <ActionAreaCard type="passport" title="obywatelstwo polskie"/>
            <ActionAreaCard type="business" title="biznes"/>
        </Row>

        <Row>
            <ActionAreaCard type="others" title="inne"/>
        </Row>
    </div>

{/* <ContactForm /> */}
  
</InfoScreenWrapper>)
};
