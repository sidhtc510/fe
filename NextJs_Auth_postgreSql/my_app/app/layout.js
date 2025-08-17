import { Inter } from 'next/font/google'
import './globals.css'
import { auth } from '@/lib/auth'
// import { redirect } from 'next/navigation'
import SessionProvider from './components/SessionProvider'
import Header from './components/Header'
import Wrapper from './components/Wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Auth Project',
  description: 'Next.js приложение с аутентификацией и ролями',
}

export default async function RootLayout({ children }) {
  const session = await auth()
  console.log('session', session)
  // if (!session?.user) {
  //   redirect('/auth/signin')
  // }

  return (
    <html lang="ru">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Header session={session} />
          <Wrapper>
            {children}
          </Wrapper>
        </SessionProvider>
      </body>
    </html>
  )
}