import { AppError } from "../../../errors"
import database from "../../database"

const listSinglePlayerService = async (data) => {
 
    const queryResponse = await database.query(
        `SELECT 
            * 
        FROM 
            jogadores
        WHERE 
            id = $1`,
        [data.id]
    )
    if(!queryResponse.rowCount > 0){
        throw new AppError('player does not exists!', 409)
    }
    const returned = queryResponse.rows[0]
    // console.log(queryResponse)
    return [200, returned]
}


export default listSinglePlayerService;