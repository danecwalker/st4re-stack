import { useParams } from "@solidjs/router"
import { Component, createEffect, createSignal } from "solid-js"
import { Counters } from "../../components"
import { CountButton } from "../../core"
import { trpc } from "../../utils/trpc"

const Custom : Component = () => {
  const { count } = useParams()
  const [ countHash, setCountHash ] = createSignal("")

  createEffect(async () => {
    const t = await trpc.mutation("hash.hasher", {
      input: count
    })

    setCountHash(t)
  })
  
  return (
    <div class="bg-black w-full h-screen flex flex-col justify-center items-center">
      <h1 class="text-white text-6xl font-bold">ST4RE</h1>
      <p class="text-white mb-4">Count Hash: {countHash()}</p>
      <p class="text-white mb-16">SolidJS, Typescript, TRPC, TailwindCSS, Turborepo, Router, ExpressJS</p>
      <h1 class="text-white text-3xl font-bold mb-8">Press Me</h1>
      <h1 class="text-white text-4xl font-bold animate-bounce mb-8">&#x2193;</h1>
      <CountButton />
      {Array.from(Array(Number(count))).map((_, i) => {
        return <Counters amount={2 + i} />
      })}
    </div>
  )
}

export default Custom