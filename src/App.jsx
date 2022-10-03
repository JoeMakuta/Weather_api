import { useEffect, useState } from 'react'
import './App.css'
import LeftMain from './Components/leftMain'
import RightMain from './Components/rightMain'

function App() {
  const [search_input, set_search_input] = useState('Goma')
  const [weather_data, set_weather_data] = useState(null)

  return (
    <div className=' flex flex-wrap text-white font-body1 bg-MainBack bg-cover h-screen'>
      <LeftMain search_input={search_input} set_search_input={set_search_input} weather_data={weather_data} set_weather_data={set_weather_data} />
      <RightMain search_input={search_input} set_search_input={set_search_input} weather_data={weather_data} set_weather_data={set_weather_data} />
    </div>
  )
}

export default App
