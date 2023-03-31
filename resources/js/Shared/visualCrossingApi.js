import axios from "axios";
const visualCrossingApi = async (location, datetime) => {
  if (location == "" || location == null) {
    location = "Isabel, Leyte";
  }
  if (datetime == "" || datetime == null) {
    datetime = "";
  }

  const axiosGet = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${datetime}?unitGroup=metric&key=${
      import.meta.env.VITE_WEATHER_API
    }&contentType=json&iconSet=icons2`
  );

  return axiosGet;
};

export { visualCrossingApi };
