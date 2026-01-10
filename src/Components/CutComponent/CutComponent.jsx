import React, { useEffect, useState } from 'react'
// import CutComponentDetail from '../CutComponentDetail/CutComponentDetail'

const CutComponent = ({ byStorePlayer }) => {

    const [cutTime, setCutTime] = useState()

    const { entradaLaboral, salidaLaboral } = byStorePlayer

    useEffect(() => {

        if (salidaLaboral - entradaLaboral >= 11) {
            setCutTime(60)

        } else if (entradaLaboral >= 14) {
            setCutTime(0)

        } else {
            setCutTime(30)

        }


        console.log(byStorePlayer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            {/* <CutComponentDetail
                entradaLaboral={byStorePlayer.entradaLaboral}
                salidaLaboral={byStorePlayer.salidaLaboral} /> */}

            <div>
                {cutTime === 0 ? <h6>No tiene corte</h6> :


                    <h6>Tiene corte de: {cutTime} minutos</h6>}
            </div>

        </ >

    )
}

export default CutComponent
