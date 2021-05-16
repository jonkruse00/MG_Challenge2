import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid, makeStyles } from "@material-ui/core";

import DatePickers from "../components/DatePickers";
import HitTable from "../components/table/HitTable";
import FilterBar from "../components/FilterBar";
import Chart from "../components/Chart";
import { loadLog } from "../redux/logSlice";
import { getContent } from "../services/getContent";

const useStyles = makeStyles((theme) => ({
  filterBar: {
    marginBottom: theme.spacing(2),
  },
  dataPicker: {
    marginBottom: theme.spacing(2),
  },
  dataContainer: {
    boxShadow: "0 0 10px #ccc",
    border: "1px solid #ECECEC",
  },
  chart: {
    marginBottom: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const hits = useSelector((state) => state.log.content);
  const increment = useSelector((state) => state.chart.increment);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getContent();
      dispatch(loadLog(result));
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>MG Senior Dev Challenge</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Container maxWidth="lg" justify="center" direction="column">
        <Grid container spacing={4}>
          <Grid
            xs={12}
            justify="flex-end"
            item
            container
            className={classes.dataPicker}
          >
            <DatePickers />
          </Grid>
          <Grid container item xs={12} className={classes.dataContainer}>
            <Grid
              xs={12}
              item
              container
              className={classes.filterBar}
              align="center"
            >
              <FilterBar dataCount={hits.length} />
            </Grid>
            <Grid
              xs={12}
              justify="center"
              item
              container
              className={classes.chart}
            >
              <Chart data={hits} incrementSize={increment} />
            </Grid>
            <Grid item xs={12}>
              <HitTable hits={hits} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
