import { create } from 'zustand';

// Функция для загрузки данных из localStorage
const loadFromLocalStorage = (key) => {
    if (typeof window === 'undefined') return [];
    try {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
        console.error("Ошибка при загрузке из localStorage:", error);
        return [];
    }
};

// Функция для сохранения данных в localStorage
const saveToLocalStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error("Ошибка при сохранении в localStorage:", error);
    }
};

// Создаем store
export const useCartStore = create((set, get) => ({
    items: loadFromLocalStorage('cartItems'), // Инициализация из localStorage

    // Добавить товар в корзину
    addItem: (item) => {
        const updatedItems = [...get().items, item];
        set({ items: updatedItems });
        saveToLocalStorage('cartItems', updatedItems);
    },

    // Удалить товар из корзины
    removeItem: (id) => {
        const updatedItems = get().items.filter((item) => item.id !== id);
        set({ items: updatedItems });
        saveToLocalStorage('cartItems', updatedItems);
    },

    // Очистить корзину
    clearCart: () => {
        set({ items: [] });
        saveToLocalStorage('cartItems', []);
    },

    // incrementItem: (id) => {
    //     const targetItem = get().items.find(item => item.id === id);
    //     targetItem.quantity++
    //     // const updatedItems = [...get().items, targetItem];
    //     set({ items: targetItem });
    //     saveToLocalStorage('cartItems', updatedItems);
    // }

    incrementItem: (id) => {
        const items = get().items;
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        set({ items: updatedItems });
        saveToLocalStorage('cartItems', updatedItems);
    }
}));