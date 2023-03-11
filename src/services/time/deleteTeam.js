import database from "../../database";

const deleteTeamServices = async (id) => {
   let deleted = await database.query(
        `DELETE FROM 
            times 
        WHERE 
            id = $1
        RETURNING*`,[id]
    )
      
        return [204, deleted];
      };
      
export default deleteTeamServices;