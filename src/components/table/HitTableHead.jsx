import React from "react";
import PropTypes from "prop-types";
import {
  TableSortLabel,
  TableRow,
  TableHead,
  TableCell,
} from "@material-ui/core";

const HEADERS = [
  {
    rightAlign: false,
    label: "Time",
    id: "timestamp",
  },
  {
    rightAlign: true,
    label: "ClientIP",
    id: "clientip",
  },
  {
    rightAlign: true,
    label: "Geo.SrcDest",
    id: "srcdest",
  },
  {
    rightAlign: true,
    label: "Request",
    id: "request",
  },
  {
    rightAlign: true,
    label: "Response",
    id: "response",
  },
];

const HitTableHead = ({ classes, order, orderBy, onRequestSort }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={classes.header}>
      <TableRow>
        {HEADERS.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.rightAlign ? "right" : "left"}
            padding="default"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

HitTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default HitTableHead;
