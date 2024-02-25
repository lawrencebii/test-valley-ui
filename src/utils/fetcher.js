import axios from "axios";
import { BASE_URL } from "../constants";

export const fetcher = async (url) => {
  try {
    const response = await axios.get(BASE_URL + url);
    const data = response.data;
    if (!data) {
      return false;
    } else {
      return data;
    }
  } catch (error) {
    console.log(" server error");
  }
};
export const fetchMainBannerImg = async () => {
  const data = await fetcher("/main-banner/all");
  return data;
};
export const fetchMainShortCutCardDetails = async () => {
  const data = await fetcher("/main-shortcut/all");
  return data;
};
