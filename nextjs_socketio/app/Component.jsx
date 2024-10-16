'use client';
import { useSocket } from "./SocketContext";

export default function Component() {
    const socket = useSocket();
    
    const handleClick = () => {
        if (socket) {
            socket.emit('click');
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Кликни меня</button>
        </div>
    );
}