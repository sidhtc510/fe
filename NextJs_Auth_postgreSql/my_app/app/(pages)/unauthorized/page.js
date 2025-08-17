import Link from 'next/link'

export default function UnauthorizedPage() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Доступ запрещен
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          У вас нет прав для доступа к этой странице
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  )
}