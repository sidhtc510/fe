document.getElementById('enable-sound').addEventListener('click', () => {
    // Создаем аудио контекст
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    audioContext.resume().then(() => {
        console.log('Audio context активирован');
        alert('Теперь звук будет воспроизводиться при получении заказов.');
    }).catch((err) => {
        console.error('Ошибка при активации звука', err);
    });
});


function playSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Частота звука
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1); // Проигрывание 1 секунды
}

// Вызов функции при получении нового заказа
function onNewOrderReceived() {
    playSound();
}


document.getElementById('play-sound').addEventListener('click', () => {
    onNewOrderReceived()
})