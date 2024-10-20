
import FeatBlock from "./components/FeatBlock"
import Slider from "react-slick"
import feats from './data/feats'

const App = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  }

  return (
    <>
      <h1>DAOG Skills</h1>
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