import axios from "axios";

const visualCrossingApi = async () => {
  const axiosGet = await axios.get(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Isabel%2C%20Leyte/?unitGroup=metric&key=UBD2MGG36X9M4XB6F3CQ5TN2X&contentType=json"
  );
  return axiosGet;
};

const visualCrossingApi_DateTime = async (datetime) => {
  const axiosGetDateTime = await axios.get(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Isabel%2C%20Leyte/" +
      datetime +
      "?unitGroup=metric&key=UBD2MGG36X9M4XB6F3CQ5TN2X&contentType=json"
  );
  return axiosGetDateTime;
};

export { visualCrossingApi, visualCrossingApi_DateTime };
