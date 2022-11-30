import 'reflect-metadata';
import * as dotenv from 'dotenv'
import * as Express from "express"
import { beehiveRoutes } from './routes/beehiveRoutes';
import { beeRoutes } from './routes/beeRoutes';
import { honeycombRoutes } from './routes/honeycombRoutes';
import { logRoutes } from './routes/logRoutes';

dotenv.config()
const app = Express.default()

app.use(Express.json())
app.use("/bee", beeRoutes)
app.use("/beehive", beehiveRoutes)
app.use("/honeycomb", honeycombRoutes)
app.use("/log", logRoutes)

app.listen(process.env["PORT"] || 1234, () => {
    console.log(`Server is up on ${process.env["PORT"] || 1234}`)
})