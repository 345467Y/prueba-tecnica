import React, { useEffect, useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync,listAsyn } from '../redux/actions/actionMonitorias';
import Edit from './Edit';

const List = () => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const { monitorias } = useSelector(store => store.monitorias)

    useEffect(() => {
        dispatch(listAsyn())
    }, [])

    const editar=(codigo)=>{
        //--------t=conseguir los datos de ese objeto con ese codigo--------------//
const traerLaMonitoria = monitorias.find(t=> t.codigo ===codigo)

setModal(true)
setEnviarDatosModal(traerLaMonitoria)


}

    return (
        <div>
            <Table>
                <thead>
                </thead>
                <tbody>
                    {
                        monitorias.map((p, index) => (
                            <tr key={index}>
                                <td>{p.nombreMateria}</td>
                                <td>{p.codigo}</td>
                                <td>{p.fecha}</td>
                                <td>{p.salon}</td>
                                <td>
                                    <Button margin={10} onClick={() => dispatch(deleteAsync(p.codigo))}> <Image onClick={() => dispatch(deleteAsync(p.codigo))}width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png'/> </Button>
                                    
                                    <Button margin={10} onClick={()=>editar(p.codigo)}> <Image onClick={()=>editar(p.codigo)} width={20} src='https://res.cloudinary.com/danimel/image/upload/v1646015685/edit_nh7sll.png' /></Button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </Table>
            {
                modal === true ? <Edit modal={enviarDatosModal}/> : ''
            }
        </div>
    );
};

export default List;