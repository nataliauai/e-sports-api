import { AppError } from "../../../errors"
import database from "../../database"

const listTeamsService = async () => {

       const queryResponse = await database.query(
           `SELECT 
                *
            FROM 
                times;`
        )
        if(queryResponse == undefined){
            throw new AppError("team doesn't exists",404)
        }

        const validated = queryResponse.rows
        return  [200, validated]
    
    }
    
    export default listTeamsService;