import axios from "axios";

const API_URL = `https://api.freeapi.app/api/v1/public/randomjokes?page={pageNum}&limit=12`;

export const fetchRandomJokes = async (pageNum = 1) => {
  const response = await axios.get(API_URL.replace("{pageNum}", pageNum));
  return response.data;
};

export const extractJokes = (payload) => {
  const root = payload?.data ?? payload;

  const possibleArrays = [
    root?.data,
    root?.jokes,
    root?.items,
    root?.results,
    Array.isArray(root) ? root : null,
  ].filter(Boolean);

  const jokesArray = possibleArrays.find(Array.isArray) || [];

  return jokesArray;
};

export const normalizeJoke = (raw, index = 0) => {
  const text =
    raw?.joke ||
    raw?.content ||
    raw?.text ||
    raw?.setup ||
    raw?.question ||
    raw?.title ||
    "Random joke";

  const punchline =
    raw?.punchline ||
    raw?.answer ||
    raw?.delivery ||
    raw?.subtitle ||
    "";

  return {
    id: raw?._id || raw?.id || `${index}-${text}`,
    text,
    punchline,
    category: raw?.category || raw?.type || "General",
    raw,
  };
};