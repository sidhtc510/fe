'use client' // страница ошибки должна быть на стороне клиента

export default function Error({error}) {
  return (
    <div>error: {error.message}</div>
  )
}
