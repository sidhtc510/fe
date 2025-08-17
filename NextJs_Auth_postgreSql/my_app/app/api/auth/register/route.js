import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(request) {
    try {
        const { name, email, password } = await request.json()

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'Все поля обязательны' },
                { status: 400 }
            )
        }

        // Проверяем, существует ли пользователь
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return NextResponse.json(
                { error: 'Пользователь уже существует' },
                { status: 400 }
            )
        }

        // Хешируем пароль
        const hashedPassword = await bcrypt.hash(password, 12)

        // Создаем пользователя
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'USER' // по умолчанию роль USER
            }
        })

        return NextResponse.json(
            { message: 'Пользователь создан успешно', userId: user.id },
            { status: 201 }
        )
    } catch (error) {
        console.error('Ошибка регистрации:', error)
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500 }
        )
    }
}