const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";

module.exports = new EntitySchema({
    name: "Time",
    tableName: "times",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
        
    },
    relations:{
        jogadores:{
            target:"Jogador",
            type: "one-to-many",
            joinTable: true
        }
    }
});