import React from 'react'

export default function Addword({handler}) {
    const onClick = () => {
        const word = prompt('enter word')
        handler(word)
    }
  return (
    <button onClick={onClick}>add word</button>
  )
}
