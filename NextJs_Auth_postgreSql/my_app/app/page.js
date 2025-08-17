import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Добро пожаловать
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Система управления пользователями с ролями
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/auth/signin"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Войти
          </Link>
          <Link
            href="/auth/signup"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  )
}