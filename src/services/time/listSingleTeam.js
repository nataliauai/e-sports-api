import { AppError } from "../../../errors"
import database from "../../database"


const listSingleTeamService = async (id) => {
 
        const data = await database.query(
            `SELECT 
                * 
            FROM 
                times 
            WHERE 
                id = $1`,
                [id])
            .then((res) => res.rows[0])

        if(!data){
            throw new AppError("Team doesn't exists",404)
        }
     

        return [200, data]

}

export default listSingleTeamService