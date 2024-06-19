import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "83a7a70e72494acdb25bb36c113d9ea8",
  },
});
