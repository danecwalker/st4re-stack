import { Component } from "solid-js"
import { CountButton } from "../core"

interface ICounters {
  amount: number
}

export const Counters : Component<ICounters> = ({amount} : ICounters) => {
  return (
    <div class="flex mt-8 gap-8">
      {Array.from(Array(amount)).map(() => (
        <CountButton />
      ))}
    </div>
  )
}