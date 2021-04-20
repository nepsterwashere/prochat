import { useEffect, useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser({
      userId: window.userId,
      fullname: window.username
    })
  }, [])

  return user
}