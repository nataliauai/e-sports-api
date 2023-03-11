var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Jogador", 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        text: {
            type: "text",
        },
    },
    relations: {
        times: {
            target: "Time",
            type: "one-to-one",
            joinTable: true,
        },
    },
})