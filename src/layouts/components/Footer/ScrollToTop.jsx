import { Box, Tooltip, useScrollTrigger, Zoom } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: window.screen.height / 2,
  });

  const handleScrollToTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Tooltip title={"Go to top"}>
        <Box
          sx={{
            position: "fixed",
            cursor: "pointer",
            bottom: { xs: 10 * 8, xsm: 2 * 8 },
            right: 20,
          }}
          onClick={handleScrollToTop}
        >
          <ArrowUpwardIcon fontSize="large" color="primary" />
        </Box>
      </Tooltip>
    </Zoom>
  );
}
