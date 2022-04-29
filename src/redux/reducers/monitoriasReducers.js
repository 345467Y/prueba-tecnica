import { typesMonitorias } from "../types/types";


const initialState = {
    monitorias: []
}

export const monitoriasReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesMonitorias.add:
            return {
                monitorias: [action.payload]
            }

        case typesMonitorias.list:
            return {
                monitorias: [...action.payload]
            }

        case typesMonitorias.edit:
            return {
                ...state
            }

        case typesMonitorias.delete:
            return {
                monitorias: state.monitorias.filter(p => p.codigo !== action.payload)
            }

        default:
            return state
    }

}