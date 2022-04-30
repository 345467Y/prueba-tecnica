import { monitoresReducers } from "../../../redux/reducers/monitoresReducers";
import { typesMonitores } from "../../../redux/types/types";

describe('Prueba en monitoresReducers', () => {
    test('Verifica la accion add', () => {
        
        const action = 
        { 
            type: typesMonitores.add,
            payload: {
                nombres:'Pepito',
                apellidos:'Perez',
                codigo: '01',
                programaAcademico: 'Sistemas',
                semestre: '02',
                cedula: '10X',
                informacionContacto: 'Bogotá'
    
            }
        }
        const estado = {};
        const respuesta = monitoresReducers(estado, action);
        expect(respuesta.monitores).toEqual([action.payload]);
    })

    test('Verifica la accion list', () => {
        
        const actionAgregar = 
        { 
            type: typesMonitores.add,
            payload: {
                nombres:'Pepito',
                apellidos:'Perez',
                codigo: '01',
                programaAcademico: 'Sistemas',
                semestre: '02',
                cedula: '10X',
                informacionContacto: 'Bogotá'
    
            }
        }
        const estado = {monitores:[]};
        const respuestaAgregar = monitoresReducers(estado, actionAgregar);
        const actionListar = 
        { 
            type: typesMonitores.list,
            payload: [{
                nombres:'Pepito',
                apellidos:'Perez',
                codigo: '01',
                programaAcademico: 'Sistemas',
                semestre: '02',
                cedula: '10X',
                informacionContacto: 'Bogotá'
    
            }]
        }
        const respuestaListar = monitoresReducers(estado, actionListar);
        expect(respuestaAgregar.monitores.length).toEqual(1);
        expect(respuestaListar.monitores).toEqual(actionListar.payload);
    })

    test('Verifica la accion delete', () => {
        
        const action = 
        { 
            type: typesMonitores.add,
            payload: {
                nombres:'Pepito',
                apellidos:'Perez',
                codigo: '01',
                programaAcademico: 'Sistemas',
                semestre: '02',
                cedula: '10X',
                informacionContacto: 'Bogotá'
    
            }
        }
        const estado = {monitores:[]};
        const respuestaAgregar = monitoresReducers(estado, action);
        action.type = typesMonitores.delete;
        const respuestaEliminar = monitoresReducers(estado, action);
        expect(respuestaAgregar.monitores.length).toEqual(1);
        expect(respuestaEliminar.monitores.length).toEqual(0);
    })

})