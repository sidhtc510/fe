import { useState } from "react"

export default function MainPage() {
const [st, setSt] = useState(1)

console.log(st);
  return (
    <div>MainPage
    <button onClick={()=>setSt(st+1)}>BUTTON</button>
    </div>
  )
}
