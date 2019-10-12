import { useState } from "react";
import get from "lodash/fp/get";
import debounce from "lodash/debounce";
import { fetchForecast } from "../../services/openweather";
import { parseForecase } from "../../modules/forecast";

export const getCoords = get("[0].coords");

export async function _getForecast(cityName, setForecast) {
  const rawForecast = await fetchForecast(cityName);
  const forecast = parseForecase(rawForecast);
  setForecast(forecast);
}

const getForecast = debounce(_getForecast, 500);

export function useForecast() {
  const [forecast, setForecast] = useState([]);

  function setCity(cityName) {
    getForecast(cityName, setForecast);
  }

  return [forecast, setCity];
}
