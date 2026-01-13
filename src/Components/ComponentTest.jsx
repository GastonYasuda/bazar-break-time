import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import playersData from '../Data/playersData.json'
import { Button } from 'react-bootstrap'
import CutComponent from './CutComponent/CutComponent'
import { ApiPlayer } from '../Context/ApiContext'
import CutSchedule from './CutSchedule/CutSchedule'


const ComponentTest = () => {

    const { storeId } = useParams()
    const [showStorePlayers, setShowStorePlayers] = useState()
    const { duracionTrabajo, duracionAlmuerzo } = useContext(ApiPlayer)


    useEffect(() => {

        const storePlayers = playersData.filter(
            player => player.store === storeId
        );

        setShowStorePlayers(storePlayers);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div>
                {showStorePlayers && showStorePlayers.map((byStorePlayer, index) => (
                    <div key={index}>
                        <h1>{byStorePlayer.name}</h1>
                        <h6>Entrada: {byStorePlayer.entradaLaboral}</h6>
                        <h6>Salida: {byStorePlayer.salidaLaboral}</h6>
                        <h6>Horas de trabajo: {duracionTrabajo(byStorePlayer)}</h6>

                        <CutComponent horasTrabajo={duracionAlmuerzo(duracionTrabajo(byStorePlayer))} />

                        <CutSchedule byStorePlayer={byStorePlayer} cutTimeInput={'hola'} />
                    </div>
                ))}
            </div>
            <br />




            <Link to={'/'}>
                <Button variant="dark">Home</Button>
            </Link>
        </>

    )
}

export default ComponentTest
