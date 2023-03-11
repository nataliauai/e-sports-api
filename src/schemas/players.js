import * as yup from 'yup'

const createPlayerSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
    team_id: yup.string().required()
})

const playerReturnSchema = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    age: yup.number(),
    time_id: yup.string()
})

const listPlayerSchema = yup.array(playerReturnSchema)

export {createPlayerSchema, playerReturnSchema, listPlayerSchema}