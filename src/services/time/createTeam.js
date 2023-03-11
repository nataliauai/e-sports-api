
import { AppError } from '../../../errors'
import database from '../../database'
import { teamReturnSchema } from '../../schemas/teams'
    
const createTeamService = async (data) => {
    console.log(data)
    const search = await database.query(
            `SELECT
                name
            FROM
                times
            WHERE
                name = $1`,
            [data.name]
        )
            
        if(search.rowCount > 0){
            console.log(search.rowCount)
            throw new AppError('team already exists!', 400)
            
        }
    
        
        const queryResponse = await database.query(
            `INSERT INTO 
                times (name)
            VALUES
                ($1)
            RETURNING *;`,
            [data.name]
        )
    
        const returned = await teamReturnSchema.validate(queryResponse.rows[0], {
            stripUnknown: true
        })
        
        return [201, returned]
    
    }
    

export default createTeamService;