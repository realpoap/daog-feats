import { useContext, useEffect, useRef, useState } from "react"

import FeatBlock from "./components/FeatBlock"
import PlayerSkills from "./components/skillSetter"
import { LanguageContext } from "./store/languageContext"

import Slider from "react-slick"
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

import featsEN from './data/feats-en'
import featsFR from './data/feats-fr'
import { playerFr, playerEng } from './data/master'


const App = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const { playerMasters, setPlayerMasters } = useContext(LanguageContext)
  const [userData, setUserData] = useState(null)
  const [feats, setFeats] = useState(featsEN)
  const [open, setOpen] = useState(false)

  const loading = useRef(true)

  useEffect(() => {
    setFeats(language === 'en' ? featsEN : featsFR)
    const playerData = fetchPlayerData()
    console.log('playerData:', playerData);
    setPlayerMasters(playerData)
    console.log('player masters are:', playerMasters);
    playerMasters ? loading.current = false : loading.current = true
  }, [language, userData])
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
    const values = userData ? Object.values(JSON.parse(localStorage.getItem('user_stats'))) : new Array(keys.length).fill(0);
    console.log('values for masters: ', values);
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

  if (loading.current) {
    return (
      <div>Loading data...</div>
    )
  } else {

    return (
      <>
        <div className="header">
          <h1>DAOG Skills</h1>
          <button className='language-btn' onClick={handleToggleLang}>{language}</button>
        </div>
        <button className='language-btn' onClick={() => { setOpen(!open) }}>
          {open ? 'Hide Stats' : 'Show Stats'}
        </button>
        <Collapsible
          open={open}
          revealType='bottomFirst'
        >
          <PlayerSkills masters={playerMasters} setUserData={setUserData} />
        </Collapsible>
        <div className="slider-container">

          <Slider {...settings}>
            <FeatBlock title={language === 'en' ? 'ranged' : 'tir'} trees={feats.ranged} />
            <FeatBlock title={language === 'en' ? 'brawl' : 'bagarre'} trees={feats.fists} />
            {/* <FeatBlock title='ranged' trees={feats.fight} />
            <FeatBlock title='ranged' trees={feats.wizardry} /> */}
          </Slider>
        </div>
      </>
    )
  }

}

export default App