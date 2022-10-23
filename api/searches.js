import { searches } from "../data/airbnb.json";

export default function handler(req, res) {
  return res.send(searches);
}
