import { Box, Typography, Button, Modal } from "@mui/material";
import { baseURL } from "src/configs/api";
import { NavLink } from "react-router-dom";
import { useCustomTheme } from "src/contexts/themeContext";
import DefaultImage from "src/assets/images/default.png";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Comics() {
  const id = Object.values(useParams())[0];
  const [comic, setComic] = useState({});
  const [chapterArray, setChapterArray] = useState([]);
  const fetchData = async () => {
    const data = await Axios.get(`${baseURL}comic/${id}`).then(
      (res) => res.data
    );
    setComic(data[0]);
    setChapterArray(() => {
      var arr = [];
      for (let i = 1; i <= data[0].current_chapter; i++) {
        arr.push(i);
      }
      return arr;
    });
    return data;
  };
  useEffect(() => {
    fetchData();
  }, []);

  const {
    aliceBlue,
    uranianBlue,
    lightSkyBlue,
    blueJeans,
    blueJeans2,
    dodgerBlue,
    bleuDeFrance,
    brightNavyBlue,
    greenBlue,
    cobaltBlue,
  } = useCustomTheme();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            width: 1000,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Chapters
          </Typography>
          {chapterArray.map((chapter, index) => (
            <NavLink
              to={`${comic.comic_id}/chapters/${index + 1}`}
              style={{ textDecoration: "none" }}
            >
              <Button key={index}>
                <Typography variant="h6">{chapter}</Typography>
              </Button>
            </NavLink>
          ))}
        </Box>
      </Modal>

      <Box width="100%" display="flex" justifyContent="center" sx={{ mt: 10 }}>
        <Box
          width="60%"
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          <Box width="35%" display="flex" flexDirection="column">
            <img
              src={comic.thumbnail || DefaultImage}
              alt={comic.name}
              width="100%"
              height="auto"
              style={{ borderRadius: "10px 10px 0px 0px" }}
            />
            <Box width="100%" display="flex" justifyContent="space-evenly">
              <Button
                variant="contained"
                sx={{ mt: 3, background: dodgerBlue }}
                disableFocusRipple
                disableElevation
                disableTouchRipple
                disableRipple
                onClick={handleOpen}
              >
                <Typography sx={{ fontFamily: "ubuntu" }}>Read now</Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  background: aliceBlue,
                  "&:hover": {
                    //you want this to be the same as the backgroundColor above
                    backgroundColor: aliceBlue,
                  },
                }}
                disableFocusRipple
                disableElevation
                disableTouchRipple
                disableRipple
              >
                <Typography
                  sx={{ fontFamily: "ubuntu", color: brightNavyBlue }}
                >
                  Add to favorite
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box width="50%">
            <Typography
              variant="h3"
              sx={{ fontFamily: "ubuntu", fontWeight: "bold" }}
            >
              {comic.name}
            </Typography>
            <Typography>By {comic.author_name}</Typography>
            <Typography>Status: {comic.status}</Typography>
            <Typography>Current chapter: {comic.current_chapter}</Typography>
            <Typography>Rating: {comic.rating}</Typography>
            <Typography>Total views: {comic.total_view} views</Typography>
            <Box>
              <Typography
                variant="body1"
                sx={{ fontStyle: "italic", fontFamily: "ubuntu" }}
              >
                {comic.des}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
