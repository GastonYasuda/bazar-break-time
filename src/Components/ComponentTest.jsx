import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { ApiPlayer } from '../Context/ApiContext'
import CoverLunch from './CoverLunch/CoverLunch'
import CheckBoxComponent from './CheckBoxComponent/CheckBoxComponent'



const ComponentTest = () => {

    const { duracionTrabajo, empleadosPorLocal, actualizarPersona } = useContext(ApiPlayer)

    const { storeId } = useParams()
    const empleadoDelStore = empleadosPorLocal(storeId);




    useEffect(() => {
        console.log(empleadoDelStore);

        haceDoble()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const haceDoble = () => {
        const empleado = empleadoDelStore.find(emp =>
            emp.entradaLaboral === "9:00" &&
            emp.salidaLaboral === "20:00"
        );

        if (empleado) {
            actualizarPersona(empleado.id, {
                dobleTurno: true
            });
        }
    };


    return (
        <>

            <Link to={'/'}>
                <Button variant="dark">Home</Button>
            </Link>


            <div>
                <CoverLunch empleadoDelStore={empleadoDelStore} />
            </div>
            <br />
            <div >
                {empleadoDelStore && empleadoDelStore.map((byStorePlayer, index) => (

                    <div key={index} style={{ marginTop: "45px" }}>
                        <h1>{byStorePlayer.nombre}</h1>

                        <CheckBoxComponent
                            empleado={byStorePlayer}
                            campo="asiste"
                            label="Asiste"
                        />

                        <h6>Horas de trabajo: {duracionTrabajo(byStorePlayer)}</h6>

                        <h6>Tiempo de almuerzo {byStorePlayer.tiempoAlmuerzo}</h6>


                        <CheckBoxComponent
                            empleado={byStorePlayer}
                            campo="dobleTurno"
                            label="Doble turno"
                        />


                        {byStorePlayer.dobleTurno &&

                            <CheckBoxComponent
                                empleado={byStorePlayer}
                                campo="cortaEnDos"
                                label="Dos de 30?"
                            />


                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default ComponentTest
