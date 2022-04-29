import { typesMonitores } from "../types/types";


const initialState = {
    monitores: []
}

export const monitoresReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesMonitores.add:
            return {
                monitores: [action.payload]
            }

        case typesMonitores.list:
            return {
                monitores: [...action.payload]
            }

        case typesMonitores.edit:
            return {
                ...state
            }

        case typesMonitores.delete:
            return {
                monitores: state.monitores.filter(p => p.codigo !== action.payload)
            }

        default:
            return state
    }

}