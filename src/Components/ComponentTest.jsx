import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import playersData from '../Data/playersData.json'
import { Button, InputGroup } from 'react-bootstrap'
import CutComponent from './CutComponent/CutComponent'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import CutSchedule from './CutSchedule/CutSchedule'


const ComponentTest = () => {

    const { storeId } = useParams()
    const [showStorePlayers, setShowStorePlayers] = useState()
    const [cutTimeInput, setCutTimeInput] = useState('');


    useEffect(() => {

        const storePlayers = playersData.filter(
            player => player.store === storeId
        );

        setShowStorePlayers(storePlayers);


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = () => {
        console.log(cutTimeInput);

    };

    return (
        <>
            <div>
                {showStorePlayers && showStorePlayers.map((byStorePlayer, index) => (
                    <div key={index}>
                        <h1>{byStorePlayer.name}</h1>
                        <h6>Entrada: {byStorePlayer.entradaLaboral}</h6>
                        <h6>Salida: {byStorePlayer.salidaLaboral}</h6>

                        <CutComponent byStorePlayer={byStorePlayer} />
                    </div>
                ))}
            </div>

            <InputGroup className="mb-3">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Comienzo de cortes"
                    className="mb-3"
                >
                    <Form.Control
                        type="number"
                        value={cutTimeInput}
                        onChange={(e) => setCutTimeInput(e.target.value)}
                        placeholder="Comienzo de cortes"
                    />

                </FloatingLabel>
                <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit} className="mb-3">
                    Ok
                </Button>
            </InputGroup>

            <CutSchedule cutTimeInput={cutTimeInput} />


            <Link to={'/'}>
                <Button variant="dark">Home</Button>
            </Link>
        </>

    )
}

export default ComponentTest
