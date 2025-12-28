import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import playersData from '../Data/playersData.json'
import { Button } from 'react-bootstrap'


const ComponentTest = () => {

    const { storeId } = useParams()
    const [showStorePlayers, setShowStorePlayers] = useState()

    useEffect(() => {

        //tengo que traer el link y decirle que si 
        const storePlayers = playersData.filter(
            player => player.store === storeId
        );
        console.log(storePlayers);

        setShowStorePlayers(storePlayers);


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>        <div>
            {showStorePlayers && showStorePlayers.map((byStorePlayer, index) => (
                <div key={index}>
                    <h1>{byStorePlayer.name}</h1>
                    <h6>Entrada: {byStorePlayer.entradaLaboral}</h6>
                    <h6>Salida: {byStorePlayer.salidaLaboral}</h6>

                </div>
            ))}
        </div>

            <Link to={'/'}>
                <Button variant="dark">Home</Button>
            </Link>
        </>

    )
}

export default ComponentTest
