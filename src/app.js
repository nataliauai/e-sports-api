import "express-async-errors";
import express from "express"
import routesTeam from "./routes/routesTeam";
import routesPlayers from "./routes/routesPlayer";
import { errorHandler } from "../errors";

const app = express()

app.use(express.json())
app.use(errorHandler)
app.use('/times', routesTeam)
app.use('/jogadores', routesPlayers)

export default app