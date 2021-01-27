import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'

export type UserContext = {
  name: string | null
  token: string | null
}

export const AuthContext = createContext<UserContext>({
  name: null,
  token: null,
})

export const AuthProvider: NextPage = ({ children }) => {
  const [user, setUser] = useState<UserContext>({
    name: null,
    token: null,
  })

  const { pathname, events } = useRouter()

  useEffect(() => {
    setUser({
      name: 'name',
      token: 'token',
    })
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      // NOTE: 参考
      //       https://medium.com/@tafka_labs/auth-redirect-in-nextjs-3a3a524c0a06
      // urlの判別をuserの中身見てリダイレクトする？
      // TODO: その時の挙動を確認する

      // eslint-disable-next-line
      console.log('routeChangeイベントやでぇ', { url })
      // eslint-disable-next-line
      console.log('routeChangeイベントやでぇ', { pathname })
    }

    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [pathname])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = (): UserContext => useContext(AuthContext)
