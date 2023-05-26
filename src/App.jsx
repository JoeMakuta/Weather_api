import { useEffect, useState } from "react";
import "./App.css";
import LeftMain from "./Components/leftMain";
import RightMain from "./Components/rightMain";

function App() {
  const [search_input, set_search_input] = useState("Goma");
  const [weather_data, set_weather_data] = useState();
  const [loading, set_loading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className=" flex flex-wrap  md:flex-row max-w-screen max-h-screen h-screen  text-white font-body1  bg-cover bg-SubMainBack ">
      {loading ? (
        <div className=" flex justify-center items-center w-[100vw] h-screen md:w-[65%] bg-black bg-opacity-30">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
          {/* <img src="src/assets/no-data-icon-10.png" alt="" /> */}
        </div>
      ) : error ? (
        <div className=" flex justify-center items-center w-[65vw] bg-black bg-opacity-30">
          {/* <img src="./src/assets/no-data-icon-10.png" alt="" />  */}
          Not Data Found !
        </div>
      ) : (
        <LeftMain
          search_input={search_input}
          set_search_input={set_search_input}
          weather_data={weather_data}
          set_weather_data={set_weather_data}
        />
      )}
      <RightMain
        search_input={search_input}
        set_search_input={set_search_input}
        weather_data={weather_data}
        set_weather_data={set_weather_data}
        loading={loading}
        set_loading={set_loading}
        error={error}
        setError={setError}
      />
    </div>
  );
}

export default App;
