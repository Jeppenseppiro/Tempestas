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
      "?unitGroup=metric&key=UBD2MGG36X9M4XB6F3CQ5TN2X&contentType=json"
  );
  return axiosGet;
};

export { visualCrossingApi };
