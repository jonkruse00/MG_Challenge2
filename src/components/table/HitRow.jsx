import React from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell } from "@material-ui/core";

const HitRow = ({ timestamp, clientip, srcdest, request, response }) => (
  <TableRow hover tabIndex={-1} scope="row">
    <TableCell component="td" padding="default">
      {timestamp}
    </TableCell>
    <TableCell component="td" align="right">
      {clientip}
    </TableCell>
    <TableCell component="td" align="right">
      {srcdest}
    </TableCell>
    <TableCell component="td" align="right">
      {request}
    </TableCell>
    <TableCell component="td" align="right">
      {response}
    </TableCell>
  </TableRow>
);

HitRow.propTypes = {
  timestamp: PropTypes.string.isRequired,
  srcdest: PropTypes.string.isRequired,
  response: PropTypes.number.isRequired,
  request: PropTypes.string.isRequired,
  clientip: PropTypes.string.isRequired,
};

export default HitRow;
