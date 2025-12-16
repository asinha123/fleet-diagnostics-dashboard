import express from "express";
import eventsRoutes from "./modules/events/events.routes";
import { errorHandler } from "./common/error-handler";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.use(express.json());

app.use(express.json());

app.use("/events", eventsRoutes);

app.use(errorHandler);

export default app;
