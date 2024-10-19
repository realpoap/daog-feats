import FeatBlock from "./components/FeatBlock"
import feats from './data/ranged'

const App = () => {

  return (
    <div>
      <h1>DAOG Skills</h1>
      <FeatBlock title='ranged' trees={feats.ranged} />
    </div>
  )
}

export default App