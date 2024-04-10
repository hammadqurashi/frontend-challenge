import axios from "axios";

const APIKEY = import.meta.env.VITE_APIKEY;

const getNews = async (page, filters) => {
  try {
    const { category, searchIn, from, to } = filters;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchIn}&page=${page}&pageSize=6&apiKey=${APIKEY}`;
    const res = await axios.get(url);

    if (res?.data?.status === "ok") {
      return res?.data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export { getNews };
