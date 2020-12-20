import { useEffect, useState } from 'react'

export const useFriendStatus = (id: string): boolean => {
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    const handleStatusChange = (status: boolean): void => {
      setIsOnline(status)
    }

    if (id === '1') {
      handleStatusChange(true)
    }
    return () => {
      handleStatusChange(false)
    }
  })

  return isOnline
}
