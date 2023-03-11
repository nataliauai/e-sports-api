import * as yup from 'yup'
const createTeamSchema = yup.object().shape({
    name: yup.string().required()
})

const teamReturnSchema = yup.object().shape({
    id: yup.string(),
    name: yup.string()
})

const listTeamSchema = yup.array(teamReturnSchema);

export {createTeamSchema, teamReturnSchema, listTeamSchema};