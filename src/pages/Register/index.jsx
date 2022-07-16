import { TextField, Box, Typography, Button } from "@mui/material";
import { useCustomTheme } from "src/contexts/themeContext";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Background from "src/assets/images/manga_bg.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import handleRegister from "./handleRegister";
import { useSnackbar } from "notistack";

export default function Register() {
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

  const { enqueueSnackbar } = useSnackbar();

  const [res, setRes] = useState("");

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (res?.status === 200) {
      enqueueSnackbar("Register successfully! Now you can log in", {
        variant: "success",
      });
      history.push("/login");
      setRes("");
    } else if (res?.status === 404) {
      enqueueSnackbar("Register Failed! Please try again!", {
        variant: "error",
      });
      setRes("");
    } else if (res?.status === 400) {
      enqueueSnackbar(res?.data?.detail, {
        variant: "error",
      });
      setRes("");
    }
  }, [enqueueSnackbar, history, res, username]);
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
        height={650}
        width={400}
        display="flex"
        flexDirection="column"
        sx={{ background: "white", borderRadius: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
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
              mb: 4,
            }}
          >
            Create a new account
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
              type="text"
              label="Display name"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setPassword(e.target.value)}
              error={password !== confirmPassword}
              helperText={
                password !== confirmPassword ? "Password not match" : ""
              }
            />
            <TextField
              label="Confirm password"
              type="password"
              fullWidth
              sx={{ mb: 3 }}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={password !== confirmPassword}
              helperText={
                password !== confirmPassword ? "Password not match" : ""
              }
            />
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ height: 50, background: dodgerBlue, mb: 3 }}
              disabled={
                password !== confirmPassword ||
                username === "" ||
                displayName === "" ||
                email === "" ||
                password === ""
              }
              onClick={async () => {
                const res = await handleRegister(
                  username,
                  displayName,
                  password,
                  email
                );
                setRes(res);
              }}
            >
              <Typography
                sx={{
                  fontFamily: "ubuntu",
                  fontWeight: "bold",
                }}
              >
                Register
              </Typography>
            </Button>
            <Box
              display="flex"
              sx={{ cursor: "pointer" }}
              onClick={() => history.push("/login")}
            >
              <ArrowBackIcon sx={{ mr: 1 }} />
              <Typography sx={{ fontFamily: "ubuntu" }}>
                Back to login page
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
