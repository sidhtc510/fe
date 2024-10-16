'use client'
import { createContext, useContext } from 'react';
import { useEffect, useState } from "react";
import { io } from 'socket.io-client';

const SocketContext = createContext(null);

export const useSocket = () => {
    return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketInstance = io('http://localhost:3001'); // Инициализация сокета
        setSocket(socketInstance);

        return () => {
            socketInstance.disconnect(); // Отключение сокета при размонтировании
        };
    }, []);
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};