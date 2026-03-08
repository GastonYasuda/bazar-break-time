/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'
import playersData from '../Data/playersData.json'

export const ApiPlayer = createContext()

const ApiContext = ({ children }) => {


    const [empleados, setEmpleados] = useState(() => {

        const data = localStorage.getItem("playersData")

        if (data) {
            return JSON.parse(data)
        } else {
            localStorage.setItem("playersData", JSON.stringify(playersData))
            return playersData
        }
    })

    const agregarTiempoAlmuerzo = () => {
        const data = JSON.parse(localStorage.getItem("playersData")) || [];




        const nuevoArray = data.map(persona => ({
            ...persona,
            tiempoAlmuerzo: duracionAlmuerzo(duracionTrabajo(persona))
        }));

        localStorage.setItem("playersData", JSON.stringify(nuevoArray));
    }



    useEffect(() => {
        localStorage.setItem("playersData", JSON.stringify(empleados))
        agregarTiempoAlmuerzo()
    }, [empleados])



    const empleadosPorLocal = (storeId) => {
        return empleados.filter(player => player.store === storeId)
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

        return tiempoTrabajado
    }


    const duracionAlmuerzo = (horasTrabajo) => {
        if (horaPuntoAMinutos(horasTrabajo) >= 480) {
            return 60

        } else {
            return 30

        }
    }

    const sumarMinutos = (hora, minutosASumar) => {
        let [horas, minutos] = hora.split(":").map(Number);

        minutos += minutosASumar;

        if (minutos >= 60) {
            horas += Math.floor(minutos / 60);
            minutos = minutos % 60;
        }

        return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;
    }


    const test = (dato) => {
        console.log(dato);

    }

    return (
        <ApiPlayer.Provider value={{ test, horaAMinutos, horaPuntoAMinutos, duracionTrabajo, empleadosPorLocal, sumarMinutos }}>
            {children}
        </ApiPlayer.Provider>
    )
}

export default ApiContext
