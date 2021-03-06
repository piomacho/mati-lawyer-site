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
        description: isPl ? `Prawnik, absolwent Wydziału Prawa, Administracji i Stosunków Międzynarodowych Krakowskiej Akademii im. Andrzej Frycza Modrzewskiego w& nbsp;
    Krakowie.\nDotychczasowe doświadczenie zawodowe zdobywał w krakowskich i warszawskich kancelariach, gdzie zajmował sięw szczególności sprawami z zakresu prawa karnego oraz legalizacją pobytu i zatrudnienia cudzoziemców.\nW Help For Foreigners odpowiedzialny jest za weryfikację legalności pobytu i pracy cudzoziemców w Polsce, analizę stanu faktycznego i wybór optymalnej i dopuszczalnej procedury legalizacji, sporządzenie \ni skompletowanie wszelkiej niezbędnej dokumentacji w procedurze legalizacyjnej, reprezentację pracodawcy oraz cudzoziemca w postępowaniu administracyjnym o wydanie stosownych zaświadczeń, zgód i pozwoleń. ` :
            'Lawyer, graduate of the Wydział Prawa, Administracji i Stosunków Międzynarodowych Krakowskiej Akademii im. Andrzeja Frycza Modrzewskiego w Krakowie.\nHe has gained his professional experience in Krakow and Warsaw law firms, where he dealt in particular with cases in the field of criminal law and the legalization of stay and employment of foreigners.\nAt Help For Foreigners, he is responsible for the verification of the legality of the stay and work of foreigners in Poland, analysis of the facts and selection of the optimal and acceptable legalization procedure, preparation and completion of all necessary documentation in the legalization procedure, representation of the employers and foreigners in administrative proceedings for the issuance of relevant certificates, consents and permits.',
    }

    return (
        <AboutWrapper>
            {isPl ?
                <AboutText>
                    Prawnik, absolwent Wydziału Prawa, Administracji i Stosunków Międzynarodowych Krakowskiej Akademii im. Andrzej Frycza Modrzewskiego&nbsp;w&nbsp;
                    Krakowie.<br />Dotychczasowe doświadczenie zawodowe zdobywał&nbsp;w&nbsp;krakowskich&nbsp;i&nbsp;warszawskich kancelariach, gdzie zajmował się&nbsp;w&nbsp;szczególności sprawami&nbsp;z&nbsp;zakresu prawa karnego oraz legalizacją pobytu&nbsp;i&nbsp;zatrudnienia cudzoziemców.<br />W Help For Foreigners odpowiedzialny jest za weryfikację legalności pobytu&nbsp;i&nbsp;pracy cudzoziemców w Polsce, analizę stanu faktycznego&nbsp;i&nbsp;wybór optymalnej&nbsp;i&nbsp;dopuszczalnej procedury legalizacji, sporządzenie&nbsp;i&nbsp;skompletowanie wszelkiej niezbędnej dokumentacji&nbsp;w&nbsp;procedurze legalizacyjnej, reprezentację pracodawcy oraz cudzoziemca&nbsp;w&nbsp;postępowaniu administracyjnym&nbsp;o&nbsp;wydanie stosownych zaświadczeń, zgód&nbsp;i&nbsp;pozwoleń.
                </AboutText> :
                <AboutText>
                    Lawyer, graduate of the Wydział Prawa, Administracji i Stosunków Międzynarodowych Krakowskiej Akademii im. Andrzeja Frycza Modrzewskiego w Krakowie.<br />He has gained his professional experience in Krakow and Warsaw law firms, where he dealt in particular with cases in the field of criminal law and the legalization of stay and employment of foreigners.<br />At Help For Foreigners, he is responsible for the verification of the legality of the stay and work of foreigners in Poland, analysis of the facts and selection of the optimal and acceptable legalization procedure, preparation and completion of all necessary documentation in the legalization procedure, representation of the employers and foreigners in administrative proceedings for the issuance of relevant certificates, consents and permits.
                </AboutText>}
        </AboutWrapper>

    )
}
