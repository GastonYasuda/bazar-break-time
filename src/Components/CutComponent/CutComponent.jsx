import React, { useContext, useEffect, useState } from 'react'
import { ApiPlayer } from '../../Context/ApiContext'
import Form from 'react-bootstrap/Form';

// import CutComponentDetail from '../CutComponentDetail/CutComponentDetail'

const CutComponent = ({ byStorePlayer, horasTrabajo }) => {

    // const [cutTime, setCutTime] = useState()
    const { duracionAlmuerzo } = useContext(ApiPlayer)


    const { entradaLaboral, salidaLaboral } = byStorePlayer

    useEffect(() => {




        // if (salidaLaboral - entradaLaboral >= 11) {
        //     setCutTime(60)

        // } else if (entradaLaboral >= 14) {
        //     setCutTime(0)

        // } else {
        //     setCutTime(30)

        // }


        // console.log(byStorePlayer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>

            <div>
                <h6>Tiempo de almuerzo {horasTrabajo}</h6>
            </div>
            {horasTrabajo === 60 &&
                <Form>


                    <div key={`default-checkbox`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`dividido-checkbox`}
                            label={`Dos de 30?`}
                        />
                    </div>



                </Form>
            }


        </>


    )
}

export default CutComponent
