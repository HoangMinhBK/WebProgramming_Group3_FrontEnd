import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "src/configs/api";

export default function Chapter() {
  const comic_id = Object.values(useParams())[0];
  const chap_num = Object.values(useParams())[1];
  console.log(chap_num);
  const [chapters, setChapters] = useState([]);
  const fetchData = async () => {
    const data = await Axios.get(
      `${baseURL}comics/${comic_id}/chapters/${chap_num}`
    ).then((res) => res.data);
    setChapters(data);
    console.log(chapters);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {chapters?.map((chapter) => {
        return <img src={Object.values(chapter)} alt="" />;
      })}
    </Box>
  );
}
