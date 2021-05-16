import React from "react";
import {
  TableContainer,
  TableBody,
  Table,
  Paper,
  TablePagination,
} from "@material-ui/core";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TableUtils from "../../utils/TableUtils";
import HitTableHead from "./HitTableHead";
import HitRow from "./HitRow";

const { getComparator, stableSort } = TableUtils;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  container: {
    maxHeight: 400,
  },
  header: {
    backgroundColor: "#98C2F6",
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const HitTable = ({ hits }) => {
  const classes = useStyles();

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("timestamp");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
            stickyHeader
          >
            <HitTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(hits, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <HitRow
                    timestamp={item.timeStampedFormatted}
                    srcdest={item.srcdest}
                    response={item.response}
                    request={item.request}
                    key={item.id}
                    clientip={item.clientip}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[
            3,
            Math.floor(hits.length * 0.5),
            Math.floor(hits.length * 0.75),
            hits.length,
          ]}
          component="div"
          count={hits.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

HitTable.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object),
};

HitTable.defaultProps = {
  hits: [],
};

export default HitTable;
