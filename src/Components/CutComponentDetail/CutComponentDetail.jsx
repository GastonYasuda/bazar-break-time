import React, { useEffect } from 'react'

const CutComponentDetail = ({ colaAlmuerzo }) => {

    // const [cutTime, setCutTime] = useState()

    // let almorzando = null; // solo uno
    // const tiempoActual = 780;

    // //ASIGNACION DE ALMUERZO
    // if (!almorzando && colaAlmuerzo.length > 0) {
    //     const empleado = colaAlmuerzo[0];

    //     if (tiempoActual + empleado.duracionAlmuerzo <= empleado.salidaMin) {
    //         empleado.almuerzo = {
    //             inicio: tiempoActual,
    //             fin: tiempoActual + empleado.duracionAlmuerzo
    //         };

    //         almorzando = empleado;
    //         colaAlmuerzo.shift();
    //     } else {
    //         // no llega a almorzar, se descarta o se marca error
    //         colaAlmuerzo.shift();
    //     }
    // }



    useEffect(() => {

        //console.log('true', colaAlmuerzo);
        // console.log(colaAlmuerzo);

    }, [colaAlmuerzo])


    return (
        <div>
            {/* {cutTime === 0 ? <h6>No tiene corte</h6> :


                <h6>Tiene corte de: {cutTime} minutos</h6>} */}
        </div>
    )
}

export default CutComponentDetail
