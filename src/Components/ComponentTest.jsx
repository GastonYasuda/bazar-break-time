import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import CutComponent from './CutComponent/CutComponent'
import { ApiPlayer } from '../Context/ApiContext'
import CutSchedule from './CutSchedule/CutSchedule'


const ComponentTest = () => {

    const { duracionTrabajo, duracionAlmuerzo, empleadosPorLocal, empleadoPorStore } = useContext(ApiPlayer)
    const { storeId } = useParams()
    const [colaAlmuerzo, setColaAlmuerzo] = useState([])



    useEffect(() => {

        empleadosPorLocal(storeId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeId])

    return (
        <>
            <div>
                {empleadoPorStore && empleadoPorStore.map((byStorePlayer, index) => (
                    <div key={index}>
                        <h1>{byStorePlayer.name}</h1>
                        <h6>Entrada: {byStorePlayer.entradaLaboral}</h6>
                        <h6>Salida: {byStorePlayer.salidaLaboral}</h6>
                        <h6>Horas de trabajo: {duracionTrabajo(byStorePlayer)}</h6>

                        <CutComponent tiempoAlmuerzo={duracionAlmuerzo(duracionTrabajo(byStorePlayer))} />

                        <CutSchedule byStorePlayer={byStorePlayer} colaAlmuerzo={colaAlmuerzo} setColaAlmuerzo={setColaAlmuerzo} tiempoAlmuerzo={duracionAlmuerzo(duracionTrabajo(byStorePlayer))} />
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
