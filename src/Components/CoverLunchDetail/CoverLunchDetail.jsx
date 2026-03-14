import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { ApiPlayer } from '../../Context/ApiContext';

const CoverLunchDetail = ({ empleadoDelStore, turnoManana, personaQueCubre, entradaPersonaQueCubre }) => {

    const { sumarMinutos } = useContext(ApiPlayer)


    const [mostrarResultado, setMostrarResultado] = useState(false)
    const [ordenAlmuerzoArray, setOrdenAlmuerzoArray] = useState([])


    useEffect(() => {
        if (personaQueCubre && entradaPersonaQueCubre && empleadoDelStore) {
            console.log('empleadoDelStore', empleadoDelStore);

            //  console.log('turnoManana', turnoManana);



            //  console.log(`Los chicos cortan a partir de las ${entradaPersonaQueCubre}, y lo cubre ${personaQueCubre}`);


        }

        if (ordenAlmuerzoArray.length !== 0) {

            //   console.log('ordenAlmuerzoArray', ordenAlmuerzoArray);
        }


    }, [personaQueCubre, entradaPersonaQueCubre, empleadoDelStore, turnoManana, ordenAlmuerzoArray])


    //funcion para que guarde en un array

    // eslint-disable-next-line no-unused-vars
    const asignarOrdenAlmuerzo = () => {

        //quien tiene 60 min de almuerzo?
        //  const primero = turnoManana.filter(persona => persona.tiempoAlmuerzo === 60)

        // console.log('primero', primero);



    }


    const botonResultado = () => {

        setMostrarResultado(true)


        let nuevoOrden = []

        // console.log('turnoManana', turnoManana);


        turnoManana.forEach((persona, index) => {

            if (index === 0) {
                nuevoOrden.push({
                    nombre: persona.nombre,
                    entradaAlmuerzo: entradaPersonaQueCubre,
                    tiempoAlmuerzo: persona.tiempoAlmuerzo
                })
            } else {
                const personaAnterior = turnoManana[index - 1]

                nuevoOrden.push({
                    nombre: persona.nombre,
                    entradaAlmuerzo: sumarMinutos(
                        nuevoOrden[index - 1].entradaAlmuerzo,
                        personaAnterior.tiempoAlmuerzo
                    ),
                    tiempoAlmuerzo: persona.tiempoAlmuerzo

                })
            }

        })


        const empleado = empleadoDelStore.find(
            persona => persona.nombre === personaQueCubre
        );

        // console.log('nuevoOrden', nuevoOrden);


        nuevoOrden.splice(2, 0, {
            nombre: personaQueCubre,
            entradaAlmuerzo: sumarMinutos(
                nuevoOrden[1].entradaAlmuerzo,
                nuevoOrden[1].tiempoAlmuerzo
            ),
            tiempoAlmuerzo: empleado.tiempoAlmuerzo

        });

        setOrdenAlmuerzoArray(nuevoOrden)

    }





    return (
        <div>

            <Button value="primary" onClick={() => botonResultado()}>Calcular</Button>

            {mostrarResultado &&
                <>
                    <h6>Los chicos cortan a partir de las {entradaPersonaQueCubre}, y cubre {personaQueCubre}</h6>
                </>
            }
            <br />

            {
                ordenAlmuerzoArray.map((persona, i) => {
                    const trabajando = ordenAlmuerzoArray.filter(
                        ordenAlmuerzoArray => ordenAlmuerzoArray.nombre !== persona.nombre
                    )

                    // const trabajando = ordenAlmuerzoArray.filter(
                    //     p => p.nombre !== persona.nombre
                    // )


                    return (
                        <div key={i}>
                            <h6>{persona.nombre} {persona.entradaAlmuerzo} - ({trabajando.map(p => p.nombre).join(", ")})</h6>
                            <p>Corta {persona.tiempoAlmuerzo} minutos</p>
                        </div>)
                })
            }





        </div >
    )
}

export default CoverLunchDetail
