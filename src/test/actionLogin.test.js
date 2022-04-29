import { shallowToJson } from 'enzyme-to-json';
import React from 'react';


describe('Prueba en componente actionLogin', ()=>{
    test('Debe mostrarme el ingreso con correo', ()=>{
        shallowToJson(<actionLogin/>)

    })

})