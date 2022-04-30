import { registerReducers } from "../../../redux/reducers/registerReducers";
import { typesRegister } from "../../../redux/types/types";

describe('Prueba en registerReducers', () => {
    test('Verifica la accion register', () => {
        
        const action = 
        { 
            type: typesRegister.register,
            payload: {
                email: "prueba@prueba.com",
                pass: "abrete sesamo",
                name: "nombre"
    
            }
        }
        const estado = {};
        const respuesta = registerReducers(estado, action);
        expect(respuesta.email).toEqual(action.payload.email);
        expect(respuesta.pass).toEqual(action.payload.pass);
        expect(respuesta.name).toEqual(action.payload.name);
    })

    test('Verifica la accion diferente a register', () => {
        const action = { type: "otra acción" };
        const estado = {};
        const respuesta = registerReducers(estado, action);
        expect(respuesta).toEqual(estado);
    })

    test('Verifica la accion no definida', () => {
        const action = { type: undefined };
        const estado = {};
        const respuesta = registerReducers(estado, action);
        expect(respuesta).toEqual(estado);
    })

})