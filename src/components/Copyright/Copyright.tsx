import React, { useContext } from 'react'
import GlobalState from '../../context/GlobalState';
import { CopyRightWrapper } from './Copyright.style';

export const Copyright = () => {
    const { lang } = useContext(GlobalState);
    const isPl = lang === 'pl';
    return (
        <CopyRightWrapper>{isPl ? '© Help for Foreigners Law & Insurance. Wszelkie prawa zastrzeżone.' : '© Help for Foreigners Law & Insurance. All rights reserved.'}</CopyRightWrapper>
    )
}
