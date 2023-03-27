import axios from "axios";

const visualCrossingApi = async (location, datetime) => {
  if (location == "" || location == null) {
    location = "Isabel, Leyte";
  }
  if (datetime == "" || datetime == null) {
    datetime = "";
  }

  const axiosGet = await axios.get(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
      location +
      "/" +
      datetime +
      "?unitGroup=metric&key=MJLKCUK68DZ7BBZZ3QVH7S6K7&contentType=json"
  );
  return axiosGet;
};

export { visualCrossingApi };
