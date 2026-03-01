import React, { createContext, useEffect, useState } from 'react'
import playersData from '../Data/playersData.json'

export const ApiPlayer = createContext()

const ApiContext = ({ children }) => {


    const [empleados, setEmpleados] = useState()

    const [empleadoPorStore, setEmpleadoPorStore] = useState([])




    useEffect(() => {

        const data = localStorage.getItem("playersData")
        if (data) {
            setEmpleados(JSON.parse(data))
        } else {
            setEmpleados(playersData)
        }

    }, [])



    const empleadosPorLocal = (storeId) => {

        if (empleados) {

            setEmpleadoPorStore(empleados.filter(
                player => player.store === storeId
            ))
        }
    }




    const horaAMinutos = (hora) => {
        const [h, m] = hora.split(":").map(Number);
        return h * 60 + m;
    }

    const horaPuntoAMinutos = (hora) => {
        return hora * 60
    }

    const duracionTrabajo = (empleado) => {

        const tiempoTrabajado = (horaAMinutos(empleado.salidaLaboral) - horaAMinutos(empleado.entradaLaboral)) / 60
        //  console.log(tiempoTrabajado);


        return tiempoTrabajado


    }


    const duracionAlmuerzo = (horasTrabajo) => {


        if (horaPuntoAMinutos(horasTrabajo) >= 480) {
            return 60

        } else {
            return 30


        }
    }


    const test = (dato) => {
        console.log(dato);

    }

    return (
        <ApiPlayer.Provider value={{ test, horaAMinutos, horaPuntoAMinutos, duracionTrabajo, duracionAlmuerzo, empleadosPorLocal, empleadoPorStore }}>
            {children}
        </ApiPlayer.Provider>
    )
}

export default ApiContext
