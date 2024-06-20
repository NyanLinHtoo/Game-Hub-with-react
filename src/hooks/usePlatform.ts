import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const Platform = () => useData<Platform>("/platforms/lists/parents");

export default Platform;
