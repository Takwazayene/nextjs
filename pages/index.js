import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Component() {

  const { data: session } = useSession()
  const router = useRouter()

 /* useEffect(() => {
    if ((session)) {
      router.push('/posts')
    }
  }, [session])
*/

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <button type="button" onClick={() => router.push('/posts')}>
     posts
    </button>

      </>
    )
  }
  return ( 
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button> 
    
      <button type="button" onClick={() => router.push('/posts')}>
     posts
    </button>

    </>
    
  );
}