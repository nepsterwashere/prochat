import { useState, useEffect } from 'react'

/*
 * Custom hook wich fetches the current user
 */
export const useUser = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    // TODO: Fetch user from http endpoint
    setUser({ name: "Jan" })
  }, [])

  return user
}