import Link from 'next/link'
import { auth } from '@/lib/auth'

export default async function HomePage() {
  const session = await auth();
  // console.log('!session?.user', session?.user);
  return (
    <div className="min-h-full bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      {(!session?.user.email || !session?.user.name) ?
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Добро пожаловать
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Система управления пользователями с ролями
          </p>
       
        </div>
        :
        <div>
          <div>

            welcome {session?.user.name || session?.user.email}
          </div>
          <div className='flex gap-4'>

            <Link
              href="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Dashboard
            </Link>
            <Link
              href="/moderator"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Moderator
            </Link>
            <Link
              href="/admin"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Admin
            </Link>
          </div>
        </div>
      }
    </div>
  )
}