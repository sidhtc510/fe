
import { signOut } from '@/lib/auth'
import Link from 'next/link'
import SignOutButton from '../SignOutButton'

export default async function Header({ session }) {

    return (
        <nav className="bg-white shadow fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href={'/'}>
                            <h1 className="text-xl font-semibold">Dashboard</h1>
                        </Link>
                    </div>
                    {(session?.user.email || session?.user.name) &&
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">
                                Привет, {session?.user.name || session?.user.email}
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                {session?.user.role}
                            </span>
                            <SignOutButton />
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}
