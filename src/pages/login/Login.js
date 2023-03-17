import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();
  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [loginValue, setLoginValue] = useState("cts");
  var [passwordValue, setPasswordValue] = useState("password");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Shatel CTS</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Fade in={error}>
            <Typography color="secondary" className={classes.errorMessage}>
              ظاهرا مشکلی پیش آمده :(
            </Typography>
          </Fade>
          <TextField
            id="username"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            margin="normal"
            placeholder="نام کاربری"
            type="text"
            fullWidth
          />
          <TextField
            id="password"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            margin="normal"
            placeholder="رمز عبور"
            type="password"
            fullWidth
          />
          <div className={classes.formButtons}>
            {isLoading ? (
              <CircularProgress size={26} className={classes.loginLoader} />
            ) : (
              <Button
                disabled={loginValue.length === 0 || passwordValue.length === 0}
                onClick={() =>
                  loginUser(
                    userDispatch,
                    loginValue,
                    passwordValue,
                    props.history,
                    setIsLoading,
                    setError,
                  )
                }
                variant="contained"
                color="primary"
                size="large"
                style={{ fontSize: "18px" }}
              >
                ورود
              </Button>
            )}
          </div>
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2022 تمام حقوق برای{" "}
          <a style={{ textDecoration: "none", color: "inherit" }}>RTIM</a> محفوظ
          است
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
