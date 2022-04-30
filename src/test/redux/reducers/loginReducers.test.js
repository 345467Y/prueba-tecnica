import { loginReducers } from "../../../redux/reducers/loginReducers";
import { typesLogin } from "../../../redux/types/types";

describe('Prueba en loginReducers', () => {
    test('Verifica la accion login', () => {
        
        const action = 
        { 
            type: typesLogin.login,
            payload: {
                email: "prueba@prueba.com",
                password: "abrete sesamo"
    
            }
        }
        const estado = {};
        const respuesta = loginReducers(estado, action);
        expect(respuesta.id).toEqual(action.payload.email);
        expect(respuesta.name).toEqual(action.payload.password);
    })

    test('Verifica la accion diferente a login', () => {
        const action = { type: "otra acción" };
        const estado = {};
        const respuesta = loginReducers(estado, action);
        expect(respuesta).toEqual(estado);
    })

})