import React, { createContext } from 'react'
// import playersData from '../Data/playersData.json'

export const ApiPlayer = createContext()

const ApiContext = ({ children }) => {









    const test = (dato) => {
        console.log(dato);

    }

    return (
        <ApiPlayer.Provider value={{ test }}>
            {children}
        </ApiPlayer.Provider>
    )
}

export default ApiContext
