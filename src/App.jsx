import { useContext, useEffect, useState } from "react"
import FeatBlock from "./components/FeatBlock"
import Slider from "react-slick"

import featsEN from './data/feats-en'
import featsFR from './data/feats-fr'
import { LanguageContext } from "./store/languageContext"

const App = () => {
  const { language, languageData, setLanguage } = useContext(LanguageContext)
  const [feats, setFeats] = useState(featsEN)

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
      <h1>DAOG Skills</h1>
      <button onClick={handleToggleLang}>{language}</button>
      <div className="slider-container">

        <Slider {...settings}>
          <FeatBlock title='ranged' trees={feats.ranged} />
          <FeatBlock title='brawl' trees={feats.fists} />
          {/* <FeatBlock title='ranged' trees={feats.fight} />
          <FeatBlock title='ranged' trees={feats.wizardry} /> */}
        </Slider>
      </div>
    </>
  )
}

export default App