import createTeamService from "../services/time/createTeam"
import deleteTeamServices from "../services/time/deleteTeam"
import listSingleTeamService from "../services/time/listSingleTeam"
import listTeamsService from "../services/time/listTeams"
import { updateTeamService } from "../services/time/updateTeam"


const createTeamController = async (req, res) => {
    const [status, returned] = await createTeamService(req.body)
    return res.status(status).json(returned)
}

const listTeamsController = async (req, res) => {
    const [status, validated] = await listTeamsService()
    return res.status(status).json(validated)
}

const listSingleTeamController = async (req, res) => {
    const [status, data] = await listSingleTeamService(req.params.id)
    return res.status(status).json(data)
}
const deleteTeamController = async (req, res) => {
    const [status, data] = await deleteTeamServices(req.params.id)
    return res.status(status).json(data)
}

const updateTeamController = async (req, res) => {
    const [status, data] = await updateTeamService(req.body, req.params.id)
    return res.status(status).json(data)
}


export {createTeamController, listTeamsController, listSingleTeamController, deleteTeamController, updateTeamController};


