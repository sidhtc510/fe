import { auth } from '@/lib/auth'

// import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()

  // if (!session?.user) {
  //   redirect('/auth/signin')
  // }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">User panel</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Information about user</h3>
          <p><strong>Email:</strong> {session.user.email}</p>
          <p><strong>Name:</strong> {session.user.name || 'Not specified'}</p>
          <p><strong>Role:</strong> {session.user.role}</p>
          <p><strong>ID:</strong> {session.user.id}</p>
        </div>
      </div>
    </div>
  )
}