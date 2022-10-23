import { outdoors } from "../data/airbnb.json";

export default function handler(req, res) {
  return res.send(outdoors);
}
