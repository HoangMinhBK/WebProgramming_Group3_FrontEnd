import { createContext, useContext } from "react";
import Axios from "axios";
import { baseURL } from "src/configs/api";
import { useEffect, useState } from "react";
const ComicContext = createContext();

export default function ComicProvider({ children }) {
  const [comic, setComic] = useState([]);
  const [originalComic, setOriginalComic] = useState([]);
  const fetchData = async () => {
    const data = await Axios.get(`${baseURL}comic`).then((res) => res.data);
    setComic(data);
    setOriginalComic(data);
    return data;
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ComicContext.Provider value={{ originalComic, comic, setComic }}>
      {children}
    </ComicContext.Provider>
  );
}
export const useComicContext = () => useContext(ComicContext);
