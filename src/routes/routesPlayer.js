import { Router } from 'express'
import { createPlayerController, deletePlayerController, listPlayerController, listSinglePlayerController } from '../controllers/players.controllers'

const routesPlayers = Router()

routesPlayers.post('', createPlayerController)
routesPlayers.get('', listPlayerController)
routesPlayers.get('/:id', listSinglePlayerController)
routesPlayers.delete('/:id', deletePlayerController)

export default routesPlayers