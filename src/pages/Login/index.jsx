import { TextField, Box, Typography, Button } from "@mui/material";
import { useCustomTheme } from "src/contexts/themeContext";
import { useHistory } from "react-router-dom";
import Background from "src/assets/images/manga_bg.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import { useAccountContext } from "src/contexts/accountContext";
import handleLogin from "./handleLogin";
import { useSnackbar } from "notistack";

export default function Login() {
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

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const { setAccount } = useAccountContext();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log(status);
    if (status === 200) {
      setAccount(username);
      enqueueSnackbar("Login successfully!", { variant: "success" });
      history.push("/");
      setStatus("");
    } else if (status === 404) {
      setAccount(undefined);
      enqueueSnackbar("Login Failed! Please try again!", { variant: "error" });
      setStatus("");
    }
  }, [enqueueSnackbar, history, setAccount, status, username]);

  return (
    <Box
      height="100vh"
      width="100%"
      sx={{
        // backgroundImage: `linear-gradient(to bottom, ${cobaltBlue} , ${blueJeans2})`,
        backgroundImage: `linear-gradient(to bottom, ${cobaltBlue} , ${blueJeans2}), url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundOpacity: 0.3,
        backgroundBlur: "100px",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height={500}
        width={400}
        display="flex"
        flexDirection="column"
        sx={{ background: "white", borderRadius: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height={400}
          width={350}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "ubuntu",
              fontWeight: "bold",
            }}
          >
            Login to HUST Manga
          </Typography>
          <Box
            width={350}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <TextField
              type="text"
              label="Username"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={username === "" || password === ""}
              sx={{ height: 50, background: dodgerBlue, mb: 3 }}
              onClick={async () => {
                const res = await handleLogin(username, password);
                setStatus(res);
              }}
            >
              <Typography
                sx={{
                  fontFamily: "ubuntu",
                  fontWeight: "bold",
                }}
              >
                Login
              </Typography>
            </Button>
            <Box display="flex">
              <Typography sx={{ fontFamily: "ubuntu", mr: 0.5 }}>
                Don't have an account?{" "}
              </Typography>
              <Typography
                onClick={() => history.push("/register")}
                sx={{
                  fontFamily: "ubuntu",
                  cursor: "pointer",
                  color: bleuDeFrance,
                }}
              >
                Register
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            <ArrowBackIcon sx={{ mr: 1 }} />
            <Typography sx={{ fontFamily: "ubuntu" }}>
              Back to home page
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
