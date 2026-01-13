import React, { useContext, useEffect } from 'react'
import { ApiPlayer } from '../../Context/ApiContext';

const CutSchedule = ({ byStorePlayer, cutTimeInput }) => {

    const { horaAMinutos } = useContext(ApiPlayer)

    const TURNO_TARDE_DESDE = 13 * 60;


    const esTurnoTarde = horaAMinutos(byStorePlayer.entradaLaboral) >= TURNO_TARDE_DESDE;

    useEffect(() => {
        //console.log(byStorePlayer);
        //console.log(cutTimeInput);

        console.log('byStorePlayer.entradaMin', horaAMinutos(byStorePlayer.entradaLaboral));


        console.log('esTurnoTarde', esTurnoTarde);



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [byStorePlayer, cutTimeInput, esTurnoTarde])



    // let colaAlmuerzo = [];
    // let almorzando = null; // solo uno

    // const agregarEmpleado = (empleado) => {
    //     if (empleado.esTurnoTarde) {
    //         colaAlmuerzo.unshift(empleado); // prioridad
    //     } else {
    //         colaAlmuerzo.push(empleado);
    //     }
    // }



    //ASIGNACION DE ALMUERZO
    //     if (!almorzando && colaAlmuerzo.length > 0) {
    //   const empleado = colaAlmuerzo[0];

    //   if (tiempoActual + empleado.duracionAlmuerzo <= empleado.salidaMin) {
    //     empleado.almuerzo = {
    //       inicio: tiempoActual,
    //       fin: tiempoActual + empleado.duracionAlmuerzo
    //     };

    //     almorzando = empleado;
    //     colaAlmuerzo.shift();
    //   } else {
    //     // no llega a almorzar, se descarta o se marca error
    //     colaAlmuerzo.shift();
    //   }
    // }

    //VER RESULTADO
    //     const resultado = calcularAlmuerzos(empleados);
    // setEmpleados(resultado);


    return (
        <div>
            <h6>los chicos cortan a partir de las {cutTimeInput}</h6>
            <p>aca tengo que poner Nombre de empleado y a que hora corta</p>
        </div >
    )
}

export default CutSchedule
