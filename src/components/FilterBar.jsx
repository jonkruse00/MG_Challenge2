import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import {
  Select,
  MenuItem,
  makeStyles,
  InputLabel,
  Grid,
  FormControl,
} from "@material-ui/core";

import { updateIncrement } from "../redux/chartSlice";
import { HOURLY, DAILY, MONTHLY, YEARLY, MG_FORMAT } from "../constants/Chart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#98C2F6",
    "&:hover": {
      backgroundColor: "#68A2EA",
    },
  },
  countContainer: {
    color: "#A8A8A8",
    "& span": {
      color: "#000",
      fontWeight: "bold",
      fontSize: "1.25rem",
      "&::after": {
        content: '" "',
      },
    },
  },
}));

const FilterBar = ({ dataCount }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const increment = useSelector((state) => state.chart.increment);
  const lt = useSelector((state) => state.param.lt);
  const gte = useSelector((state) => state.param.gte);

  const handleIncrementChange = (e) => {
    dispatch(updateIncrement(e.target.value));
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <div className={classes.countContainer}>
          <span>{dataCount}</span>
          hits
        </div>
      </Grid>
      <Grid spacing={2} justify="center" item direction="row" container>
        <Grid item>
          <div>
            <h4>
              {`${moment.utc(gte).format(MG_FORMAT)}
                 - 
                ${moment.utc(lt).format(MG_FORMAT)}`}
              &#9866;
            </h4>
          </div>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel shrink id="incrementor">
              Increments
            </InputLabel>
            <Select
              value={increment}
              onChange={handleIncrementChange}
              labelId="incrementor"
              id="incrementor-input"
              className={classes.selectEmpty}
            >
              <MenuItem value={HOURLY}>Hours</MenuItem>
              <MenuItem value={DAILY}>Days</MenuItem>
              <MenuItem value={MONTHLY}>Months</MenuItem>
              <MenuItem value={YEARLY}>Years</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

FilterBar.propTypes = {
  dataCount: PropTypes.number,
};

FilterBar.defaultProps = {
  dataCount: 0,
};

export default FilterBar;
