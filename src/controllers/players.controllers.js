import createPlayerService from "../services/jogador/createPlayer"
import deletePlayerService from "../services/jogador/deletePlayer"
import listPlayerService from "../services/jogador/listPlayers"
import listSinglePlayerService from "../services/jogador/listSinglePlayer"


const createPlayerController = async (req, res) => {
    const [status, returned] = await createPlayerService(req.body)
   return res.status(status).json(returned)
}

const listPlayerController = async (req, res) => {
    const [status, returned] = await listPlayerService()
    return res.status(status).json(returned)
}

const listSinglePlayerController = async (req, res) => {
    const [status, returned] = await listSinglePlayerService(req.params)
    return res.status(status).json(returned)
}

const deletePlayerController = async (req, res) => {
    const [status, data] = await deletePlayerService(req.params.id)
    return res.status(status).json(data)
}



export {createPlayerController, deletePlayerController, listPlayerController, listSinglePlayerController}