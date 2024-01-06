import dotenv from 'dotenv'
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import SocketServer from "./socketServer.js";
import { ExpressPeerServer } from "peer";
import http from 'http'
import { Server } from "socket.io";
import estateRouter from './routes/estateRouter.js';
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'
import reviewRouter from './routes/reviewRouter.js'
import notifyRouter from './routes/notifyRouter.js';
import messageRouter from './routes/messageRouter.js';
import paymentRouter from './routes/paymentRouter.js';

const app = express();
const { connect } = mongoose;
dotenv.config();
app.use(json());
app.use(cors());
app.use(cookieParser());

// Socket
const server = http.createServer(app);
const io = new Server(http);

io.on("connection", (socket) => {
  SocketServer(socket);
});

// Create peer server
ExpressPeerServer(http, { path: "/" });

// Routes
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", estateRouter);
app.use("/api", reviewRouter);
app.use("/api", notifyRouter);
app.use("/api", messageRouter);
app.use("/api", paymentRouter);

const URI = process.env.MONGODB_URL;
connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("Server is running on port", port);
});
