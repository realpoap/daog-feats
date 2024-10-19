import FeatBlock from "./components/FeatBlock"
import Slider from "react-slick"
import feats from './data/ranged'

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <>
      <h1>DAOG Skills</h1>
      <div className="slider-container">

        <Slider {...settings}>
          <FeatBlock title='ranged' trees={feats.ranged} />
          <FeatBlock title='ranged' trees={feats.ranged} />
          <FeatBlock title='ranged' trees={feats.ranged} />
          <FeatBlock title='ranged' trees={feats.ranged} />
        </Slider>
      </div>
    </>
  )
}

export default App