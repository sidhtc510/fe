'use client';

import { useEffect, useState } from 'react';
import { useSocket } from '@/app/SocketContext'; // Подключаем контекст

export default function Admin() {
    const socket = useSocket(); // Получаем сокет из контекста
    const [arr, setArr] = useState([1, 2, 3])

    useEffect(() => {
        if (socket) {
            socket.on('notification', (message) => {
                setArr([...arr, Math.max(...arr) + 1])
            });

            return () => {
                socket.off('notification');
            };
        }
    }, [socket, arr]);

    return (
        <div>
            <h1>Админка</h1>
            <div>
                {arr.map((el, index) => (<p key={index}>
                    {el}
                </p>))}
            </div>
        </div>
    );
}