const DEFAULT_QUERY = {
  query: {
    range: {
      timestamp: {
        gte: "2021-04-04T10:19",
        lt: "2021-04-06T00:00",
      },
    },
  },
  size: 1000,
};

// eslint-disable-next-line import/prefer-default-export
export { DEFAULT_QUERY };
