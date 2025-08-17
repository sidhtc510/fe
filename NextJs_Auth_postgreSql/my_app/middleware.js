import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

// Определяем защищенные маршруты и требуемые роли
const protectedRoutes = {
    '/dashboard': ['USER', 'MODERATOR', 'ADMIN'],
    '/admin': ['ADMIN'],
    '/moderator': ['MODERATOR', 'ADMIN'],
}

export async function middleware(request) {
    const session = await auth()
    const { pathname } = request.nextUrl

    // Проверяем защищенные маршруты
    for (const [route, allowedRoles] of Object.entries(protectedRoutes)) {
        if (pathname.startsWith(route)) {
            // Если пользователь не авторизован
            if (!session?.user) {
                return NextResponse.redirect(new URL('/auth/signin', request.url))
            }

            // Если у пользователя нет нужной роли
            if (!allowedRoles.includes(session.user.role)) {
                return NextResponse.redirect(new URL('/unauthorized', request.url))
            }
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/admin/:path*',
        '/moderator/:path*'
    ]
}