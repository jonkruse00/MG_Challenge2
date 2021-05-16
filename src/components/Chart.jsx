import React from "react";
import PropTypes from "prop-types";

import {
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

import ChartUtils from "../utils/ChartUtils";
import { DAILY } from "../constants/Chart";

const HEIGHT = 300;
const WIDTH = 500;
const X_LABEL = "timestamp per hour";
const Y_LABEL = "Count";

const Chart = ({ data, incrementSize }) => {
  const sortedData = ChartUtils.groupBy(data, incrementSize);
  return (
    <>
      <ResponsiveContainer width="100%" height={HEIGHT}>
        <BarChart
          width={WIDTH}
          height={HEIGHT}
          data={sortedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="format"
            label={{
              value: X_LABEL,
              position: "insideBottom",
              dy: 10,
            }}
          />
          <YAxis
            type="number"
            domain={[0, data.length]}
            tickCount={10}
            label={{
              value: Y_LABEL,
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#30E9C7"
            border={{ border: "2px solid #999" }}
          >
            <LabelList dataKey="count" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  incrementSize: PropTypes.string,
};

Chart.defaultProps = {
  data: [],
  incrementSize: DAILY,
};

export default Chart;
