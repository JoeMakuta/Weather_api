import { useEffect } from "react";
import { BsCloudSunFill } from "react-icons/bs";
import { WiDaySleet } from "react-icons/wi";

const Weather = [
  {
    time: 15,
    temperature: 30,
    humidity: 20,
    icon: <WiDaySleet size={40} />,
  },
  {
    time: 15,
    temperature: 30,
    humidity: 20,
    icon: <WiDaySleet size={40} />,
  },
  {
    time: 15,
    temperature: 30,
    humidity: 20,
    icon: <WiDaySleet size={40} />,
  },
  {
    time: 15,
    temperature: 30,
    humidity: 20,
    icon: <WiDaySleet size={40} />,
  },
  {
    time: 15,
    temperature: 30,
    humidity: 20,
    icon: <WiDaySleet size={40} />,
  },
  {
    time: 15,
    temperature: 30,
    humidity: 20,
    icon: <WiDaySleet size={40} />,
  },
];

export default function LeftMain({
  set_search_input,
  search_input,
  weather_data,
  set_weather_data,
}) {
  useEffect(() => {
    // weather_data.map((element, index) => {
    //    console.log(element)
    // })
    console.log("The Weather Data from the left are ", weather_data);
  }, [weather_data]);
  const weather_icon = `http://openweathermap.org/img/wn/${
    weather_data.list[0]?.weather[0]?.icon && "10d"
  }@2x.png`;

  return (
    <div className="md:w-[65vw] w-[100vw] flex flex-col bg-black/50 justify-center  gap-[3%] items-start md:pl-[10%] ">
      <div className="flex gap-8 md:gap-8 sm:flex-row flex-col pl-10">
        <h1 className=" text-[5rem] sm:text-[10rem]  transition-all ">
          {" "}
          {Math.round(weather_data.list[0]?.main?.temp)}°
        </h1>
        <div className=" flex gap-8 ">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-xl sm:text-4xl  ">
              {weather_data?.city?.name}
            </h1>
            <p className=" sm:text-base text-xs ">
              {weather_data.list[0]?.dt_txt}{" "}
            </p>
            <p className=" sm:text-base text-xs ">
              {weather_data.list[0]?.weather[0]?.description}{" "}
            </p>
          </div>

          <div className="flex  items-center justify-center ">
            <BsCloudSunFill
              size={70}
              color="orange"
              className=" animate-bounce "
            />
            {/* <img className="md:w-28 animate-bounce " src={weather_icon} alt="" /> */}
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-10 md:gap-20 ">
        <div className="flex  w-[100vw] md:w-fit overflow-scroll md:overflow-auto md:flex-wrap z-10  gap-4 scale-100 ">
          {weather_data?.list?.map((weather, index) => {
            if (index !== 0) {
              const every_weather_icon = `http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`;
              return (
                <div
                  key={index}
                  className=" flex flex-col items-center text-center justify-center rounded-lg h-32 "
                >
                  <img src={every_weather_icon} className=" w-10 " alt="" />
                  <p className="text-base">
                    {Math.round(weather?.main?.temp)}°
                  </p>
                  <p className=" text-xs w-20">
                    {weather?.dt_txt.substring(0, 16)}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <h1 className="  pl-10 ">The Weather</h1>
      </div>
    </div>
  );
}
