import { createContext, useEffect, useState } from 'react';



const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('en')
	const [languageData, setLanguageData] = useState({})


	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export { LanguageContext, LanguageProvider }