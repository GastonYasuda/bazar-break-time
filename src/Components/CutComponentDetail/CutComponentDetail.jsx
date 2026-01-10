import React, { useEffect } from 'react'

const CutComponentDetail = ({ entradaLaboral, salidaLaboral }) => {

    // const [cutTime, setCutTime] = useState()


    useEffect(() => {
        // if (salidaLaboral - entradaLaboral >= 11) {
        //     setCutTime(60)
        // } else if (entradaLaboral >= 14) {
        //     setCutTime(0)
        // } else {

        //     setCutTime(30)
        // }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            {/* {cutTime === 0 ? <h6>No tiene corte</h6> :


                <h6>Tiene corte de: {cutTime} minutos</h6>} */}
        </div>
    )
}

export default CutComponentDetail
