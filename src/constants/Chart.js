const YEARLY = "YYYY";

const MONTHLY = "MMM";

const HOURLY = "HH";

const DAILY = "DD";

const CHART_LABEL_FORMAT = {
  [DAILY]: "MMM DD, YYYY",
  [HOURLY]: "MMM DD, YYYY @ HH:00",
  [MONTHLY]: "MMM YYYY",
  [YEARLY]: "YYYY",
};

const MG_FORMAT = "MMM DD, YYYY @ hh:mm:ss.SSS";

export { MONTHLY, MG_FORMAT, HOURLY, DAILY, CHART_LABEL_FORMAT, YEARLY };
