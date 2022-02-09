import { useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import GlobalState from '../../context/GlobalState';
import { Description, Heading, Subtitle } from './Modal.style';

interface TextsType {
  description: Array<{title: string, value: string}>
}
export const ModalComponent = ({ type }: {type: string}) => {
  const { modalType, setModalOpen } = useContext(GlobalState);

  const { lang } = useContext(GlobalState);
  const isPl = lang === 'pl';

  const getPolishTitle = ():string => {
      if(type === 'immigrants'){
        return 'Cudzoziemcy: pobyt i praca'
      }
      return 'Inne'
  }

  const getEnglishTitle = ():string => {
    if(type === 'immigrants'){
      return 'ENG -> Cudzoziemcy: pobyt i praca'
    }
    return 'ENG -> Inne'
}

  const getPolishTexts = (): TextsType => {
    if(type === 'immigrants'){
      return {
        description: [
          {title: 'Imigracja do Polski', value: 'Lorem ipsum ...'},
          {title: 'Wizy', value: 'Jeśli nie korzystasz z możliwości wjazdu w ruchu bezwizowym możemy pomóc Ci w uzyskaniu wizy. Przygotujemy wniosek, zarejestrujemy w systemie, udzielimy wszelkich niezbędnych informacji. Jeśli planujesz dłuższy pobyt możesz go kontynuować na podstawie pobytu czasowego.'},
          {title: 'Zaproszenia', value: 'Jeśli nie korzystasz z możliwości wjazdu w ruchu bezwizowym, ale chcesz przyjechać na rozmowy handlowe, wziąć udział w targach lub odwiedzić krewnych to będziesz potrzebował zaproszenia oraz wizy. Wymaga to zaangażowania i czasu, którego często nie mamy dużo. Możemy pośredniczyć w uzyskaniu zaproszenia, zajmiemy się wszystkimi formalnościami. Mając zaproszenie będziesz mógł ubiegać się o wizę. Jeśli potrzebujesz naszego wsparcia, chętnie Ci go udzielimy.'},
          {title: 'Karta czasowego pobytu', value: 'Zakładamy, że jesteś w Polsce na podstawie wizy, ruchu bezwizowego albo zezwolenia na pobyt czasowy i chcesz przedłużyć swój pobyt. Właściwym krokiem będzie ubieganie się o zezwolenie na pobyt czasowy i kartę czasowego pobytu. Nie jest to łatwe, a dla wielu Cudzoziemców stanowi nie lada wyzwanie. To jest ten moment, kiedy powinieneś zastanowić się nad przekazaniem prowadzenia sprawy doświadczonemu doradcy który pomoże Ci uzyskać kartę czasowego pobytu na okres nawet do 3 lat, zwłaszcza jeśli w perspektywie chcesz uzyskać stały pobyt.'},
          {title: 'Łączenie rodzin', value: 'Jeśli pozostawiłeś w ojczystym kraju najbliższą rodzinę albo rodzina przyjechała do Polski i chce z Tobą zostać, a Ty posiadasz zezwolenie na pobyt czasowy od co najmniej dwóch lat, pobyt stały albo pobyt rezydenta długoterminowego UE, to możesz ubiegać się dla nich o pobyt czasowy w celu połączenia z rodziną. Warto się do tego przygotować, by szansa na wspólny pobyt była większa. Nasze doświadczenie pozwoli Ci zminimalizować ewentualne przeszkody. Jest to bardzo ważne w perspektywie waszego przyszłego pobytu.'},
          {title: 'Pobyt rezydenta długoterminowego UE', value: 'Od Twojego przyjazdu minęło 5 lat, jesteś zatrudniony w Polsce, masz stałe, wystarczające i regularne dochody, wyjeżdżałeś wyłącznie służbowo albo odwiedzałeś rodzinę w ojczystym kraju lub spędzałeś urlop za granicą to czas kiedy warto zastanowić się nad uzyskaniem zezwolenia na pobyt rezydenta długoterminowego UE. Zyskujesz bezterminowe prawo pobytu w UE. Otwierasz nowe możliwości swym bliskim i możesz śmielej myśleć o obywatelstwie polskim.'},
          {title: 'Zezwolenie na pracę', value: 'Jeżeli pracujesz w Polsce, posiadasz zezwolenie na pracę oraz wizę lub zezwolenie na pobyt czasowy a twoja praca ma być kontynuowana to nie będziesz przedłużał zezwolenia na pracę i pobyt osobno tylko wystąpisz o zezwolenie na pobyt i pracę w ramach jednej procedury. Z tej procedury możesz również skorzystać jeśli chcesz rozpocząć pracę w Polsce.'},
          {title: 'Rejestracja pobytu obywatela UE', value: 'Jeśli jesteś obywatelem państwa należącego do UE i zamierzasz w Polsce przebywać dłużej niż 90 dni to masz obowiązek zarejestrowania swojego pobytu. Obowiązek ten dotyczy również członków rodziny towarzyszących Tobie podczas pobytu w Polsce. Jeśli Twój współmałżonek jest z kraju nienależącego do UE powinien wystąpić o wydanie karty pobytu członka rodziny obywatela UE. Pamiętaj, że swoje sprawy możesz powierzyć nam. Zaoszczędzisz cenny czas a Twoje zaangażowanie ograniczy się do niezbędnego minimum.'},
          {title: 'Karta pobytu członka rodziny obywatela UE', value: 'Jeśli jesteś w związku małżeńskim z obywatelem państwa należącego do UE lub EOG a sam nie posiadasz obywatelstwa państwa wymienionych organizacji oraz jeśli oboje zamierzacie pozostać w Polsce to powinniście pomyśleć o zalegalizowaniu pobytu. Ty możesz starać się o wydanie karty członka rodziny obywatela UE, a Twój współmałżonek powinien wystąpić o rejestrację pobyt obywatela UE. W obu przypadkach możemy Wam pomóc.'},
          {title: 'Pobyt stały obywatela UE', value: 'Jeżeli przebywasz w Polsce od 5 lat na podstawie zaświadczenia o zarejestrowaniu pobytu obywatela UE i nie opuszczałeś naszego pięknego kraju na dłużej niż 6 miesięcy w roku, to znaczy, że możesz starać się o pobyt stały. Jeśli opuściłeś Polskę na dłużej niż wspomniane 6 miesięcy, to nie musi to oznaczać, że straciłeś szansę. Jest wiele przyczyn, dla których musiałeś wyjechać, ale przerwy te nie będą miały wpływu na twój nieprzerwany pobyt i staranie się o pobyt stały. Zakładam, że razem z nami osiągniesz cel i będziesz mógł w niedługiej perspektywie pomyśleć o obywatelstwie polskim.'},
          {title: 'Pobyt stały członka rodziny obywatela UE', value: 'Jeśli przebywasz w Polsce od 5 lat na podstawie karty pobytu członka rodziny obywatela UE i nie opuszczałeś naszego pięknego kraju na dłużej niż 6 miesięcy w roku, to możesz starać się o pobyt stały. Jeśli opuściłeś Polskę na dłużej nie musi to oznaczać, że straciłeś szansę. Jest wiele przyczyn, dla których musiałeś wyjechać, ale przerwy te nie będą miały wpływu na twój nieprzerwany pobyt. Zakładam, że razem z nami otrzymasz stały pobyt i będziesz mógł w niedługiej perspektywie pomyśleć o obywatelstwie polskim. Możesz też pozostać przy pobycie stałym. Dajesz sobie wiele możliwości na przyszłość.'},
          {title: 'Audyt', value: 'Tą usługę kierujemy zarówno do Cudzoziemców jak i do firm, w których pracują Cudzoziemcy. Audyt dla Cudzoziemców przeprowadzany jest pod kątem możliwości uzyskania zezwoleń na pobyt rezydenta długoterminowego UE, czy uznania za obywatela polskiego. Audyt oprócz sprawdzenia czy Cudzoziemiec spełnia wymogi formalne będzie zawierał nasze uwagi co należy poprawić lub zmienić, żeby w przyszłości realizacja określonego celu była możliwa. Audyt dla firm związany jest z badaniem dokumentacji kadrowej pod kątem zgodności z przepisami regulującymi pracę i pobyt Cudzoziemców w Polsce. Nasze badanie kończy się sporządzeniem raportu. W przypadku stwierdzenia nieprawidłowości możecie państwo otrzymać nasze wsparcie w ich usunięciu.'},
          {title: 'Wykaz', value: 'Jeśli odmówiono Ci wizy lub nie zezwolono na wjazd do Polski, może to oznaczać, że Twoje dane są w wykazie cudzoziemców niepożądanych na terytorium Polski lub w Systemie Informacji Schengen. Aby to potwierdzić albo wykluczyć musisz mieć pełnomocnika, który będzie Ciebie reprezentował lub na którego adres będzie kierowana korespondencja zUrzędu do Spraw Cudzoziemców. Może okazać się że Twoje dane figurują systemie pomimo upływu terminu wpisu. W tej sytuacji możemy w twoim imieniu wystąpić o ich wykreślenie.'},
          {title: 'Doradztwo', value: 'Czasami będziesz miał wątpliwości, pojawią się pytania, otrzymana przez Ciebie decyzja będzie negatywna, zabraknie Ci pomysłów co zrobić lub nie będziesz pewny – możesz zawsze skonsultować się z nami. Doradzimy Ci, wyjaśnimy jakie są za i przeciw, pomożemy wybrać najlepsze rozwiązanie Twojego problemu. Z nami możesz zaplanować swoją przyszłość i przyszłość swoich bliskich. Dowiesz się na co zwrócić uwagę, żeby osiągnąć swój cel, którym może być między innymi uzyskanie stałego pobytu, statusu rezydenta czy polskiego obywatelstwa. Jeśli chcesz zrobić to szybko i bez zbędnej zwłoki zrób to z nami!'},

        ]
      }
    } else  {
      return {
        description: [
          {title: 'Dlaczego my?', value: 'Wychodząc naprzeciw potrzebom i zainteresowaniom naszych klientów, poszerzyliśmy usługi o kursy języka polskiego, na które serdecznie wszystkich zapraszamy! \nCo czyni naszą ofertę wyjątkową? W obrębie prawa migracyjnego działamy już 17 lat i doskonale wiemy czego potrzebują nasi klienci w zakresie znajomości polskiej kultury i języka! Prowadzone przez nas kursy zostały opracowane z myślą o indywidualnym podejściu do Słuchacza. Program dostosowujemy więc do określonego przez Ciebie celu. \nTo co czyni naszą ofertę wyjątkową to zajęcia szyte na miarę!'},
        ]
      }
     
    }
  }

  const getEnglishTexts = (): TextsType => {
    if(type === 'immigrants'){
      return {
        description: [
          {title: 'ENG-  Imigracja do Polski', value: ' ENG- Lorem ipsum ...'},
          {title: 'ENG-  Wizy', value: ' ENG- Jeśli nie korzystasz z możliwości wjazdu w ruchu bezwizowym możemy pomóc Ci w uzyskaniu wizy. Przygotujemy wniosek, zarejestrujemy w systemie, udzielimy wszelkich niezbędnych informacji. Jeśli planujesz dłuższy pobyt możesz go kontynuować na podstawie pobytu czasowego.'},
          {title: 'ENG- Zaproszenia', value: 'ENG- Jeśli nie korzystasz z możliwości wjazdu w ruchu bezwizowym, ale chcesz przyjechać na rozmowy handlowe, wziąć udział w targach lub odwiedzić krewnych to będziesz potrzebował zaproszenia oraz wizy. Wymaga to zaangażowania i czasu, którego często nie mamy dużo. Możemy pośredniczyć w uzyskaniu zaproszenia, zajmiemy się wszystkimi formalnościami. Mając zaproszenie będziesz mógł ubiegać się o wizę. Jeśli potrzebujesz naszego wsparcia, chętnie Ci go udzielimy.'},
          {title: 'ENG- Karta czasowego pobytu', value: 'ENG- Zakładamy, że jesteś w Polsce na podstawie wizy, ruchu bezwizowego albo zezwolenia na pobyt czasowy i chcesz przedłużyć swój pobyt. Właściwym krokiem będzie ubieganie się o zezwolenie na pobyt czasowy i kartę czasowego pobytu. Nie jest to łatwe, a dla wielu Cudzoziemców stanowi nie lada wyzwanie. To jest ten moment, kiedy powinieneś zastanowić się nad przekazaniem prowadzenia sprawy doświadczonemu doradcy który pomoże Ci uzyskać kartę czasowego pobytu na okres nawet do 3 lat, zwłaszcza jeśli w perspektywie chcesz uzyskać stały pobyt.'},
          {title: 'ENG- Łączenie rodzin', value: 'ENG- Jeśli pozostawiłeś w ojczystym kraju najbliższą rodzinę albo rodzina przyjechała do Polski i chce z Tobą zostać, a Ty posiadasz zezwolenie na pobyt czasowy od co najmniej dwóch lat, pobyt stały albo pobyt rezydenta długoterminowego UE, to możesz ubiegać się dla nich o pobyt czasowy w celu połączenia z rodziną. Warto się do tego przygotować, by szansa na wspólny pobyt była większa. Nasze doświadczenie pozwoli Ci zminimalizować ewentualne przeszkody. Jest to bardzo ważne w perspektywie waszego przyszłego pobytu.'},
          {title: 'ENG- Pobyt rezydenta długoterminowego UE', value: 'ENG- Od Twojego przyjazdu minęło 5 lat, jesteś zatrudniony w Polsce, masz stałe, wystarczające i regularne dochody, wyjeżdżałeś wyłącznie służbowo albo odwiedzałeś rodzinę w ojczystym kraju lub spędzałeś urlop za granicą to czas kiedy warto zastanowić się nad uzyskaniem zezwolenia na pobyt rezydenta długoterminowego UE. Zyskujesz bezterminowe prawo pobytu w UE. Otwierasz nowe możliwości swym bliskim i możesz śmielej myśleć o obywatelstwie polskim.'},
          {title: 'ENG- Zezwolenie na pracę', value: 'ENG-Jeżeli pracujesz w Polsce, posiadasz zezwolenie na pracę oraz wizę lub zezwolenie na pobyt czasowy a twoja praca ma być kontynuowana to nie będziesz przedłużał zezwolenia na pracę i pobyt osobno tylko wystąpisz o zezwolenie na pobyt i pracę w ramach jednej procedury. Z tej procedury możesz również skorzystać jeśli chcesz rozpocząć pracę w Polsce.'},
          {title: 'ENG- Rejestracja pobytu obywatela UE', value: 'ENG-Jeśli jesteś obywatelem państwa należącego do UE i zamierzasz w Polsce przebywać dłużej niż 90 dni to masz obowiązek zarejestrowania swojego pobytu. Obowiązek ten dotyczy również członków rodziny towarzyszących Tobie podczas pobytu w Polsce. Jeśli Twój współmałżonek jest z kraju nienależącego do UE powinien wystąpić o wydanie karty pobytu członka rodziny obywatela UE. Pamiętaj, że swoje sprawy możesz powierzyć nam. Zaoszczędzisz cenny czas a Twoje zaangażowanie ograniczy się do niezbędnego minimum.'},
          {title: 'ENG- Karta pobytu członka rodziny obywatela UE', value: 'ENG-Jeśli jesteś w związku małżeńskim z obywatelem państwa należącego do UE lub EOG a sam nie posiadasz obywatelstwa państwa wymienionych organizacji oraz jeśli oboje zamierzacie pozostać w Polsce to powinniście pomyśleć o zalegalizowaniu pobytu. Ty możesz starać się o wydanie karty członka rodziny obywatela UE, a Twój współmałżonek powinien wystąpić o rejestrację pobyt obywatela UE. W obu przypadkach możemy Wam pomóc.'},
          {title: 'ENG- Pobyt stały obywatela UE', value: 'ENG-Jeżeli przebywasz w Polsce od 5 lat na podstawie zaświadczenia o zarejestrowaniu pobytu obywatela UE i nie opuszczałeś naszego pięknego kraju na dłużej niż 6 miesięcy w roku, to znaczy, że możesz starać się o pobyt stały. Jeśli opuściłeś Polskę na dłużej niż wspomniane 6 miesięcy, to nie musi to oznaczać, że straciłeś szansę. Jest wiele przyczyn, dla których musiałeś wyjechać, ale przerwy te nie będą miały wpływu na twój nieprzerwany pobyt i staranie się o pobyt stały. Zakładam, że razem z nami osiągniesz cel i będziesz mógł w niedługiej perspektywie pomyśleć o obywatelstwie polskim.'},
          {title: 'ENG- Pobyt stały członka rodziny obywatela UE', value: 'ENG-Jeśli przebywasz w Polsce od 5 lat na podstawie karty pobytu członka rodziny obywatela UE i nie opuszczałeś naszego pięknego kraju na dłużej niż 6 miesięcy w roku, to możesz starać się o pobyt stały. Jeśli opuściłeś Polskę na dłużej nie musi to oznaczać, że straciłeś szansę. Jest wiele przyczyn, dla których musiałeś wyjechać, ale przerwy te nie będą miały wpływu na twój nieprzerwany pobyt. Zakładam, że razem z nami otrzymasz stały pobyt i będziesz mógł w niedługiej perspektywie pomyśleć o obywatelstwie polskim. Możesz też pozostać przy pobycie stałym. Dajesz sobie wiele możliwości na przyszłość.'},
          {title: 'ENG- Audyt', value: 'ENG-Tą usługę kierujemy zarówno do Cudzoziemców jak i do firm, w których pracują Cudzoziemcy. Audyt dla Cudzoziemców przeprowadzany jest pod kątem możliwości uzyskania zezwoleń na pobyt rezydenta długoterminowego UE, czy uznania za obywatela polskiego. Audyt oprócz sprawdzenia czy Cudzoziemiec spełnia wymogi formalne będzie zawierał nasze uwagi co należy poprawić lub zmienić, żeby w przyszłości realizacja określonego celu była możliwa. Audyt dla firm związany jest z badaniem dokumentacji kadrowej pod kątem zgodności z przepisami regulującymi pracę i pobyt Cudzoziemców w Polsce. Nasze badanie kończy się sporządzeniem raportu. W przypadku stwierdzenia nieprawidłowości możecie państwo otrzymać nasze wsparcie w ich usunięciu.'},
          {title: 'ENG- Wykaz', value: 'ENG-Jeśli odmówiono Ci wizy lub nie zezwolono na wjazd do Polski, może to oznaczać, że Twoje dane są w wykazie cudzoziemców niepożądanych na terytorium Polski lub w Systemie Informacji Schengen. Aby to potwierdzić albo wykluczyć musisz mieć pełnomocnika, który będzie Ciebie reprezentował lub na którego adres będzie kierowana korespondencja zUrzędu do Spraw Cudzoziemców. Może okazać się że Twoje dane figurują systemie pomimo upływu terminu wpisu. W tej sytuacji możemy w twoim imieniu wystąpić o ich wykreślenie.'},
          {title: 'ENG- Doradztwo', value: 'ENG-Czasami będziesz miał wątpliwości, pojawią się pytania, otrzymana przez Ciebie decyzja będzie negatywna, zabraknie Ci pomysłów co zrobić lub nie będziesz pewny – możesz zawsze skonsultować się z nami. Doradzimy Ci, wyjaśnimy jakie są za i przeciw, pomożemy wybrać najlepsze rozwiązanie Twojego problemu. Z nami możesz zaplanować swoją przyszłość i przyszłość swoich bliskich. Dowiesz się na co zwrócić uwagę, żeby osiągnąć swój cel, którym może być między innymi uzyskanie stałego pobytu, statusu rezydenta czy polskiego obywatelstwa. Jeśli chcesz zrobić to szybko i bez zbędnej zwłoki zrób to z nami!'},

        ]
      }
    } else  {
      return {
        description: [
          {title: 'ENG- Dlaczego my?', value: 'Wychodząc naprzeciw potrzebom i zainteresowaniom naszych klientów, poszerzyliśmy usługi o kursy języka polskiego, na które serdecznie wszystkich zapraszamy! \nCo czyni naszą ofertę wyjątkową? W obrębie prawa migracyjnego działamy już 17 lat i doskonale wiemy czego potrzebują nasi klienci w zakresie znajomości polskiej kultury i języka! Prowadzone przez nas kursy zostały opracowane z myślą o indywidualnym podejściu do Słuchacza. Program dostosowujemy więc do określonego przez Ciebie celu. \nTo co czyni naszą ofertę wyjątkową to zajęcia szyte na miarę!'},
        ]
      }
     
    }
  }

  const descriptions = isPl ? getPolishTexts().description : getEnglishTexts().description;
  if(setModalOpen === undefined) {
    return null;
  }
  return (
    <div>
      <Modal open={modalType !== null} onClose={() => setModalOpen(null)} center>
        <Heading>{isPl ? getPolishTitle() : getEnglishTitle()}</Heading>
        <div>{descriptions.map(e => {
          return (<div>
            <Subtitle>{e.title}</Subtitle>
            <Description>{e.value}</Description>
          </div>)
        })}</div>
      </Modal>
    </div>
  );
};