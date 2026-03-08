import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CoverLunchDetail from '../CoverLunchDetail/CoverLunchDetail';


const CoverLunch = ({ empleadoDelStore }) => {


    const [turnoManana, setTurnoManana] = useState([])
    const [turnoTarde, setTurnoTarde] = useState([])
    const [personaQueCubre, setPersonaQueCubre] = useState('')
    const [entradaPersonaQueCubre, setEntradaPersonaQueCubre] = useState('')

    useEffect(() => {
        if (empleadoDelStore) {

            // console.log('empleadoDelStore', empleadoDelStore);

            if (empleadoDelStore) {
                const empleadosTurnoTarde = empleadoDelStore.filter(
                    empleado => empleado.salidaLaboral === "20:00"
                );

                setTurnoTarde(empleadosTurnoTarde);




                const empleadosTurnoManana = empleadoDelStore.filter(
                    empleado => empleado.entradaLaboral === "9:00"
                );




                setTurnoManana(empleadosTurnoManana)
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [empleadoDelStore])

    return (
        <div>
            <Form.Select aria-label="Default select example"
                value={personaQueCubre}
                onChange={(e) => setPersonaQueCubre(e.target.value)}
            >
                <option>Quien cubre?</option>
                {/* <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> */}
                {turnoTarde.map(empleadoTarde => (
                    <option value={empleadoTarde.name} key={empleadoTarde.id}>{empleadoTarde.name}</option>
                ))}
            </Form.Select>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Entrada:
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={entradaPersonaQueCubre}
                    onChange={(e) => setEntradaPersonaQueCubre(e.target.value)}
                />
            </InputGroup>

            <CoverLunchDetail empleadoDelStore={empleadoDelStore} turnoManana={turnoManana} personaQueCubre={personaQueCubre} entradaPersonaQueCubre={entradaPersonaQueCubre} />

        </div>
    )
}

export default CoverLunch
