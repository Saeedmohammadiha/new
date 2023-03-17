import { useState, useEffect } from "react";

import * as shamsi from "shamsi-date-converter";
import PN from "persian-number";
import MOCK_DATA from '../MOCK_DATA'
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Zoom,
  withStyles,
  CircularProgress,
  TableContainer,
  Grid,
} from "@material-ui/core";
import classNames from "classnames";
import { getRest } from "../../../services/http.services";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Widget from "../../../components/Widget/Widget";
import { columnsDetector } from "../../../services/helpers";
//creating a custom Tooltip
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  table: {
    minWidth: "800px",
  },
  tableHead: {
    fontSize: ".75rem",
    border: "2px solid white",
    borderRadius: "10px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },

  logins: {
    fontSize: ".8rem",
    display: "flex",
    justifyContent: "center",
    padding: "3px",
    borderRadius: "16px",
    "&:nth-child(even)": {
      backgroundColor: theme.palette.grey[300],
    },

    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      cursor: "pointer",
    },
  },
  offlines: {
    color: theme.palette.secondary.dark,
  },
}));

const RestTable = () => {
  const [data, setData] = useState(MOCK_DATA);
  const [date, setDate] = useState();
  const [colomns, setColumns] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();
  const classes = useStyles();

  // useEffect(() => {
  //   getRest()
  //     .then((response) => {
  //       if (response.data.length == 0) {
  //         const thisHour = new Date().getHours();
  //         if (thisHour >= 10 || thisHour <= 12) {
  //           setMessage(
  //             "زمان بندی استراحت توسط سرشیفت تایید نشده است لطفا بازه دیگری مراجعه نمایید...",
  //           );
  //         }
  //         if (thisHour >= 17 || thisHour <= 19) {
  //           setMessage(
  //             "زمان بندی استراحت توسط سرشیفت تایید نشده است لطفا بازه دیگری مراجعه نمایید...",
  //           );
  //         } else {
  //           if (data == null) {
  //             if (thisHour >= 10 || thisHour <= 12) {
  //               {
  //                 setMessage(
  //                   "زمان بندی استراحت توسط سرشیفت تایید نشده است لطفا به سرشیفت مراجعه نمایید...",
  //                 );
  //               }
  //               if (thisHour >= 17 || thisHour <= 19) {
  //                 setMessage(
  //                   "زمان بندی استراحت توسط سرشیفت تایید نشده است لطفا بازه دیگری مراجعه نمایید...",
  //                 );
  //               }
  //             } else {
  //               setMessage(
  //                 "در این بازه، زمان بندی استراحتی در نظر گرفته نشده است.",
  //               );
  //             }
  //             setIsLoading(false);
  //           }
  //         }
  //       } else {
  //         setData(response.data);
  //         setColumns(columnsDetector(response.data));
  //         const englishNumber = shamsi
  //           .gregorianToJalali(response.data[0].Date)
  //           .join("/");
  //         const persianNumber = PN.convertEnToPe(englishNumber);
  //         setDate(persianNumber);
  //         setIsLoading(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setMessage(
  //         "اطلاعات از سرور آرتیم دریافت نشد.لطفا مشکل جهت پیگیری به سرشیفت ارجاع داده شود ... ",
  //       );
  //       setIsLoading(false);
  //     });
  // }, []);

  const table = (
    <>
      <PageTitle title={`زمان استراحت ${date ? date : ""}`} />
      <Grid md={12}>
        <Widget disableWidgetMenu upperTitle>
          <TableContainer style={{ overflowX: "auto" }}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {colomns?.map((group) => {
                    return (
                      <TableCell key={group.id} className={classes.tableHead}>
                        <Typography variant="p" color="text">
                          {group.StartTime} - {group.EndTime} (گروه{" "}
                          {group.Number})
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((group) => {
                  if (group.StartTime !== null) {
                    return (
                      <TableCell>
                        {group.Logins?.map((person) => {
                          return (
                            <TableCell className={classes.logins}>
                              {person.LastName}
                            </TableCell>
                          );
                        })}
                        {group.Offlines.map((person) => {
                          return (
                            <TableCell
                              className={classNames(
                                classes.logins,
                                classes.offlines,
                              )}
                            >
                              <LightTooltip
                                TransitionComponent={Zoom}
                                arrow
                                placement="top"
                                title={
                                  <Typography color="text">
                                    {person.ResponsibilityName}
                                  </Typography>
                                }
                              >
                                <span>{person.LastName}</span>
                              </LightTooltip>
                            </TableCell>
                          );
                        })}
                      </TableCell>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Widget>
      </Grid>
    </>
  );

  const messageView = (
    <div className={classes.center}>
      <Typography>{message}</Typography>
    </div>
  );
  const loading = (
    <div className={classes.center}>
      <CircularProgress size={70} />
    </div>
  );

  return isLoading ? loading : data ? table : messageView;
};
export default RestTable;
