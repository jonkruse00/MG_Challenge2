import axios from "axios";
import moment from "moment";
import { MG_FORMAT } from "../constants/Chart";
import { DEFAULT_QUERY } from "../constants/Query";
/**
 * Query  proxy api endpoint
 * Then transform the incoming data to more workable state.
 * Flatten Data, Remove "_", and format timestamps for sorting
 */
export const getContent = async (query) => {
  const params = query === undefined ? DEFAULT_QUERY : query;
  return axios
    .post("/api/proxySearch", params)
    .then((res) =>
      res.data.hits.map((hit) => {
        const {
          _id,
          _source: {
            timestamp,
            clientip,
            geo: { srcdest },
            request,
            response,
          },
        } = hit;

        return {
          id: _id,
          timestamp,
          timeStampedFormatted: moment.utc(timestamp).format(MG_FORMAT),
          clientip,
          srcdest,
          request,
          response: Number(response),
        };
      })
    )
    .catch(() => {});
};

export default getContent;
