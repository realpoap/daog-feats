import { useContext, useEffect, useRef, useState } from "react"

import { LanguageContext } from "./store/languageContext"

import Slider from "react-slick"
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

import featsEN from './data/feats-en'
import featsFR from './data/feats-fr'
import { playerFr, playerEng } from './data/master'
import { themeFr } from "./data/theme-list"

import StatBlock from "./components/StatBlock"
import FeatBlock from "./components/FeatBlock"


const App = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const { playerMasters, setPlayerMasters } = useContext(LanguageContext)

  const [feats, setFeats] = useState(featsEN)
  const [open, setOpen] = useState(false)
  const [userData, setUserData] = useState(null)

  const loading = useRef(true)
  const localData = localStorage.getItem('user_stats')

  const themes = themeFr

  useEffect(() => {
    const data = fetchPlayerData()
    setPlayerMasters(data)
    //Object.keys(playerMasters).length !== 0 ? loading.current = false : loading.current = true
  }, [language, userData])

  useEffect(() => {
    setFeats(language === 'en' ? featsEN : featsFR)
  }, [language])

  // console.log('base data: ', feats)

  const mergeMasterArrays = (keys, values) => {
    if (keys.length !== values.length) {
      throw new Error("The number of keys and values must be the same.")
    }
    const mergedMap = keys.reduce((map, key, index) => {
      map[key] = values[index];
      return map
    }, {})
    return mergedMap
  }

  const fetchPlayerData = () => {
    const keys = (language === 'en' ? Object.keys(playerEng) : Object.keys(playerFr))
    const values = localData ? Object.values(JSON.parse(localStorage.getItem('user_stats'))) : new Array(keys.length).fill(0);
    const newObject = mergeMasterArrays(keys, values)
    return newObject
  }

  const handleToggleLang = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en'
    setLanguage(newLanguage)
    setFeats(language === 'en' ? featsEN : featsFR)
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  }

  if (!loading.current) {
    return (
      <div>Loading data...</div>
    )
  } else {

    return (
      <>
        <div className="header">
          <h1>DAOG Skills</h1>
          <button id='lang' className='action-btn' onClick={handleToggleLang}>{language}</button>
        </div>
        <button
          id='stats'
          className='action-btn'
          onClick={() => { setOpen(!open) }}>
          {open ? 'Hide Stats' : 'Show Stats'}
        </button>
        <Collapsible
          open={open}
          revealType='bottomFirst'
        >
          <StatBlock
            masters={playerMasters}
            setUserData={setUserData} />
        </Collapsible>
        <div className="slider-container">

          <Slider {...settings}>
            {themes.map((theme, i = 0) =>
              <FeatBlock
                key={i}
                title={theme.theme}
                trees={feats[theme.theme]}
              />
            )
            }
          </Slider>
        </div>
      </>
    )
  }

}

export default App