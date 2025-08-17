import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Обновить роль пользователя
export async function PATCH(request, { params }) {
  try {
    const session = await auth()
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Доступ запрещен' },
        { status: 403 }
      )
    }

    const { userId } = params
    const { role } = await request.json()

    if (!['USER', 'MODERATOR', 'ADMIN'].includes(role)) {
      return NextResponse.json(
        { error: 'Недопустимая роль' },
        { status: 400 }
      )
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      }
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error('Ошибка обновления пользователя:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}

// Удалить пользователя
export async function DELETE(request, { params }) {
  try {
    const session = await auth()
    
    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Доступ запрещен' },
        { status: 403 }
      )
    }

    const { userId } = params

    // Нельзя удалить самого себя
    if (userId === session.user.id) {
      return NextResponse.json(
        { error: 'Нельзя удалить себя' },
        { status: 400 }
      )
    }

    await prisma.user.delete({
      where: { id: userId }
    })

    return NextResponse.json({ message: 'Пользователь удален' })
  } catch (error) {
    console.error('Ошибка удаления пользователя:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}