import React, { useEffect } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { listMonitoresAsyn } from '../redux/actions/actionMonitores';
import { addAsync } from '../redux/actions/actionMonitorias';
import List from './List';

const Add = () => {
    
    const dispatch = useDispatch()
    const  [values, handleInputChange, reset]=  useForm({
        nombreMateria:'',
        codigo: '',
        monitor: '',
        fecha: '',
        salon: ''
        
    })
  
    const {nombreMateria, codigo, monitor, fecha, salon} = values

    const { monitores } = useSelector(store => store.monitores)

    useEffect(() => {
        dispatch(listMonitoresAsyn())
    }, [])
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        const {nombreMateria, codigo, monitor, fecha, salon} = values;
        console.log(monitor);
        if(!nombreMateria || nombreMateria === '' || !codigo || codigo === '' || !monitor || monitor === '' || !fecha || fecha === '' || !salon || salon === ''){
            alert('Todos los valores deben ser diligenciados');
            return;
        }
        dispatch(addAsync(values))
         reset()
    }


    return (
        <div>
             <Form onSubmit={handleSubmit} margin={50}>
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

                <Button type="submit">
                    <Image width={40} src='https://res.cloudinary.com/danimel/image/upload/v1646016294/anadir_eitgpy.png' />
                </Button>
             
            </Form>

            <List/>
        </div>
    );
};

export default Add;