"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentQueue = void 0;
const bullmq_1 = require("bullmq");
exports.assignmentQueue = new bullmq_1.Queue("assignment-generation", {
    connection: {
        url: process.env.REDIS_URL,
    },
});
//# sourceMappingURL=assignmentQueue.js.map