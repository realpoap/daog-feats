import { useContext, useEffect, useState } from "react"

import FeatBlock from "./components/FeatBlock"
import PlayerSkills from "./components/skillSetter"
import { LanguageContext } from "./store/languageContext"

import Slider from "react-slick"
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

import featsEN from './data/feats-en'
import featsFR from './data/feats-fr'


const App = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const [feats, setFeats] = useState(featsEN)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setFeats(language === 'en' ? featsEN : featsFR)
  }, [language])

  console.log('base data: ', feats)


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
        onTransitionStart={(open) => { console.log('Collapsible box used to be', open ? 'open' : 'closed') }}
        onTransitionEnd={(open) => { console.log('Collapsible box is now', open ? 'open' : 'closed') }}
        revealType='bottomFirst'
      >
        <PlayerSkills />
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

export default App