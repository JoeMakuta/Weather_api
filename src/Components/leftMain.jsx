import { useEffect } from 'react'
import { BsCloudSunFill } from 'react-icons/bs'
import { WiDaySleet } from 'react-icons/wi'



const Weather = [
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
   {
      time: 15,
      temperature: 30,
      humidity: 20,
      icon: <WiDaySleet size={40} />
   },
]

export default function LeftMain({ set_search_input, search_input, weather_data, set_weather_data }) {


   useEffect(() => {
      // weather_data.map((element, index) => {
      //    console.log(element)
      // })
      console.log('The Weather Data from the left are ', weather_data)


   }, [weather_data])
   const weather_icon = `http://openweathermap.org/img/wn/${weather_data && weather_data.list[0] && weather_data.list[0].weather[0] && weather_data.list[0].weather[0].icon && '10d'}@2x.png`

   return (
      <div className="w-[65%] flex flex-col justify-around h-full bg-black bg-opacity-30 p-20 ">
         <div className="flex gap-[3%]">
            <h1 className=" text-[10rem] transition-all "> {Math.round(weather_data && weather_data.list[0] && weather_data.list[0].main.temp)}°</h1>
            <div className="flex flex-col justify-center">
               <h1 className="font-bold text-4xl">{weather_data && weather_data.city && weather_data.city.name}</h1>
               <p>{weather_data && weather_data.list[0] && weather_data.list[0].dt_txt} </p>
               <p>{weather_data && weather_data.list[0] && weather_data.list[0].weather[0].description} </p>

            </div>
            <div className="flex flex-col items-center justify-center ">
               {/* <BsCloudSunFill size={70} color="orange" className=' animate-bounce ' /> */}
               <img className='w-40' src={weather_icon} alt="" />

            </div>

         </div>
         <div className=' flex flex-col gap-20 ' >
            <div className='flex flex-wrap gap-5 scale-100 '>
               {weather_data && weather_data.list.map((weather, index) => {
                  if (index !== 0) {
                     const every_weather_icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                     return (
                        <div key={index} className=' flex flex-col items-center text-center w-20 justify-center rounded-lg h-32 '>
                           <img src={every_weather_icon} alt="" />
                           <p className='text-xl'>{Math.round(weather.main.temp)}°</p>
                           <p className=' text-xs '>{weather.dt_txt}</p>
                        </div>
                     )
                  }
               })}

            </div>
            <h1>The Weather</h1>
         </div>



      </div>
   )
}

