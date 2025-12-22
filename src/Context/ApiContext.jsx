import React, { createContext } from 'react'

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
