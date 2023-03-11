import database from "../../database";

const listPlayerService = async () => {

    const queryResponse = await database.query(
        `SELECT 
             *
         FROM 
             jogadores;`
     )
     const validated = queryResponse.rows
     return [200, validated]
 
 }
 
 export default listPlayerService;