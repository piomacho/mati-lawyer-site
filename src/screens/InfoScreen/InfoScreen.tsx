import React, { useContext } from 'react'; // we need this to make JSX compile
import { ActionAreaCard } from '../../components/InfoCard/InfoCard';
import { ModalComponent } from '../../components/Modal/Modal';
import GlobalState from '../../context/GlobalState';

import { InfoScreenContainer, InfoScreenWrapper, Row, SectionTitle, SectionTitleInfo } from './InfoScreen.style';

export const InfoScreen = () => {
    const { lang } = useContext(GlobalState);
    const { modalType } = useContext(GlobalState);
    const isPl = lang === 'pl';

    const texts: Record<string, string> = {
        sectionTitle: isPl ? 'Oferta' : 'Offer',
        immigrants: isPl ? 'Cudzoziemcy: Pobyt i praca' : 'FOREIGNERS: RESIDENCE AND WORK',
        insurance: isPl ? 'Ubezpieczenia' : 'Insurance',
        passport: isPl ? 'obywatelstwo polskie' : 'Polish citizenship',
        business: isPl ? 'biznes' : 'Business',
        others: isPl ? 'Inne' : 'Other',
    }

    return( 
    <InfoScreenContainer>
     <SectionTitleInfo>{texts.sectionTitle}</SectionTitleInfo>
     <InfoScreenWrapper>
       
       <div>
           {modalType === null ? null : <ModalComponent type={modalType} />}
   
           <Row>
               <ActionAreaCard type="immigrants" title={texts.immigrants}/>
               <ActionAreaCard type="insurance" title={texts.insurance}/>
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
    </InfoScreenContainer>
   )
};
