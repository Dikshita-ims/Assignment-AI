import { Server } from "socket.io";

let io: Server;

export const initSocket = (server: any) => {

  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {
    console.log("Client Connected:", socket.id);
  });
};

export const getIO = () => io;