import { useCurrentUser } from 'hooks/useCurrentUser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRequireName = (): void => {
  const user = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (!user.isChecking) return
    if (user.name === null) {
      router.push('/store')
    }
  }, [user])
}
