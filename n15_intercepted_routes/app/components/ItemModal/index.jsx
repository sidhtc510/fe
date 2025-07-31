'use client';
import { useRouter } from 'next/navigation';

export default function ItemModal({ children }) {
    const router = useRouter();

    const closeModal = () => {
        router.back();
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xs"
            onClick={closeModal}
        >
            <div
                className=" p-6 border border-gray-400 rounded relative max-w-md w-full shadow-lg"
                onClick={stopPropagation}
            >
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-black"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}