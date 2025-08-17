// import { auth } from '@/lib/auth'
// import { redirect } from 'next/navigation'

// export default async function AdminPage() {
//   const session = await auth()

//   if (!session?.user || session.user.role !== 'ADMIN') {
//     redirect('/unauthorized')
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">Админ панель</h1>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <p>Добро пожаловать в админ панель! Только администраторы могут видеть эту страницу.</p>
//         </div>
//       </div>
//     </div>
//   )
// }


import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { signOut } from '@/lib/auth'
import UserManagement from '@/components/UserManagement'

export default async function AdminPage() {
    const session = await auth()

    if (!session?.user || session.user.role !== 'ADMIN') {
        redirect('/unauthorized')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold">Админ панель</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">
                                {session.user.name || session.user.email}
                            </span>
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
                                {session.user.role}
                            </span>
                            <form action={async () => {
                                'use server'
                                await signOut()
                            }}>
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
                                >
                                    Выйти
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <UserManagement />
                </div>
            </main>
        </div>
    )
}