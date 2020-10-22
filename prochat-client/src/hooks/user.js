import { getVariableValues } from 'graphql/execution/values'
import { useState, useEffect } from 'react'

/*
 * Custom hook wich fetches the current user
 */
export const useUser = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(process.env.REACT_APP_AUTH_URL)
      .then(res => {
        const { givenname, surname, windowsaccountname } = res.data
        setUser({
          userId: windowsaccountname,
          fullname: `${givenname} ${surname}`
        })
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return user
}