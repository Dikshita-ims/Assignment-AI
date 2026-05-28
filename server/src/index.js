"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
require("./workers/assignmentWorker");
require("./config/redis");
const assignmentRoutes_1 = __importDefault(require("./routes/assignmentRoutes"));
const http_1 = __importDefault(require("http"));
const socketServer_1 = require("./socket/socketServer");
dotenv_1.default.config();
(0, db_1.connectDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/assignments", assignmentRoutes_1.default);
app.get("/", (_, res) => {
    res.send("VedaAI Backend Running");
});
const PORT = process.env.PORT || 5000;
const server = http_1.default.createServer(app);
(0, socketServer_1.initSocket)(server);
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map