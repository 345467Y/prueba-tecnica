import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAsyn } from '../redux/actions/actionMonitorias';
import styled from "styled-components";
import { listMonitoresAsyn } from '../redux/actions/actionMonitores';

const DivContenedor = styled.div`
  width: 100%;
  overflow-x: auto; 
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  flex-direction: column;
`;

const DivContenedorTabla = styled.div`
  width: 100%;
  overflow-x: auto; 
  display: flex;
  justify-content: center;
`;

const DivTitulo = styled.div`
  width: 100%;
  overflow-x: auto; 
  display: flex;
  justify-content: center;
`;

const TrElemento = styled.tr`
`;

const TableHeader = styled.th`
  border: 1px solid #999;
  padding: 0.5rem;
`;

const TableD = styled.td`
  border: 1px solid #999;
  padding: 0.5rem;
`;



const Home = () => {
    const dispatch = useDispatch()

    const { monitorias } = useSelector(store => store.monitorias)
    const [ filtrar, setFiltrar ] = useState(false);
    const [ monitoriasFiltradas, setMonitoriasFiltradas ] = useState([]);
    
    const { monitores } = useSelector(store => store.monitores)

    useEffect(() => {
        dispatch(listAsyn());
        dispatch(listMonitoresAsyn());
    }, [])

    function obtenerMonitorDeCodigo(codigoRecibido){
        const monitor = monitores.find(m=>m.codigo===codigoRecibido);
        if(codigoRecibido && monitor){
            return `${monitor.nombres} ${monitor.apellidos}
            ${monitor.codigo} 
            ${monitor.programaAcademico} 
            ${monitor.semestre} `;
        }
        return '';
    }

    function buscarMonitorias(tipoDeFiltro, evento){
        document.querySelectorAll('input').forEach( input => {//recorremos todos los inputs
            if(input.getAttribute('filtro')!==tipoDeFiltro){//si es uno distinto al que se está ingresando
                input.value = '';//se le limpia el texto ingresado
            }
        });
        const valorParaFiltrar = evento.target.value;
        if(!valorParaFiltrar || valorParaFiltrar === ''){//si no se ingresa ningún valor
            setFiltrar(false)//no se filtra y se muestran todas las monitorias
        }
        let monitoriasFiltradasLocal;
        switch (tipoDeFiltro) {
            case 'nombre':
                monitoriasFiltradasLocal = monitorias.filter(p => p.nombreMateria.includes(valorParaFiltrar));
                break;
            case 'codigo':
                monitoriasFiltradasLocal = monitorias.filter(p => p.codigo.includes(valorParaFiltrar));
                break;
            case 'fecha':
                monitoriasFiltradasLocal = monitorias.filter(p => p.fecha.includes(valorParaFiltrar));
                break;
            case 'monitor':
                monitoriasFiltradasLocal = monitorias.filter(p => filtrarPorMonitor(p.monitor, valorParaFiltrar));
                break;
            case 'salon':
                monitoriasFiltradasLocal = monitorias.filter(p => p.salon.includes(valorParaFiltrar));
                break;
            default:
                setFiltrar(false);
        }
        setFiltrar(true);
        setMonitoriasFiltradas(monitoriasFiltradasLocal);
    }

    function filtrarPorMonitor(codigoMonitor, valorParaFiltrar){
        const monitor = monitores.find(m=>m.codigo===codigoMonitor);
        return monitor.nombres.includes(valorParaFiltrar) || monitor.apellidos.includes(valorParaFiltrar) || monitor.codigo.includes(valorParaFiltrar) 
        || monitor.programaAcademico.includes(valorParaFiltrar) || monitor.semestre.includes(valorParaFiltrar);
    }

    return (
        <DivContenedor>
            <DivTitulo>
                Monitorias
            </DivTitulo>
            <DivContenedorTabla>
                <table>
                    <thead>
                    <TrElemento>
                        <TableHeader>Nombre de la materia</TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Monitor</TableHeader>
                        <TableHeader>Fecha</TableHeader>
                        <TableHeader>Salon</TableHeader>
                    </TrElemento>
                    <TrElemento>
                        <TableHeader><input placeholder='Filtrar por nombre' filtro='nombre' onKeyUp={(evento)=>{buscarMonitorias('nombre', evento)}}/></TableHeader>
                        <TableHeader><input placeholder='Filtrar por código' filtro='codigo' onKeyUp={(evento)=>{buscarMonitorias('codigo', evento)}}/></TableHeader>
                        <TableHeader><input placeholder='Filtrar por Monitor' filtro='monitor' onKeyUp={(evento)=>{buscarMonitorias('monitor', evento)}}/></TableHeader>
                        <TableHeader><input placeholder='Filtrar por fecha' filtro='fecha' onKeyUp={(evento)=>{buscarMonitorias('fecha', evento)}}/></TableHeader>
                        <TableHeader><input placeholder='Filtrar por salon' filtro='salon' onKeyUp={(evento)=>{buscarMonitorias('salon', evento)}}/></TableHeader>
                    </TrElemento>
                    </thead>
                    <tbody>
                    {!filtrar && monitorias.map((monitoria, indiceMonitoria) => (
                        <TrElemento key={indiceMonitoria}>
                            <TableD>{monitoria.nombreMateria}</TableD>
                            <TableD>{monitoria.codigo}</TableD>
                            <TableD>{obtenerMonitorDeCodigo(monitoria.monitor)}</TableD>
                            <TableD>{monitoria.fecha}</TableD>
                            <TableD>{monitoria.salon}</TableD>
                        </TrElemento>
                    ))
                    }
                    {filtrar && monitoriasFiltradas.map((monitoria, indiceMonitoria) => (
                        <TrElemento key={indiceMonitoria}>
                            <TableD>{monitoria.nombreMateria}</TableD>
                            <TableD>{monitoria.codigo}</TableD>
                            <TableD>{obtenerMonitorDeCodigo(monitoria.monitor)}</TableD>
                            <TableD>{monitoria.fecha}</TableD>
                            <TableD>{monitoria.salon}</TableD>
                        </TrElemento>
                    ))
                    }
                    </tbody>
                </table>
            </DivContenedorTabla>
        </DivContenedor>
    );
};

export default Home;