import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
    const [ isModalOpen, setModalOpen ] = useState(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
}