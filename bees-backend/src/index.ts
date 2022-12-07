import 'reflect-metadata';
import * as dotenv from 'dotenv'
import * as Express from "express"
const cors = require('cors')
import { beehiveRoutes } from './routes/beehiveRoutes';
import { beeRoutes } from './routes/beeRoutes';
import { honeycombRoutes } from './routes/honeycombRoutes';
import { logRoutes } from './routes/logRoutes';

dotenv.config()
const app = Express.default()

console.log(process.env["FRONTEND_CORS_URL"])

app.use(Express.json())
app.use(cors({ origin: process.env["FRONTEND_CORS_URL"] || "http://localhost:4000", credentials: true }))

app.use("/bee", beeRoutes)
app.use("/beehive", beehiveRoutes)
app.use("/honeycomb", honeycombRoutes)
app.use("/log", logRoutes)

app.listen(process.env["PORT"] || 1234, () => {
    console.log(`Server is up on ${process.env["PORT"] || 1234}`)
})