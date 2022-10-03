import { useRef } from "react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const pre_search_inputs = [
   'Goma', 'Kinshasa', 'Bukavu'
]

export default function rightMain({ set_search_input, search_input, weather_data, set_weather_data }) {

   const [lat_lon_data, set_lat_lon_data] = useState([])
   const inputValue = useRef(null)

   useEffect(() => {

      async () => fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search_input}&limit=5&appid=2c5b563bf97fb0d2b733d6a2a7409cd7`)
         .then((data) => data.json())
         .then((data) => { set_lat_lon_data(data); console.log('The lat lon data are : ', data[0].lat, data[0].l); })

      fetch_weather_data(lat_lon_data[0] && lat_lon_data[0].lat, lat_lon_data[0] && lat_lon_data[0].lon)

   }, [search_input])

   const fetch_weather_data = (lat, lon) => {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${-1.6665685}&lon=${29.225652}&appid=2c5b563bf97fb0d2b733d6a2a7409cd7&units=metric`)
         .then((data) => data.json())
         .then((data) => { set_weather_data(data); console.log('The Really Weather data are : ', data) })
   }


   return (
      <div className="w-[35%] h-full bg-black bg-opacity-10 backdrop-blur-sm p-10 ">
         <div className="flex items-center justify-start pt-6 ">
            <div>
               <input type="text" ref={inputValue} className=" w-full h-14 outline-none bg-inherit " placeholder="Another location" onKeyPress={() => {
                  if (event.key === 'Enter') {
                     set_search_input(event.target.value)
                  }
               }
               } />
               <div className="h-[1px] bg-white bg-opacity-50 ">
               </div>
            </div>
            <button className=" w-24 h-20 scale-75 bg-[orange] rounded-r-3xl active:bg-[black] flex items-center justify-center " onClick={() => { set_search_input(inputValue.current.value) }} >
               <BsSearch size={20} />
            </button>
         </div>
         <div className="flex flex-col gap-6 items-start pt-10 text-gray-500 ">
            {pre_search_inputs.map((elt, index) => {
               return (
                  <button key={index} onClick={(e) => {
                     inputValue.current.value = e.target.innerText;
                     set_search_input(e.target.innerText)
                  }} >{elt}</button>
               )
            })}
         </div>
         <div className="h-[1px] bg-white bg-opacity-50 mt-10 ">
         </div>
         <div className="flex flex-col gap-6 items-start pt-10">
            <h1 className="font-bold text-lg ">Weather Details</h1>
            <div className="w-full text-gray-300 flex gap-4 flex-col">
               <div className="flex justify-between w-full ">
                  <p>Cloudy</p>
                  <p>60%</p>
               </div>
               <div className="flex justify-between w-full ">
                  <p>Humidity</p>
                  <p>40%</p>
               </div>
               <div className="flex justify-between w-full ">
                  <p>Temperature</p>
                  <p>0%</p>
               </div>
            </div>
         </div>
         <div className="h-[1px] bg-white bg-opacity-50 mt-10 ">
         </div>
      </div>
   )
}
