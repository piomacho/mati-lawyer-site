import React, { useContext } from 'react'; // we need this to make JSX compile
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ActionAreaCard } from '../../components/InfoCard/InfoCard';
import { ModalComponent } from '../../components/Modal/Modal';
import GlobalState from '../../context/GlobalState';

import { InfoScreenWrapper, Row, SectionTitle } from './InfoScreen.style';

export const InfoScreen = () => {
    const { lang } = useContext(GlobalState);
    const { modalType, setModalOpen } = useContext(GlobalState);
    const isPl = lang === 'pl';

    const texts: Record<string, string> = {
        sectionTitle: isPl ? 'Oferta' : 'Offer',
        immigrants: isPl ? 'Cudzoziemcy: Pobyt i praca' : 'FOREIGNERS: RESIDENCE AND WORK',
        polishLessons: isPl ? 'Kursy języka polskiego' : 'Polish LANGUAGE COURSES',
        passport: isPl ? 'obywatelstwo polskie' : 'Polish citizenship',
        business: isPl ? 'biznes' : 'Business',
        others: isPl ? 'others' : 'Other',
    }

    return( 
    <div style={{backgroundColor: '#000'}}>
     <SectionTitle themeDark={false}>{texts.sectionTitle}</SectionTitle>
     <InfoScreenWrapper>
       
       <div>
           {modalType === null ? null : <ModalComponent type={modalType} />}
   
           <Row>
               <ActionAreaCard type="immigrants" title={texts.immigrants}/>
               <ActionAreaCard type="polish-courses" title={texts.polishLessons}/>
           </Row>
       
           <Row>
               <ActionAreaCard type="passport" title={texts.passport}/>
               <ActionAreaCard type="business" title={texts.business}/>
           </Row>
   
           <Row>
               <ActionAreaCard type="others" title={texts.others}/>
           </Row>
       </div>
   
   {/* <ContactForm /> */}
     
   </InfoScreenWrapper>
    </div>
   )
};
