import { useRouter } from 'next/router'
import { getToken } from './localStorageUtils'

export function AuthWrapper({children}: {children: JSX.Element}){
  const router = useRouter()
  if(typeof window !== 'undefined') {
    const token = 'null' // will change to actual token
    if(!token) router.push('/')

    return <>{children}</>
  }

  return null
}
