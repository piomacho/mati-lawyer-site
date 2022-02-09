import React from 'react'; 
interface GlobalStateType {
    lang: string,
    modalType: string | null,
    setLang?: (lang: string) => void
    setModalOpen?: (val: string | null) => void;
}
export const defaultState = {
    lang: 'pl',
    modalType: null,
}
const GlobalState = React.createContext<GlobalStateType>({lang: 'pl', modalType: null}); 

export default GlobalState;