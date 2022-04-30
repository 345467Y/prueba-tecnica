import { typesLogin, typesMonitores, typesMonitorias, typesRegister } from "../../../redux/types/types";

describe('Prueba en types', ()=>{
    test('Verifica los tipos de typesLogin', ()=>{
        expect(typesLogin.login).toEqual("login");
        expect(typesLogin.logout).toEqual("logout");
    })

    test('Verifica los tipos de typesRegister', ()=>{
        expect(typesRegister.register).toEqual("register");
    })

    test('Verifica los tipos de typesMonitorias', ()=>{
        expect(typesMonitorias.add).toEqual("add");
        expect(typesMonitorias.list).toEqual("list");
        expect(typesMonitorias.edit).toEqual("edit");
        expect(typesMonitorias.delete).toEqual("delete");
        expect(typesMonitorias.detail).toEqual("detail");
        expect(typesMonitorias.search).toEqual("search");
    })

    test('Verifica los tipos de typesMonitores', ()=>{
        expect(typesMonitores.add).toEqual("addMonitor");
        expect(typesMonitores.list).toEqual("listMonitores");
        expect(typesMonitores.edit).toEqual("editMonitor");
        expect(typesMonitores.delete).toEqual("deleteMonitor");
        expect(typesMonitores.detail).toEqual("detailMonitor");
        expect(typesMonitores.search).toEqual("searchMonitor");
    })

})