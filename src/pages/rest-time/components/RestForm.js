import {
    Grid,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Typography,
    Button,
    CircularProgress,
    TextField,
    useTheme,
    IconButton,
  } from "@material-ui/core";
  import { useFormik } from "formik";
  import { useState } from "react";
  import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Widget from "../../../components/Widget/Widget";
  
  const useStyle = makeStyles((theme) => ({
    card: {
      minHeight: "auto",
      display: "flex",
      flexDirection: "column",
    },
  }));
  
  const RestForm = ({setStatus}) => {
    const [file, setFile] = useState(null);
    const [btnLoading, setBtnLoading] = useState(true);
    const [subLoading, setSubLoading] = useState(true);
    const theme = useTheme();
    const classes = useStyle();
    const formik = useFormik({
      initialValues: {
        sutableNoon: false,
        time: "ظهر",
        balacne: false,
        emptyGroups: false,
        loginsShift: false,
        loginsResponsibility: false,
        offlinesshift: false,
        offlinesResponsibility: false,
      },
    });
  
    /**
     * uploading file to sever
     */
    const handleUpload = () => {
      //file upload
      // setBtnLoading(true)
      //axios.post().then(()=>{setBtnLoading(false)}).catch(()=>{setBtnLoading(false)})
    };
  
    return (
      <>
        <PageTitle title="چیدمان زمان استراحت" />
        <Grid container spacing={4} direction="column">
          <Grid item lg={6} md={12}>
            <Widget disableWidgetMenu className={classes.card}>
              <Typography>آپلود شیفت</Typography>
              <Grid container>
                <Button
                  variant="contained"
                  size="medium"
                  color="secondary"
                  component="label"
                >
                  <Typography>انتخاب فایل</Typography>
  
                  <input
                    type="file"
                    hidden
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setFile(e.target.files[0]);
                    }}
                  />
                </Button>
                {file ? (
                  <>
                    <Typography style={{ marginRight: "5px" }}>
                      {file ? file.name : null}
                    </Typography>
                    <IconButton color="primary" onClick={()=>setFile(null)}>
                      <DeleteForeverIcon />
                    </IconButton>
                  </>
  
                ) : null}
              </Grid>
  
              <Button
                variant="contained"
                size="small"
                color="primary"
                disabled={file ? false : true}
                style={{ marginTop: "20px" }}
                onClick={handleUpload}
              >
                {btnLoading ? (
                  <>
                    <Typography>آپلود فایل</Typography>
                    <CircularProgress size={15} style={{ color: "white" }} />
                  </>
                ) : (
                  <Typography>آپلود فایل</Typography>
                )}
              </Button>
            </Widget>
          </Grid>
          <Grid item lg={6} md={12}>
            <Widget disableWidgetMenu upperTitle>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <FormControl
                    variant="outlined"
                    style={{
                      width: "150px",
                      direction: "ltr",
                      marginRight: "28px",
                    }}
                  >
                    <InputLabel color="secondary" id="helper-lable">
                      <Typography>وعده</Typography>
                    </InputLabel>
                    <Select
                      color="secondary"
                      name="time"
                      labelId="helper-lable"
                      id="select"
                      value={formik.values.time}
                      label="time"
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
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox checked={formik.values.balacne} />}
                    label="استراحت مناسب شیفت ظهر"
                    name="sutableNoon"
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox checked={formik.values.balacne} />}
                    label="چیدن در گروه با تعداد نفرات برابر "
                    name="balacne"
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox checked={formik.values.balacne} />}
                    label="متعادل کردن گروه های استراحت"
                    name="balacne"
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox checked={formik.values.emptyGroups} />}
                    label="نمایش گروه های استراحت خالی"
                    name="emptyGroups"
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox checked={formik.values.loginsShift} />}
                    label="نمایش شیفت افراد لاگین"
                    name="loginsShift"
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox checked={formik.values.loginsResponsibility} />
                    }
                    label="نمایش مسئولیت افراد لاگین"
                    name="loginsResponsibility"
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox checked={formik.values.offlinesshift} />}
                    label="نمایش شیفت افراد لاگاف"
                    name="offlinesshift"
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox checked={formik.values.offlinesResponsibility} />
                    }
                    label=" نمایش مسئولیت افراد لاگاف"
                    name="offlinesResponsibility"
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    color="secondary"
                    style={{
                      width: "150px",
                      direction: "ltr",
                      marginRight: "28px",
                    }}
                    id="outlined-number"
                    label={<Typography>ظرفیت آزاد</Typography>}
                    type="number"
                  />
                </Grid>
                <Grid item align="left">
                  <Button variant="contained" color="primary" onClick={()=>{setStatus('table')}}>
                    {subLoading ? (
                      <>
                        <Typography>تایید</Typography>
                        <CircularProgress size={15} style={{ color: "white" }} />
                      </>
                    ) : (
                      <Typography>تایید</Typography>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Widget>
          </Grid>
        </Grid>
      </>
    );
  };
  
  export default RestForm;
  