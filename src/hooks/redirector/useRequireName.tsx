import { useUserStore } from 'hooks/store/useUserStore'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRequireName = (): void => {
  const { user } = useUserStore()
  const router = useRouter()

  useEffect(() => {
    // NOTE: user情報を取得しているのにnameがない場合はリダイレクト
    if (user.isFetched && user.name === null) {
      router.push('/store')
    }
  }, [user.name, user.isFetched])
}
