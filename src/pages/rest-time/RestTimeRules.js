import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Dot from "../../components/Sidebar/components/Dot";

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: "3px",
    marginLeft: "3px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    marginBottom:'15px',
    borderRadius: '20px',
}
}));

const RestTimeRules = () => {
  var classes = useStyles();
  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h3" gutterBottom paragraph>
            قوانین زمان استراحت
          </Typography>
        </Grid>
        <Grid item >
          <img className={classes.image} src="images/intro.jpg" alt="عکس قوانین" />
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Typography variant="h5" paragraph gutterBottom>
            زمان استراحت با توجه به ساعت ورود به شیفت و مسئولیت توسط نرم افزار
            استاندارد سازی و باتوجه به چارت مشخص چیده میشود.
          </Typography>
          <Typography variant="h5" paragraph gutterBottom>
            لطفا زمان استراحت بالاتر از 30 دقیقه نشود
          </Typography>
          <Typography variant="h5" paragraph gutterBottom>
            دوستان زمان استراحت به علت نفرات زیاد حاضر در شیفت بسیار فشرده
            میباشد اکیدا اعلام می شود لطفا فقط در تایم خودتون لاگ آف / لاگین
            بفرمایید
          </Typography>
        </Grid>
        <Grid item>
          <List>
            <ListItem>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText>
                لطفا در صورت نیاز به جابه جایی تایم استراحت، با افرادی که
                مسئولیت یکسانی دارند جا به جا فرمایید و حتماً به یکی از سرشیفت
                ها اطلاع دهید.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText>
                لطفا قبل از شروع تایم استراحت، به گروه خود دقت داشته باشید و
                دقیقاً در همان زمان (به مدت 30 دقیقه) لاگ آف باشید.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText>
                لطفا بعد از مشاهده اسم خود، در نرم افزار
                <Link
                  color={"primary"}
                  href={"https://sc.rasana.ir/s/s3TreRwZsJXsCAE"}
                  target={"_blank"}
                  className={classes.link}
                >
                  Alarm Clock
                </Link>
                گروه خود را فعال کنید.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText>
                رعایت سکوت و نظم در زمان استراحت کمک به همکاران Login می باشد.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText>
                لطفا در زمان استراحت کلیه ی پیگیری ها و اعلام خرابی ها و باقی
                موارد را به زمان بعد از صرف شام موکول نمایید.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Dot color="warning" />
              </ListItemIcon>
              <ListItemText>
                لطفا هرگونه پیشنهاد یا انتقادی داشتید، مورد را با CS-Heads بررسی
                فرمایید.
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default RestTimeRules;
