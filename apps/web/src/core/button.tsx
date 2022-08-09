import { Component, createSignal } from "solid-js";


export const CountButton : Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <button onclick={() => {
      setCount((p) => p + 1)
    }} class="bg-blue-600 text-white w-48 py-4 rounded-lg cursor-pointer ring-blue-400 ring-opacity-20 hover:ring-[1rem] transition-all">{count()}</button>
  )
}