import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import UserManagement from '@/app/components/UserManagement'

export default async function AdminPage() {
    const session = await auth()

    if (!session?.user || session.user.role !== 'ADMIN') {
        redirect('/unauthorized')
    }

    return (
        <div className="px-4 py-6 sm:px-0">
            <UserManagement />
        </div>
    )
}