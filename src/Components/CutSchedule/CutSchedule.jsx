import React, { useContext, useEffect, useState } from 'react'
import { ApiPlayer } from '../../Context/ApiContext';
// import CutComponent from '../CutComponent/CutComponent';
import CutComponentDetail from '../CutComponentDetail/CutComponentDetail';

const CutSchedule = ({ byStorePlayer, colaAlmuerzo, setColaAlmuerzo, tiempoAlmuerzo }) => {

    const { horaAMinutos } = useContext(ApiPlayer)

    const TURNO_TARDE_DESDE = 13 * 60;

    const esTurnoTarde = horaAMinutos(byStorePlayer.entradaLaboral) >= TURNO_TARDE_DESDE;

    const [almorzando, setAlmorzando] = useState(null);
    // const [empleados, setEmpleados] = useState([]);
    const tiempoActual = 780; //a partir de que hora cortan seria, en este caso las 13


    useEffect(() => {
        const empleado = {
            ...byStorePlayer,
            esTurnoTarde,
        };

        setColaAlmuerzo(prev => {
            const yaExiste = prev.some(e => e.id === empleado.id);
            if (yaExiste) return prev;

            if (empleado.esTurnoTarde) {
                return [empleado, ...prev];
            }

            return [...prev, empleado];
        });
    }, [byStorePlayer, esTurnoTarde, setColaAlmuerzo]);


    // useEffect(() => {
    //     intentarAsignarAlmuerzo(tiempoActual);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [colaAlmuerzo, almorzando, tiempoActual]);

    useEffect(() => {
        if (!almorzando) return;

        if (tiempoActual >= almorzando.almuerzo.fin) {
            setAlmorzando(null);
        }
    }, [tiempoActual, almorzando]);



    //POR PRIORIDAD CON AYUDA DE TURNO TARDE
    // const agregarEmpleado = (empleado) => {
    //     if (empleado.esTurnoTarde) {
    //         // colaAlmuerzo.unshift(empleado); // prioridad
    //     }
    //else {
    //  console.log('false', empleado);

    // colaAlmuerzo.push(empleado);
    // setColaAlmuerzo(setColaAlmuerzo)
    //}
    //}




    //ASIGNACION DE ALMUERZO
    // function intentarAsignarAlmuerzo(tiempoActual) {
    //     setColaAlmuerzo(prevCola => {
    //         if (almorzando || prevCola.length === 0) return prevCola;

    //         const empleado = prevCola[0];

    //         const salidaMin = horaAMinutos(empleado.salidaLaboral);

    //         if (tiempoActual + tiempoAlmuerzo > salidaMin) {
    //             // no llega a almorzar → lo sacamos de la cola
    //             return prevCola.slice(1);
    //         }

    //         setAlmorzando({
    //             ...empleado,
    //             almuerzo: {
    //                 inicio: tiempoActual,
    //                 fin: tiempoActual + tiempoAlmuerzo
    //             }
    //         });

    //         return prevCola.slice(1);
    //     });
    // }




    return (
        <div>
            {esTurnoTarde &&
                <h4>Soy turno TARDE!!</h4>
            }
            <h6>los chicos cortan a partir de las {13}</h6>
            <p>aca tengo que poner Nombre de empleado y a que hora corta</p>

            <CutComponentDetail colaAlmuerzo={colaAlmuerzo} />
        </div >
    )
}

export default CutSchedule
