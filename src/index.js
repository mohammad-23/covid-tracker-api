/* eslint-disable no-console */
import "@babel/polyfill/noConflict";

import express from "express";
import axios from "axios";
import { config } from "dotenv";
import cors from "cors";

config();

const whitelistlist = ["http://localhost:3000", process.env.CLIENT_URL];
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: whitelistlist,
  })
);

const axiosInstance = axios.create({
  baseURL: process.env.COVID_TRACKING_API,
});

app.get("/api/tracker", async (req, res) => {
  try {
    const { data: statesInfo } = await axiosInstance.get("states/info");
    const { data: casesData } = await axiosInstance.get("/states");

    const trackerData = casesData.map((item) => {
      const { state, positive, totalTestResults } = item;
      const currentStateInfo = statesInfo.find(
        (stateData) => stateData.state === item.state
      );

      return {
        state,
        positive,
        totalTestResults,
        notes: currentStateInfo.notes,
        covid19Site: currentStateInfo.covid19Site,
      };
    });

    res.status(200).send(trackerData);
  } catch (error) {
    res.status(500).send({ error: "Error fetching Data! Please Try Again" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
