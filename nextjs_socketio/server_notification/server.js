const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*', // Разрешаем любые источники (на продакшене лучше указать конкретный)
    },
});

// Обрабатываем событие подключения пользователя
io.on('connection', (socket) => {
    console.log('Пользователь подключился:', socket.id);

    // Когда клиент отправляет событие "click"
    socket.on('click', () => {
        // Отправляем уведомление всем клиентам
        io.emit('notification', 'Клиент кликнул на кнопку');
    });

    // Обрабатываем отключение пользователя
    socket.on('disconnect', () => {
        console.log('Пользователь отключился:', socket.id);
    });
});

// Запускаем сервер на порту 3001
server.listen(3001, () => {
    console.log('Сервер запущен на порту 3001');
});