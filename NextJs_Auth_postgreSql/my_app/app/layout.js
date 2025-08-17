import { Inter } from 'next/font/google'
import './globals.css'
// import SessionProvider from '@/components/SessionProvider'
import { auth } from '@/lib/auth'
import SessionProvider from './components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Auth Project',
  description: 'Next.js приложение с аутентификацией и ролями',
}

export default async function RootLayout({ children }) {
  const session = await auth()

  return (
    <html lang="ru">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}