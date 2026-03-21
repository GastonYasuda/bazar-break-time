import React, { useContext } from 'react'
import { ApiPlayer } from '../../Context/ApiContext'
import { Form } from 'react-bootstrap'

const CheckBoxComponent = ({ empleado, campo, label }) => {

    const { actualizarPersona } = useContext(ApiPlayer)

    const handleChange = (checked) => {
        let cambios = { [campo]: checked };

        if (campo === 'dobleTurno') {
            cambios = {
                ...cambios,
                entradaLaboral: checked ? "9:00" : "10:00",
                salidaLaboral: checked ? "20:00" : "18:00"
            };
        }

        actualizarPersona(empleado.id, cambios);


    };


    return (
        <Form.Check
            type="checkbox"
            label={label}
            checked={empleado[campo] || false}
            onChange={(e) => handleChange(e.target.checked)}
        />
    )
}

export default CheckBoxComponent
