import { auth } from '@/lib/auth'

export const ROLES = {
    USER: 'USER',
    MODERATOR: 'MODERATOR',
    ADMIN: 'ADMIN'
}

export const ROLE_HIERARCHY = {
    [ROLES.USER]: 1,
    [ROLES.MODERATOR]: 2,
    [ROLES.ADMIN]: 3
}

// Проверка роли пользователя
export async function checkRole(requiredRole) {
    const session = await auth()

    if (!session?.user) {
        return false
    }

    const userRoleLevel = ROLE_HIERARCHY[session.user.role] || 0
    const requiredRoleLevel = ROLE_HIERARCHY[requiredRole] || 0

    return userRoleLevel >= requiredRoleLevel
}

// Проверка множественных ролей
export async function hasAnyRole(roles) {
    const session = await auth()

    if (!session?.user) {
        return false
    }

    return roles.includes(session.user.role)
}

// Хук для проверки ролей на клиенте
export function useRole() {
    const { data: session } = useSession()

    const hasRole = (role) => {
        if (!session?.user) return false
        const userRoleLevel = ROLE_HIERARCHY[session.user.role] || 0
        const requiredRoleLevel = ROLE_HIERARCHY[role] || 0
        return userRoleLevel >= requiredRoleLevel
    }

    const hasAnyRole = (roles) => {
        if (!session?.user) return false
        return roles.includes(session.user.role)
    }

    return {
        user: session?.user,
        hasRole,
        hasAnyRole,
        isAdmin: hasRole(ROLES.ADMIN),
        isModerator: hasRole(ROLES.MODERATOR),
        isUser: hasRole(ROLES.USER)
    }
}