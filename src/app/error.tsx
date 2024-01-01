'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error, "error in error.js")
  }, [error])
 
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h2>{error.message}</h2>
    </div>
  )
}