import {useState} from 'react'

// this is the button component
function Button({handleClick,text}){
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

//row of stats component
function Statistics({ butterFlyLocs, frenchCurl, miniTwists }) {
  const total = butterFlyLocs + frenchCurl + miniTwists

  if (total === 0) {
    return <p>Enter your vote here!</p>
  }

  return (
    <div>
      <h2>Vote Statistics 📊</h2>
      <table>
        <tbody>
          <StatisticLine text="Butterfly Locs " value={butterFlyLocs} />
          <StatisticLine text="French Curl " value={frenchCurl} />
          <StatisticLine text="Mini Twists " value={miniTwists} />
          <StatisticLine text="Total Votes" value={total} />
        </tbody>
      </table>
    </div>
  )
}




//this is my main app component my header and all that
function App(){


const [butterFlyLocs, setButterFlyLocs] = useState(0)
const [frenchCurl, setFrenchCurl] = useState(0)
const [miniTwists, setMiniTwists] = useState(0)

return (
  <div>
<h1> Hair Style Tracker </h1>
      <Button handleClick={() => setBoxBraids(boxBraids + 1)} text="Butterfly Locs" />
      <Button handleClick={() => setSenegaleseTwists(senegaleseTwists + 1)} text="French Curl" />
      <Button handleClick={() => setFauxLocs(fauxLocs + 1)} text="Mini Twists" />
      <Statistics butterFlyLocs={butterFlyLocs} frenchCurl={frenchCurl} miniTwists={miniTwists} />
  </div>
  )
}
export default App