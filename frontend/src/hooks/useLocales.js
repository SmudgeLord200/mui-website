import { useContext } from "react";
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageContext from '../context/LanguageContext'
import { enUS, zhHK, zhCN } from '@mui/material/locale';


const useLocales = () => {
    const context = useContext(LanguageContext);
    const { i18n, t } = useTranslation();
    const currentLangStorage = localStorage.getItem('i18nextLng');

    const LANGS = [
        {
            label: t('English'),
            mappingValue: 'enUS',
            value: 'enUS',
            systemValue: enUS,
        },
        {
            label: t('Chinese (Hong Kong)'),
            mappingValue: 'zhHK',
            value: 'zhHK',
            systemValue: zhHK,
        },
        {
            label: t('Chinese (Simplified)'),
            mappingValue: 'zhCN',
            value: 'zhCN',
            systemValue: zhCN,
        },
    ];

    const systemLang = (lang) => LANGS.find((langToFind) => langToFind.mappingValue === lang) || LANGS[0]; //TODO: change LANGS[0] to [1] as Chinese

    const currentLang = LANGS.find((langToFind) => langToFind.value === currentLangStorage) || LANGS[0] //TODO: change LANGS[0] to [1] as Chinese

    const handleChangeLang = (newLang) => {
        console.log('newlang ', newLang)
        i18n.changeLanguage(newLang.value);
        context.setLangMode(newLang.systemValue);
    }

    return {
        onChangeLang: handleChangeLang,
        allLang: LANGS,
        t,
        enUS,
        currentLang,
        systemLang,
    }
}

export default useLocales;