import { signOut } from '@/lib/auth'

export default function SignOutButton() {
    return (
        <form action={async () => {
            'use server'
            await signOut({ redirectTo: '/' })
        }}>
            <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm cursor-pointer"
            >
                Sign out
            </button>
        </form>
    )
}