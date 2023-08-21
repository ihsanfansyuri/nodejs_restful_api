import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/api.js";
import cors from "cors";

export const web = express();
web.use(
  cors({
    origin: [process.env.WEB_URL, process.env.SERVER_URL],
    credentials: true, //access-control-allow-credentials:true
    allowedHeaders: [
      "Access-Control-Allow-Headers",
      "Origin, Accept",
      "X-Requested-With",
      "Content-Type",
      "Access-Control-Request-Method",
      "Access-Control-Request-Headers",
    ],
    optionSuccessStatus: 200,
  })
);
web.use(express.json());

web.use(publicRouter);
web.use(userRouter);

web.use(errorMiddleware);
