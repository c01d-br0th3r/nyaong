import axios from "axios";

const API_KEY = "5b804181-36fe-4a51-a617-dc4430612524";

export const api = {
  getInfo: () =>
    axios.get("https://api.thecatapi.com/v1/breeds", {
      params: { "x-api-key": API_KEY }
    }),

  getCategory: () =>
    axios.get("https://api.thecatapi.com/v1/categories", {
      params: { "x-api-key": API_KEY }
    }),

  getImage: breedID =>
    axios.get("https://api.thecatapi.com/v1/images/search?", {
      params: { "x-api-key": API_KEY, "breed-id": breedID }
    })
};
