import database from "../../database";

const deletePlayerService = async (id) => {
    let data = await database.query(
         `DELETE FROM 
             jogadores
         WHERE 
             id = $1
         RETURNING*;`,
         [id]
     )
       
         return [204, data];
       };
       
 export default deletePlayerService;