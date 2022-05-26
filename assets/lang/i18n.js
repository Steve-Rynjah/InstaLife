import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import * as RNLocalize from "react-native-localize";
import  AsyncStorage from '@react-native-async-storage/async-storage'

import english from './english.json'
import french from './french.json'

const languageDetector = {
    type:'languageDetector',
    async:true,
    detect: async (callback)=>{
        const savedDataJSON = await AsyncStorage.getItem('@APP:languageCode');
        const lng = (savedDataJSON) ? savedDataJSON: null;
        const selectLanguage = lng || RNLocalize.getLocales()[0].languageCode
        console.log('detect - selectLanguage:', selectLanguage);

        return callback(selectLanguage)
    },
    init:()=>{},
    cacheUserLanguage:() => {}
}

i18next
.use(languageDetector)
.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources:{
        en: english,
        fr: french
    },
    react: {
        useSuspense: false
    }
})

export default i18next;