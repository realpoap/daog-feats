import { createContext, useState } from 'react';

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {

	//TODO: implement translator: https://github.com/andreasremdt/simple-translator?tab=readme-ov-file
	const [language, setLanguage] = useState('fr')
	const [playerMasters, setPlayerMasters] = useState({})
	const [playerInfo, setPlayerInfo] =
		useState(
			{
				name: '',
				level: 1,
				attackType: '',
				feats: []
			}
		)

	return (
		<LanguageContext.Provider value={{ language, setLanguage, playerMasters, setPlayerMasters, playerInfo, setPlayerInfo }}>
			{children}
		</LanguageContext.Provider>
	)
}

export { LanguageContext, LanguageProvider }