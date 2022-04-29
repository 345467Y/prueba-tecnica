import React, { useEffect, useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync,listMonitoresAsyn } from '../redux/actions/actionMonitores';
import Edit from './Edit';

const ListMonitores = () => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const { monitores } = useSelector(store => store.monitores)

    useEffect(() => {
        dispatch(listMonitoresAsyn())
    }, [])

    const editar=(codigo)=>{
        //--------t=conseguir los datos de ese objeto con ese codigo--------------//
const traerElMonitor = monitores.find(t=> t.codigo ===codigo)

setModal(true)
setEnviarDatosModal(traerElMonitor)


}

    return (
        <div>
            <Table>
                <thead>
                </thead>
                <tbody>
                    {
                        monitores.map((p, index) => (
                            <tr key={index}>
                                <td>{p.nombres}</td>
                                <td>{p.apellidos}</td>
                                <td>{p.codigo}</td>
                                <td>{p.programaAcademico}</td>
                                <td>{p.semestre}</td>
                                <td>{p.cedula}</td>
                                <td>{p.informacionContacto}</td>
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

export default ListMonitores;