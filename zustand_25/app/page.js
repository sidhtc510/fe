'use client'
import useGlobalStore from "./store/globalStore";

export default function Home() {
  const { obj1, obj2, increase } = useGlobalStore(state => state)
  return (
    <div>
      <h1>zustand</h1>
      <p className="cursor-pointer select-none" onClick={increase}>obj1 - {obj1}</p>
      <p className="cursor-pointer select-none" onClick={increase}> obj2 - {obj2}</p>
    </div>
  );
}
