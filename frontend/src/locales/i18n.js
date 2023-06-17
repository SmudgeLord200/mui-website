import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocales from './enUS.json'
import znHKLocales from './zhHK.json'
import zhCNLocales from './zhCN.json'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources: {
            enUS: { translations:  enLocales  },
            zhHK: { translations:  znHKLocales  },
            zhCN: { translations:  zhCNLocales  },
        },
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        lng: localStorage.getItem('i18nextLng') || 'enUS', //TODO: change primary lang to Traditional Chinese
        fallbackLng: "enUS",
        ns: ['translations'],
        defaultNS: 'translations',
        saveMissing: false,
        returnObjects: true,
        debug: false,
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        // react: {
        //     useSuspense: true, 
        // },
    });

export default i18n;