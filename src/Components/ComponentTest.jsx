import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import CutComponent from './CutComponent/CutComponent'
import { ApiPlayer } from '../Context/ApiContext'
import CoverLunch from './CoverLunch/CoverLunch'



const ComponentTest = () => {

    const { duracionTrabajo, empleadosPorLocal } = useContext(ApiPlayer)

    const { storeId } = useParams()
    const [empleadoDelStore, setEmpleadoDelStore] = useState()




    useEffect(() => {

        setEmpleadoDelStore(empleadosPorLocal(storeId))



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeId])

    return (
        <>

            <Link to={'/'}>
                <Button variant="dark">Home</Button>
            </Link>


            <div>
                <CoverLunch empleadoDelStore={empleadoDelStore} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                {empleadoDelStore && empleadoDelStore.map((byStorePlayer, index) => (
                    <div key={index}>
                        <h1>{byStorePlayer.nombre}</h1>
                        <h6>Entrada: {byStorePlayer.entradaLaboral}</h6>
                        <h6>Salida: {byStorePlayer.salidaLaboral}</h6>
                        <h6>Horas de trabajo: {duracionTrabajo(byStorePlayer)}</h6>

                        <CutComponent tiempoAlmuerzo={byStorePlayer.tiempoAlmuerzo} />


                    </div>
                ))}
            </div>
            <br />




        </>

    )
}

export default ComponentTest
