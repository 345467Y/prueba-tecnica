import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { addAsync } from '../redux/actions/actionMonitores';
import ListMonitores from './ListMonitores';

const AddMonitor = () => {
    
    const dispatch = useDispatch()
    const  [values, handleInputChange, reset]=  useForm({
        nombres:'',
        apellidos:'',
        codigo: '',
        programaAcademico: '',
        semestre: '',
        cedula: '',
        informacionContacto: ''
        
    })
  
    const {nombres, apellidos, codigo, programaAcademico, semestre, cedula, informacionContacto} = values
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(values)
        dispatch(addAsync(values))
         reset()
    }


    return (
        <div>
             <Form onSubmit={handleSubmit} margin={50}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" name="nombres" placeholder="ingresa los nombres" value={nombres} onChange={handleInputChange} />

                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" name="apellidos" placeholder="Ingresa los apellidos" value={apellidos} onChange={handleInputChange} />

                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" name="codigo" placeholder="Ingresa el código" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Programa académico</Form.Label>
                    <Form.Control type="text" name="programaAcademico" placeholder="Ingresa el programa académico" value={programaAcademico} onChange={handleInputChange} />

                    <Form.Label>Semestre</Form.Label>
                    <Form.Control type="text" name="semestre" placeholder="Ingresa el semestre" value={semestre} onChange={handleInputChange} />
                    
                    <Form.Label>Cédula</Form.Label>
                    <Form.Control type="text" name="cedula" placeholder="Ingresa la cédula" value={cedula} onChange={handleInputChange} />

                    <Form.Label>Información de contacto</Form.Label>
                    <Form.Control type="text" name="informacionContacto" placeholder="Ingresa la información de contacto" value={informacionContacto} onChange={handleInputChange} />
                

                    
                </Form.Group>

                <Button type="submit">
                    <Image width={40} src='https://res.cloudinary.com/danimel/image/upload/v1646016294/anadir_eitgpy.png' />
                </Button>
             
            </Form>

            <ListMonitores/>
        </div>
    );
};

export default AddMonitor;