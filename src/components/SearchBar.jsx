import SearchIcon from "@mui/icons-material/Search";
import {
  InputBase,
  Box,
  Popover,
  Typography,
  Link,
  Collapse,
  ClickAwayListener,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useComicContext } from "src/contexts/comicContext";
import { useState, useEffect } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { originalComic, comic, setComic } = useComicContext();

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  useEffect(() => {
    if (search !== "") {
      setComic(originalComic);
    }
    setComic(
      originalComic.filter((comic) => {
        return comic.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase());
      })
    );
  }, [search]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box display="flex" flexDirection="column">
        <Box sx={{ flexGrow: 1, minWidth: 500 }}>
          <Search
            onClick={() => {
              setOpen(true);
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "white", fontWeight: "bold" }} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ fontWeight: "bold", color: "white" }}
              placeholder="Search Manga…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Search>
        </Box>

        <Collapse
          in={open}
          sx={{
            width: 500,
            zIndex: 100,
            position: "fixed",
            top: 55,
            background: "white",
            maxHeight: 200,
            overflowY: "auto",
            borderRadius: "10px 0px 0px 10px",
            mt: 1,
          }}
        >
          {comic.map((comic, index) => (
            <Link
              href={`/comics/${comic.comic_id}`}
              sx={{ textDecoration: "none" }}
              key={index}
            >
              <Box sx={{ p: 3 }} display="flex" justifyContent="space-between">
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", fontFamily: "ubuntu" }}
                >
                  {comic.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", fontFamily: "ubuntu" }}
                >
                  {comic.total_view} views
                </Typography>
              </Box>
            </Link>
          ))}
        </Collapse>
      </Box>
    </ClickAwayListener>
  );
}
