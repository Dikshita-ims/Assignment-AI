"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIO = exports.initSocket = void 0;
const socket_io_1 = require("socket.io");
let io;
const initSocket = (server) => {
    io = new socket_io_1.Server(server, {
        cors: {
            origin: "http://localhost:3000",
        },
    });
    io.on("connection", (socket) => {
        console.log("Client Connected:", socket.id);
    });
};
exports.initSocket = initSocket;
const getIO = () => io;
exports.getIO = getIO;
//# sourceMappingURL=socketServer.js.map