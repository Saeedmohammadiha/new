import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Modal,
  Grid,
  Box,
} from "@material-ui/core";
import { useState } from "react";
import Widget from "../../components/Widget/Widget";

const useStyles = makeStyles((theme) => ({
  root: { width: 325, maxWidth: 350 },
  media: {
    height: 250,
    transition: " all 0.2s linear;",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  imageContainer: {
    height: "80vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  img: { width: "100%", borderRadius: "10px" },
}));

        
           
const data = [
  {id: "1",image: 'images/img-23.jpg',title: 'سر گروه های واحد',},
  {id: "2",image: 'images/img-22.jpg',title: 'دورهمی همکاران تهران گروه آروشا',},
  {id: "3",image: 'images/img-21.jpg',title: 'دورهمی صبحانه همکاران کرج گروه آتریسا',},
  {id: "4",image: 'images/img-20.jpg',title: 'دورهمی صبحانه همکاران کرج گروه شینا',},
  {id: "5",image: 'images/img-19.jpg',title: 'دورهمی همکاران تهران گروه اهورا'},
  {id: "6",image: 'images/img-18.jpg',title: 'دورهمی صبحانه همکاران تهران'},
  {id: "7",image: 'images/img-17.jpg',title: 'دورهمی  همکاران تهران گروه آتلانتیس'},
  {id: "8",image: 'images/img-16.jpg',title: 'دورهمی صبحانه همکاران کرج گروه برمودا'},
  {id: "9",image: 'images/img-10.jpg',title: 'مسابقه آشپزی همکاران کرج'},
  {id: "10",image: 'images/img-14.jpg',title: 'دورهمی صبحانه همکاران تهران گروه آریا'},
  {id: "11",image: 'images/img-12.jpg',title: 'دورهمی صبحانه همکاران تهران'},
  {id: "12",image: 'images/img-11.jpg',title: 'صبحانه همکاران تهران'},
  {id: "13",image: 'images/img-15.jpg',title: 'دورهمی صبحانه همکاران کرج گروه آرامیس'},
];

export default function ImgGallery() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [srcImage, setSrcImage] = useState();

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Widget disableWidgetMenu>
      <Grid container justify="center" alignItems="center" spacing={4}>
        <Modal open={open} onClose={handleClose} aria-labelledby={`Modal`}>
          <Box sx={style}>
            <div className={classes.imageContainer}>
              <img className={classes.img} id={`Modal`} src={srcImage} alt="" />
            </div>
          </Box>
        </Modal>
        {data?.map((item) => {
          return (
            <>
              <Grid item key={item.id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.title}
                      onClick={() => {
                        setSrcImage(item.image);
                        setOpen(true);
                      }}
                    />
                    <CardContent>
                      <Typography>{item.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Widget>
  );
}
