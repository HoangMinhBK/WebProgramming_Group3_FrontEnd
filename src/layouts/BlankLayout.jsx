import { Box } from "@mui/material";
import { Fragment } from "react";


export default function BlankLayout(props) {
  const { children } = props;

  return (
    <Fragment>
      <Box component={"main"}>{children}</Box>
    </Fragment>
  );
}
