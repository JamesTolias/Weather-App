"use client";

import { useState, useEffect } from "react";
import WeatherLineChart from "./DataChart";
import Weather from "../api/weatherAPI.json";

export default function Home() {
  const [nowButton, setNowButton] = useState(true);
  const [todaysButton, setTodaysButton] = useState(false);
  const [elevenButton, setElevenButton] = useState(false);
  const [twelveButton, setTwelveButton] = useState(false);
  const [thirteenButton, setThirteenButton] = useState(false);
  const [fourteenButton, setFourteenButton] = useState(false);
  const [fifteenButton, setFifteenButton] = useState(false);
  const [sixteenButton, setSixteenButton] = useState(false);

  const [selectedDate, setSelectedDate] = useState(0);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const currentWeather = () => {
    setNowButton(true);
    setTodaysButton(false);
    setElevenButton(false);
    setTwelveButton(false);
    setThirteenButton(false);
    setFourteenButton(false);
    setFifteenButton(false);
    setSixteenButton(false);
  };

  const todaysWeather = () => {
    setNowButton(false);
    setTodaysButton(true);
    setElevenButton(false);
    setTwelveButton(false);
    setThirteenButton(false);
    setFourteenButton(false);
    setFifteenButton(false);
    setSixteenButton(false);
    setSelectedDate(0);
  };

  const elevenWeather = () => {
    setNowButton(false);
    setTodaysButton(false);
    setElevenButton(true);
    setTwelveButton(false);
    setThirteenButton(false);
    setFourteenButton(false);
    setFifteenButton(false);
    setSixteenButton(false);
    setSelectedDate(1);
  };

  const twelveWeather = () => {
    setNowButton(false);
    setTodaysButton(false);
    setElevenButton(false);
    setTwelveButton(true);
    setThirteenButton(false);
    setFourteenButton(false);
    setFifteenButton(false);
    setSixteenButton(false);
    setSelectedDate(2);
  };

  const thirteenWeather = () => {
    setNowButton(false);
    setTodaysButton(false);
    setElevenButton(false);
    setTwelveButton(false);
    setThirteenButton(true);
    setFourteenButton(false);
    setFifteenButton(false);
    setSixteenButton(false);
    setSelectedDate(3);
  };

  const fourteenWeather = () => {
    setNowButton(false);
    setTodaysButton(false);
    setElevenButton(false);
    setTwelveButton(false);
    setThirteenButton(false);
    setFourteenButton(true);
    setFifteenButton(false);
    setSixteenButton(false);
    setSelectedDate(4);
  };

  const fifteenWeather = () => {
    setNowButton(false);
    setTodaysButton(false);
    setElevenButton(false);
    setTwelveButton(false);
    setThirteenButton(false);
    setFourteenButton(false);
    setFifteenButton(true);
    setSixteenButton(false);
    setSelectedDate(5);
  };

  const sixteenWeather = () => {
    setNowButton(false);
    setTodaysButton(false);
    setElevenButton(false);
    setTwelveButton(false);
    setThirteenButton(false);
    setFourteenButton(false);
    setFifteenButton(false);
    setSixteenButton(true);
    setSelectedDate(6);
  };
  

  return (
    <div className="p-4">
      <div className="flex flex-col items-start bg-white rounded-md shadow-md">
        <div className="flex flex-row gap-20 w-full">
          <div className="flex flex-row gap-4 p-6">
            <button
              className={
                nowButton === false
                  ? "py-1.5 px-4 bg-gray-100 outline outline-1 outline-gray-300 rounded-sm flex items-center justify-center font-medium text-sm h-9 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
                  : "py-1.5 px-4 bg-green-100 outline outline-1 outline-green-400 rounded-sm flex items-center justify-center font-medium text-sm text-green-600 h-9 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
              }
              onClick={currentWeather}
            >
              Now
            </button>
            <button
              className={
                todaysButton === false
                  ? "py-1.5 px-4 bg-gray-100 outline outline-1 outline-gray-300 rounded-sm flex items-center justify-center font-medium text-sm h-9 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
                  : "py-1.5 px-4 bg-green-100 outline outline-1 outline-green-400 rounded-sm flex items-center justify-center font-medium text-sm text-green-600 h-9 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
              }
              onClick={todaysWeather}
            >
              Today
            </button>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-4 p-6 w-full">
            <h1 className="font-medium">Select Date:</h1>
            <button
              className={
                elevenButton === false
                  ? "py-2 px-6 bg-gray-100 outline outline-1 outline-gray-300 rounded-sm flex items-center justify-center font-medium text-sm hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
                  : "py-2 px-6 bg-green-100 outline outline-1 outline-green-400 rounded-sm flex items-center justify-center font-medium text-sm text-green-600 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
              }
              onClick={elevenWeather}
            >
              11/6
            </button>
            <button
              className={
                twelveButton === false
                  ? "py-2 px-6 bg-gray-100 outline outline-1 outline-gray-300 rounded-sm flex items-center justify-center font-medium text-sm hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
                  : "py-2 px-6 bg-green-100 outline outline-1 outline-green-400 rounded-sm flex items-center justify-center font-medium text-sm text-green-600 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
              }
              onClick={twelveWeather}
            >
              12/6
            </button>
            <button
              className={
                thirteenButton === false
                  ? "py-2 px-6 bg-gray-100 outline outline-1 outline-gray-300 rounded-sm flex items-center justify-center font-medium text-sm hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
                  : "py-2 px-6 bg-green-100 outline outline-1 outline-green-400 rounded-sm flex items-center justify-center font-medium text-sm text-green-600 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
              }
              onClick={thirteenWeather}
            >
              13/6
            </button>
            <button
              className={
                fourteenButton === false
                  ? "py-2 px-6 bg-gray-100 outline outline-1 outline-gray-300 rounded-sm flex items-center justify-center font-medium text-sm hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
                  : "py-2 px-6 bg-green-100 outline outline-1 outline-green-400 rounded-sm flex items-center justify-center font-medium text-sm text-green-600 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
              }
              onClick={fourteenWeather}
            >
              14/6
            </button>
            <button
              className={
                fifteenButton === false
                  ? "py-2 px-6 bg-gray-100 outline outline-1 outline-gray-300 rounded-sm flex items-center justify-center font-medium text-sm hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
                  : "py-2 px-6 bg-green-100 outline outline-1 outline-green-400 rounded-sm flex items-center justify-center font-medium text-sm text-green-600 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
              }
              onClick={fifteenWeather}
            >
              15/6
            </button>
            <button
              className={
                sixteenButton === false
                  ? "py-2 px-6 bg-gray-100 outline outline-1 outline-gray-300 rounded-sm flex items-center justify-center font-medium text-sm hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
                  : "py-2 px-6 bg-green-100 outline outline-1 outline-green-400 rounded-sm flex items-center justify-center font-medium text-sm text-green-600 hover:bg-green-50 hover:outline-green-300 hover:text-green-500 transition duration-300 ease-in-out"
              }
              onClick={sixteenWeather}
            >
              16/6
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center p-6 w-full">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-5xl">
              {nowButton === true
                ? Math.round(Weather.current.temp)
                : Math.round(Weather.daily[selectedDate].temp.day)}
              °C
            </h1>
            <h2 className="text-gray-600 font-normal">
              {nowButton === true
                ? capitalizeFirstLetter(Weather.current.weather[0].description)
                : capitalizeFirstLetter(
                    Weather.daily[selectedDate].weather[0].description
                  )}
            </h2>
          </div>

          <div className="w-40">
            <img
              src={`https://openweathermap.org/img/w/${
                nowButton === true
                  ? Weather.current.weather[0].icon
                  : Weather.daily[selectedDate].weather[0].icon
              }.png`}
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full h-1 bg-gray-300"></div>

        <div className="w-full flex flex-col p-6 gap-6">
          <div className="flex flex-row gap-4">
            <div className="px-4 py-8 w-full border-2 border-gray-300 rounded-lg flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-end">
                <h1 className="font-medium text-3xl">
                  {nowButton === true
                    ? Math.round(Weather.current.feels_like)
                    : Math.round(Weather.daily[selectedDate].feels_like.day)}
                </h1>
                <h2 className="font-medium text-3xl">°C</h2>
              </div>
              <h2 className="text-gray-600 font-normal text-sm">Feels Like</h2>
            </div>

            <div className="px-4 py-8 w-full border-2 border-gray-300 rounded-lg flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-end">
                <h1 className="font-medium text-3xl">
                  {nowButton === true
                    ? Math.round(Weather.current.wind_speed * 10) / 10
                    : Math.round(Weather.daily[selectedDate].wind_speed * 10) /
                      10}
                </h1>
                <h2 className="font-medium text-xl">m/s</h2>
              </div>
              <h2 className="text-gray-600 font-normal text-sm">Wind</h2>
            </div>

            <div className="px-4 py-8 w-full border-2 border-gray-300 rounded-lg flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-end">
                <h1 className="font-medium text-3xl">
                  {nowButton === true
                    ? Math.round(Weather.current.dew_point * 10) / 10
                    : Math.round(Weather.daily[selectedDate].wind_gust * 10) /
                      10}
                  {/*didn't find wind gust in the json file for current so I put dew_point*/}
                </h1>
                <h2 className="font-medium text-xl">m/s</h2>
              </div>
              <h2 className="text-gray-600 font-normal text-sm">Wind Gust</h2>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="px-4 py-8 w-full border-2 border-gray-300 rounded-lg flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-end">
                <h1 className="font-medium text-3xl">
                  {nowButton === true
                    ? Math.round(Weather.current.wind_deg)
                    : Math.round(Weather.daily[selectedDate].wind_deg)}
                </h1>
                <h2 className="font-medium text-3xl">°</h2>
              </div>
              <h2 className="text-gray-600 font-normal text-sm">Wind Deg</h2>
            </div>

            <div className="px-4 py-8 w-full border-2 border-gray-300 rounded-lg flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-end">
                <h1 className="font-medium text-3xl">
                  {nowButton === true
                    ? Math.round(Weather.current.humidity)
                    : Math.round(Weather.daily[selectedDate].humidity)}
                </h1>
                <h2 className="font-medium text-xl">%</h2>
              </div>
              <h2 className="text-gray-600 font-normal text-sm">Humidity</h2>
            </div>

            <div className="px-4 py-8 w-full border-2 border-gray-300 rounded-lg flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-end">
                <h1 className="font-medium text-3xl">
                  {nowButton === true
                    ? Math.round(Weather.current.pressure * 10) / 10
                    : Math.round(Weather.daily[selectedDate].pressure * 10) /
                      10}
                </h1>
                <h2 className="font-medium text-xl">hPa</h2>
              </div>
              <h2 className="text-gray-600 font-normal text-sm">Pressure</h2>
            </div>
          </div>
        </div>

        <div className="w-full h-4 bg-gray-300"></div>

        <div className="px-10 py-12 flex flex-col w-full gap-6">
          <h1 className="font-bold text-lg">Weekly Variation</h1>
          <WeatherLineChart />
        </div>
      </div>
    </div>
  );
}
