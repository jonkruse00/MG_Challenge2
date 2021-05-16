import moment from "moment";
import { CHART_LABEL_FORMAT, MONTHLY } from "../constants/Chart";

const ChartUtils = {
  groupBy: (data, userFormat) => {
    const chosenFormat =
      CHART_LABEL_FORMAT[userFormat] !== undefined
        ? CHART_LABEL_FORMAT[userFormat]
        : CHART_LABEL_FORMAT[MONTHLY];

    const groupHits = [];
    let format;
    let idx;
    /**
     * Loop over each hit in the data set
     *  - convert each timestamp to the chosen format
     *  - find the matching format,
     *
     *  - if exists ++ the count
     *    if none create it
     */
    data.forEach((hit) => {
      format = moment.utc(hit.timestamp).format(chosenFormat);
      if (groupHits.length === 0) {
        groupHits.push({
          format,
          count: 1,
        });
      } else {
        // Find if it exits a matching group
        idx = groupHits.findIndex((gd) => gd.format === format);
        if (idx === -1) {
          groupHits.push({
            format,
            count: 1,
          });
        } else {
          groupHits[idx].count += 1;
        }
      }
    });

    return groupHits;
  },
};

export default ChartUtils;
