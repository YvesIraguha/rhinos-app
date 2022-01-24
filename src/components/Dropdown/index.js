import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DropDown = () => {
    const [language, setLanguage] = useState('en');
    const {t, i18n } = useTranslation();

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value)
    }
    useEffect(() => {
        const currentLang = localStorage.getItem('i18nextLng');
        setLanguage(currentLang)
    },[]);
    return (
        <select className="container w-48 p-2 pr-0 bg-white rounded-lg shadow-md"
        value={language}
        onChange={handleChange}
        >
            <option value={'en'}>{t('English')}</option>
            <option value={'fr'}>{t('French')}</option>
            <option value={'rw'}>{t('Kinyarwanda')}</option>
            <option value={'sw'}>{t('Swahili')}</option>
        </select> 
     );
}
 
export default DropDown;