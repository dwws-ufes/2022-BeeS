"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv = __importStar(require("dotenv"));
const Express = __importStar(require("express"));
const cors = require('cors');
const beehiveRoutes_1 = require("./routes/beehiveRoutes");
const beeRoutes_1 = require("./routes/beeRoutes");
const honeycombRoutes_1 = require("./routes/honeycombRoutes");
const logRoutes_1 = require("./routes/logRoutes");
dotenv.config();
const app = Express.default();
console.log(process.env["FRONTEND_CORS_URL"]);
app.use(Express.json());
app.use(cors({ origin: process.env["FRONTEND_CORS_URL"] || "http://localhost:4000", credentials: true }));
app.use("/bee", beeRoutes_1.beeRoutes);
app.use("/beehive", beehiveRoutes_1.beehiveRoutes);
app.use("/honeycomb", honeycombRoutes_1.honeycombRoutes);
app.use("/log", logRoutes_1.logRoutes);
app.listen(process.env["PORT"] || 1234, () => {
    console.log(`Server is up on ${process.env["PORT"] || 1234}`);
});
