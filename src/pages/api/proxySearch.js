import axios from "axios";
import { KIBANA_API_ENDPOINT } from "../../constants/Api";

const handler = async (req, res) => {
  try {
    await axios.post(KIBANA_API_ENDPOINT, req.body).then((response) => {
      const {
        hits: {
          total: { value },
          hits,
        },
      } = response.data;
      return res.status(200).json({ total: value, hits });
    });
  } catch (error) {
    return res.status(error.status || 500).end(error.message);
  }
  return null;
};

export default handler;
