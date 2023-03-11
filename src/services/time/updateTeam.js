import { AppError } from "../../../errors"
import database from "../../database"

export const updateTeamService = async (data, id) => {
    try {
        const response = await database.query(
            `UPDATE 
                times 
            SET 
                name = $1 
            WHERE 
                times.id = $2 
            RETURNING *`,
            [data.name, id]
        ).then(res => res.rows[0])

        return [200, response]
    } catch (error) {
        throw new AppError(error.errors, 400)
    }   
}
