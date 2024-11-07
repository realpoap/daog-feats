import { createContext, useState } from 'react';

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('en')
	const [playerMasters, setPlayerMasters] = useState({})
	return (
		<LanguageContext.Provider value={{ language, setLanguage, playerMasters, setPlayerMasters }}>
			{children}
		</LanguageContext.Provider>
	)
}

export { LanguageContext, LanguageProvider }