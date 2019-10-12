import map from "lodash/fp/map";
import values from "lodash/fp/values";
import reduce from "lodash/fp/reduce";
import groupBy from "lodash/fp/groupBy";
import compose from "lodash/fp/compose";

export const formatForecast = compose([
  map(item => ({
    cityId: item.cityId,
    cityName: item.cityName,
    coords: item.coords,
    timestamp: item.dt * 1000,
    temp: item.main.temp,
    tempMin: item.main.temp_min,
    tempMax: item.main.temp_max,
    pressure: item.main.pressure,
    seaLevel: item.main.sea_level,
    groundLevel: item.main.grnd_level,
    humidity: item.main.humidity,
    tempKf: item.main.temp_kf,
    icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`
  })),
  forecast =>
    map(
      item => ({
        ...item,
        cityId: forecast.city.id,
        cityName: forecast.city.name,
        coords: forecast.city.coord
      }),
      forecast.list
    )
]);

export const _initItem = {
  temp: 0,
  tempMin: 0,
  tempMax: 0,
  pressure: 0,
  seaLevel: 0,
  groundLevel: 0,
  humidity: 0,
  tempKf: 0,
  samples: 0
};

export const divideBySamples = a => ({
  ...a,
  temp: a.temp / a.samples,
  tempMin: a.tempMin / a.samples,
  tempMax: a.tempMax / a.samples,
  pressure: a.pressure / a.samples,
  seaLevel: a.seaLevel / a.samples,
  groundLevel: a.groundLevel / a.samples,
  humidity: a.humidity / a.samples,
  tempKf: a.tempKf / a.samples
});

export const addForecasts = (a, b) => ({
  ...b,
  temp: a.temp + b.temp,
  tempMin: a.tempMin + b.tempMin,
  tempMax: a.tempMax + b.tempMax,
  pressure: a.pressure + b.pressure,
  seaLevel: a.seaLevel + b.seaLevel,
  groundLevel: a.groundLevel + b.groundLevel,
  humidity: a.humidity + b.humidity,
  tempKf: a.tempKf + b.tempKf,
  samples: a.samples + 1
});

export const dayCollapse = compose([
  map(divideBySamples),
  values,
  map(reduce(addForecasts, _initItem)),
  groupBy(l => new Date(l.timestamp).getDay())
]);

export const parseForecase = compose([dayCollapse, formatForecast]);
