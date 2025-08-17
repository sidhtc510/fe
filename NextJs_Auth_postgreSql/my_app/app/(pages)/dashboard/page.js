import { auth } from '@/lib/auth'
import { signOut } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                Привет, {session.user.name || session.user.email}
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
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
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Пользовательская панель</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Информация о пользователе</h3>
              <p><strong>Email:</strong> {session.user.email}</p>
              <p><strong>Имя:</strong> {session.user.name || 'Не указано'}</p>
              <p><strong>Роль:</strong> {session.user.role}</p>
              <p><strong>ID:</strong> {session.user.id}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}