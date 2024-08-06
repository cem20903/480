import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";
import es from "./translations/es";

const INITIAL_LANGUAGE = "en";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		es: {
			translation: es,
		},
	},
	fallbackLng: INITIAL_LANGUAGE,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
