import { Router } from 'express'
import { createTeamController, deleteTeamController, listSingleTeamController, listTeamsController, updateTeamController } from '../controllers/teams.controllers'

const routesTeam = Router()

routesTeam.post('', createTeamController)
routesTeam.get('', listTeamsController)
routesTeam.get('/:id', listSingleTeamController)
routesTeam.delete('/:id', deleteTeamController)
routesTeam.patch('/:id', updateTeamController)


export default routesTeam