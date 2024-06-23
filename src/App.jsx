
import { useState } from "react"
import Fixdata from "./components/fixData"
import Maps from "./components/maps"




function App() {
  //MY STATE
  const [city, setCity] = useState("london")
  const [coord, setCoord] = useState({ lon: null, lat: null })
  return (
    <>
      <Fixdata city={city} setCoord={setCoord} setCity={setCity} />
      <Maps coord={coord} city={city} />
    </>
  )
}

export default App
