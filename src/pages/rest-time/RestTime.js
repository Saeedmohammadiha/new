import { useState, useEffect } from "react";
import Widget from "../../components/Widget/Widget";

import {
  makeStyles,
  Typography,
  useTheme,
  MenuItem,
  Grid,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";

import RestTable from "./components/RestTable";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({}));

const RestTime = () => {
  const theme = useTheme()
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      group: "",
    },
  })
  return (
    <>
    <RestTable/>
    <Grid lg={6} xs={12}>
      <Widget disableWidgetMenu>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography style={{ marginBottom: "20px" }}>جابجایی:</Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item md={6} sm={6} xs={12}>
              <FormControl
                fullWidth
                variant="outlined"
                style={{
                  direction: "ltr",
                }}
              >
                <InputLabel color="secondary" id="helper-lable">
                  <Typography>نام</Typography>
                </InputLabel>
                <Select
                  color="secondary"
                  name="name"
                  labelId="helper-lable"
                  id="select"
                  value={formik.values.name}
                  label="name"
                  onChange={formik.handleChange}
                >
                  <MenuItem value="">
                    <Typography>...</Typography>
                  </MenuItem>
                  <MenuItem value="شب">
                    <Typography>شام</Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <FormControl
                fullWidth
                variant="outlined"
                style={{
                  direction: "ltr",
                }}
              >
                <InputLabel color="secondary" id="helper-lable">
                  <Typography>گروه</Typography>
                </InputLabel>
                <Select
                  color="secondary"
                  name="group"
                  labelId="helper-lable"
                  id="select"
                  value={formik.values.group}
                  label="group"
                  onChange={formik.handleChange}
                >
                  <MenuItem value="ظهر">
                    <Typography>ناهار</Typography>
                  </MenuItem>
                  <MenuItem value="شب">
                    <Typography>شام</Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item align="left">
            <Button
              variant="contained"
              style={{
                backgroundColor: theme.palette.warning.dark,
                color: theme.palette.common.white,
              }}
            >
              <Typography>ثبت</Typography>
            </Button>
          </Grid>
        </Grid>
      </Widget>
    </Grid>
    </>
  )
};
export default RestTime;
