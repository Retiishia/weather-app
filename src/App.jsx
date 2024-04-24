import axios from "axios"
import React, { useMemo, useRef, useState } from "react"
import { FaTint, FaUmbrella, FaWind } from "react-icons/fa"
import Footer from "./Footer"

const apiURL = "https://api.openweathermap.org/data/2.5/weather"
const apiKEY = import.meta.env.VITE_API_KEY

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [weather, setWeather] = useState(null)
  const inputRef = useRef(inputValue)

  const handleInputChange = (e) => setInputValue(e.target.value)

  const capitalizedInput = inputValue.replace(/^\w/, (e) => e.toUpperCase())

  const handleKeyPress = async (e) => {
    if (e.key !== "Enter") return

    const inputValueCapitalized =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    const apiParams = {
      q: inputValueCapitalized,
      units: "metric",
      appid: apiKEY,
    }

    try {
      const res = await axios.get(apiURL, { params: apiParams })
      setWeather(res.data)
      if (res.data.cod === "400") setInputValue("")
    } catch (error) {
      console.error(error)
    }
  }

  const detailData = [
    {
      icon: <FaWind />,
      value: weather?.wind?.speed || "0",
      metric: "mph",
    },
    {
      icon: <FaUmbrella />,
      value: weather?.rain?.["1h"] || "0",
      metric: "mm",
    },
    {
      icon: <FaTint />,
      value: weather?.main?.humidity || "0",
      metric: "%",
    },
  ]

  const inputStyle = useMemo(
    () => ({
      width: `${inputValue.length * 15}px`,
      transition: "width 0.1s",
      minWidth: "30px",
    }),
    [inputValue]
  )

  const weatherDescription = useMemo(() => {
    if (!weather) return "Cloudy"
    return (
      ` ${weather.weather[0].description}`.charAt(0).toUpperCase() +
      `${weather.weather[0].description}`.slice(1)
    )
  }, [weather])

  return (
    <div className="bg-base text-2xl font-cat text-text flex-col cursor-default">
      <div className="absolute py-8 left-1/2">
        <div className="relative -left-1/2 text-center">
          <span>Weather App </span>
          <p className="mt-2 text-sm text-overlay0">
            with{" "}
            <a className="text-teal" href="https://openweathermap.org/api/">
              OpenWeatherMap API
            </a>{" "}
            &{" "}
            <a
              className="text-teal"
              href="https://github.com/catppuccin/catppuccin"
            >
              Catppuccin
            </a>
            's Theme &#9825;
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-screen h-screen flex-col">
        <div className="p-8">
          <h1>
            Right now in{" "}
            <input
              type="text"
              className="text-2xl font-bold border-b-1 p-0 h-10 text-center border-t-0 rounded-b-none border-r-0 border-l-0 focus:border-teal border-surface0 focus:ring-transparent bg-transparent"
              ref={inputRef}
              value={capitalizedInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              style={inputStyle}
            />
            , It's {weatherDescription}
          </h1>
        </div>
        <div className="flex justify-between items-center gap-16">
          <img
            src={
              weather
                ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                : `https://openweathermap.org/img/wn/02d@2x.png`
            }
          />
          <div className="text-center">
            <p className="text-8xl">{parseInt(weather?.main?.temp) || "00"}°</p>
          </div>
          <div className="flex flex-col gap-y-4">
            {detailData.map((e, i) => (
              <div key={i} className="flex gap-2 items-baseline">
                {e.icon}
                <p className="text-3xl">
                  {e.value}
                  <span className="text-xs text-overlay0"> {e.metric}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
