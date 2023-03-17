import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Link,
  Grid,
} from "@material-ui/core";
import Widget from "../../components/Widget/Widget";

const useStyles = makeStyles((theme) => ({
  root: { width: 350, maxWidth: 375 },
  media: {
    height: 250,
    transition: " all 0.2s linear;",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "blur(1px)",
    },
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const data = [
  {
    id: "1",
    link: "https://canteen.shatel.ir/",
    image: "/images/OrderPortal.jpg",
    title: "برای ثبت سفارش غذا از پورتال کلیک کنید",
  },
  {
    id: "2",
    link: "https://snappfood.ir/",
    image: "images/Snappfood.jpg",
    title: "برای سفارش غذا از اسنپ فود کلیک کنید",
  },
  {
    id: "3",
    link: "https://hr.rasana.ir/HRT/HR/Lists/List22/MyItem.aspx",
    image: "images/Offer.jpg",
    title: "ارسال پیشنهادات سفارش غذا از پورتال",
  },
  {
    id: "4",
    link: "https://shop.shatel.com/Products?Category=6",
    image: "images/Boofe.jpg",
    title: "برای خرید از بوفه شاتل کلیک کنید",
  },
  {
    id: "5",
    link:
      "https://bpm.rasana.ir/Process%20Management/DocLib2/Other/CoffeShop-menu.pdf",
    image: "images/CoffeeShop.jpg",
    title: "منو کافی شاپ تهران",
  },
];

export default function Services() {
  const classes = useStyles();
  return (
    <Widget disableWidgetMenu>
      <Grid container justify="center" alignItems="center" spacing={4}>
        {data?.map((item) => {
          return (
            <Grid item key={item.id}>
              <Link className={classes.link} href={item.link} target={"_blank"}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography>{item.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Widget>
  );
}
