import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import "./workers/assignmentWorker";
import "./config/redis";
import assignmentRoutes from "./routes/assignmentRoutes";
import http from "http";

import { initSocket } from "./socket/socketServer";
dotenv.config();
connectDB();
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/assignments", assignmentRoutes);

app.get("/", (_, res) => {
  res.send("VedaAI Backend Running");
});

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

initSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});