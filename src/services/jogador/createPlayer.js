import { AppError } from "../../../errors"
import database from "../../database"
import { playerReturnSchema } from "../../schemas/players"

const createPlayerService = async (data) => {
        
    const findId = await database.query (
        `SELECT
            *
        FROM
            times
        WHERE
            id = $1;`,
        [data.time_id]
    )

    if(!findId.rowCount > 0){
        throw new AppError('team does not exists!', 409)
    }

    const fiveMax = await database.query(
        `SELECT
            *
         FROM
            jogadores
         WHERE 
            time_id = $1;`,
        [data.time_id]
    )

    if(fiveMax.rowCount >= 5){
        throw new AppError('The team is complete!')
    }

    
    const queryResponse = await database.query(
        `INSERT INTO 
            jogadores (name, age, time_id)
        VALUES
            ($1, $2, $3)
        RETURNING *;`,
        [data.name, data.age, data.time_id]
    )
    
    const returned = await playerReturnSchema.validate(queryResponse.rows[0], {
        stripUnknown: true
    })
  
    return [201, returned]

}


export default createPlayerService;