import React, { useEffect } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { resetQuery, setGte, setLt } from "../redux/paramSlice";
import { getContent } from "../services/getContent";
import { loadLog } from "../redux/logSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 300,
  },
}));

const DatePickers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const query = useSelector((state) => state.param.query);
  const gte = useSelector((state) => state.param.gte);
  const lt = useSelector((state) => state.param.lt);

  /**
   * Watch for Query or GTE update
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await getContent(query);
      dispatch(loadLog(result));
    };
    fetchData();
  }, [dispatch, query, gte]);

  /**
   * Watch for Query or LT update
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await getContent(query);
      dispatch(loadLog(result));
    };
    fetchData();
  }, [dispatch, query, lt]);

  const handleGreaterThanDate = (e) => {
    dispatch(setGte(e.target.value));
  };

  const handleLessThanDate = (e) => {
    dispatch(setLt(e.target.value));
  };

  const handleReset = () => {
    dispatch(resetQuery());
  };

  return (
    <>
      <form className={classes.container} noValidate>
        <TextField
          label="Start Time"
          InputLabelProps={{
            shrink: true,
          }}
          type="datetime-local"
          value={gte}
          id="state-time-input"
          onChange={handleGreaterThanDate}
          className={classes.textField}
        />
      </form>
      <form className={classes.container} noValidate>
        <TextField
          type="datetime-local"
          value={lt}
          label="End Time"
          InputLabelProps={{
            shrink: true,
          }}
          id="end-time-input"
          onChange={handleLessThanDate}
          className={classes.textField}
        />
      </form>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleReset}
      >
        Refresh
      </Button>
    </>
  );
};

export default DatePickers;
