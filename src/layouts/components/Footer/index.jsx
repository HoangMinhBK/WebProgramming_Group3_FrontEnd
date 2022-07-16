import { Box, Link, Typography } from "@mui/material";
import { Fragment } from "react";
import ScrollToTop from "./ScrollToTop";
import Background from "src/assets/images/footer.jpg";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          pt: 4,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          flexDirection: { xs: "column", sm: "row" },
          backgroundImage: `url(${Background})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          height: "350px",
          mb: -13,
        }}
      >
        <Box>
          <Typography
            variant="body2"
            fontFamily="ubuntu"
            align="center"
            sx={{ mb: 4 }}
          >
            COPYRIGHT © 2022 Hoang Minh - Hai Dang - The Kiet . All rights
            reserved
          </Typography>
        </Box>
      </Box>
      <ScrollToTop />
    </>
  );
}
