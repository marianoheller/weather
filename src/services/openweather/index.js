import axios from "axios";

const BASE_URL = "http://api.openweathermap.org";

export async function fetchForecast(cityName) {
  const url = `${BASE_URL}/data/2.5/forecast`;
  try {
    if (!cityName) throw Error("No city name");
    const { data } = await axios.get(url, {
      params: {
        q: cityName,
        APPID: "7b17e8b1a5bfc41d0a542e3b2b0508f0"
      }
    });
    return data;
  } catch (err) {
    return { list: [] };
  }
}
