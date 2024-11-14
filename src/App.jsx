import { useContext, useEffect, useRef, useState } from "react"

import { LanguageContext } from "./store/languageContext"

import Slider from "react-slick"
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

import featsEN from './data/feats-en'
import featsFR from './data/feats-fr'
import { playerFr, playerEng } from './data/master'
import { themeEn, themeFr } from "./data/theme-list"

import StatBlock from "./components/StatBlock"
import FeatBlock from "./components/FeatBlock"


const App = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const { playerMasters, setPlayerMasters } = useContext(LanguageContext)
  const { playerInfo, setPlayerInfo } = useContext(LanguageContext)

  const [feats, setFeats] = useState(featsEN)
  const [themes, setThemes] = useState(null)
  const [open, setOpen] = useState(false)
  const [userData, setUserData] = useState(null)

  const loading = useRef(true)
  const localData = localStorage.getItem('user_stats')
  const localUser = localStorage.getItem('user_info')

  // fetch user data
  useEffect(() => {
    const data = fetchPlayerData()
    setPlayerMasters(data)
    if (localUser) {
      setPlayerInfo(JSON.parse(localUser))
    }
    playerMasters ? loading.current = false : loading.current = true
  }, [language, userData])

  // change language
  useEffect(() => {
    setFeats(language === 'en' ? featsEN : featsFR)
    setThemes(language === 'en' ? themeEn : themeFr)
  }, [language])

  useEffect(() => {
    localStorage.setItem('user_info', JSON.stringify(playerInfo))
  }, [playerInfo])

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

  const updatePlayerInput = (e) => {
    e.preventDefault()
    const property = e.target.name
    property === 'name' ? setPlayerInfo({ ...playerInfo, name: e.target.value }) : setPlayerInfo({ ...playerInfo, level: parseInt(e.target.value) })
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

  if (loading.current) {
    return (
      <div>Loading data...</div>
    )
  } else {

    return (
      <>
        <div className="header">
          <h1>
            <input
              id="name-input"
              className="header-input"
              inputMode="text"
              name="name"
              value={playerInfo.name}
              onChange={updatePlayerInput} />

          </h1>
          <button
            id='lang'
            className='action-btn'
          >
            {language}
          </button>
        </div>
        <button
          id='stats'
          className='action-btn'
          onClick={() => { setOpen(!open) }}>
          {open ? 'Hide Stats' : 'Show Stats'}
        </button>
        <div>
          <label >
            Level
            <input
              id="level-input"
              className="header-input"
              inputMode="decimal"
              type="number"
              name="level"
              value={parseInt(playerInfo.level)}
              onChange={updatePlayerInput}
            />
          </label>
          {<div>
            Techniques :
            <ul>

              {playerInfo.feats.map(f => <li key={`list-${f.title}`}>{f.title}</li>)}
            </ul>
          </div>}
        </div>
        <Collapsible
          open={open}
          revealType='bottomFirst'
        >
          <StatBlock
            masters={playerMasters}
            setUserData={setUserData} />
        </Collapsible>
        <div
          className="slider-container"
        >

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