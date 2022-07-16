import { Box, Typography, Rating } from "@mui/material";
import DefaultImage from "src/assets/images/default.png";
import { useCustomTheme } from "src/contexts/themeContext";
import { NavLink } from "react-router-dom";

export default function ComicCard({
  id,
  name,
  author_name,
  current_chapter,
  rating,
  status,
  total_view,
  des,
  thumbnail,
}) {
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

  const comicStatus = {
    ongoing: "yellow",
    completed: "green",
    delayed: "red",
  };
  return (
    <NavLink to={`comics/${id}`} style={{ textDecoration: "none" }}>
      <Box
        width={300}
        sx={{
          borderRadius: "10px",
          mr: 2,
          mb: 5,
          background: uranianBlue,
          cursor: "pointer",
        }}
      >
        <img
          src={thumbnail || DefaultImage}
          alt={name}
          width={300}
          height={350}
          style={{ borderRadius: "10px 10px 0px 0px" }}
        />
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "ubuntu", fontWeight: "bold", color: "black" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "ubuntu", color: "black" }}
          >
            Current chapter: {current_chapter}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "ubuntu", color: comicStatus[`${status}`] }}
          >
            {status}
          </Typography>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Typography
              sx={{ fontFamily: "ubuntu", fontStyle: "italic", color: "black" }}
            >
              {total_view} views
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
}
