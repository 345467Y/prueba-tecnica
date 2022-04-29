import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { listMonitoresAsyn } from '../redux/actions/actionMonitores';
import { editAsync } from '../redux/actions/actionMonitorias';

const Edit = ({ modal }) => {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [values, handleInputChange, reset] = useForm({
        nombreMateria: modal.nombreMateria,
        codigo: modal.codigo,
        monitor: modal.monitor,
        fecha: modal.fecha,
        salon: modal.salon

    })
    const {nombreMateria, codigo, monitor, fecha, salon} = values

    const { monitores } = useSelector(store => store.monitores)

    useEffect(() => {
        dispatch(listMonitoresAsyn())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
      //  console.log(values)
       dispatch(editAsync(codigo, values))
       console.log( values)
       reset()

    }
    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Monitoria</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={()=>handleSubmit()}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre de la materia</Form.Label>
                            <Form.Control type="text" name="nombreMateria" placeholder="ingresa el nombre de la materia" value={nombreMateria} onChange={handleInputChange} />

                            <Form.Select name="monitor" value={monitor} onChange={handleInputChange}>
                                <option>Seleccionar el monitor</option>
                                {monitores.map((monitor, indiceMonitor) => (
                                    <option value={monitor.codigo} key={indiceMonitor}>{monitor.nombres + ' '+monitor.apellidos}</option>
                                    ))
                                }
                            </Form.Select>

                            <Form.Label>Codigo</Form.Label>
                            <Form.Control type="text" name="codigo" placeholder="El codigo contine dos letras y 3 numeros" value={codigo} onChange={handleInputChange} />

                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" name="fecha" placeholder="Ingresa la fecha" value={fecha} onChange={handleInputChange} />

                            <Form.Label>Salón</Form.Label>
                            <Form.Control type="text" name="salon" placeholder="Ingresa el salón" value={salon} onChange={handleInputChange} />
                        
                            </Form.Group>

                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleSubmit}>
                                Save
                            </Button>
                        </Form>

                    </Modal.Body>


                </Modal>
            </>
        </div>
    );
};

export default Edit;