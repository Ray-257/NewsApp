import axios from "axios"
import config from './config'

export const getLatestNews = async(params) => {
    try {
      const response = await axios.get(`${config.API_URL}/news/latestNews`,{
        params
      });
      return response;
    } catch (error) {
      return error;
    }
}

