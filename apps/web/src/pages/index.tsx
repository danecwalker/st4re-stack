import { Component, createEffect, createSignal } from "solid-js"
import { Counters } from "../components"
import { CountButton } from "../core"
import { trpc } from "../utils/trpc"

const Home : Component = () => {
  const [title, setTitle] = createSignal("ST4RE")
  const [titleHash, setTitleHash] = createSignal("")

  createEffect(async () => {
    const t = await trpc.query("hello.hello", {
      name: "ST4RE"
    })

    setTitle(t)
  })

  return (
    <div class="bg-black w-full h-screen flex flex-col justify-center items-center">
      <h1 class="text-white text-6xl font-bold">{title()}</h1>
      <p class="text-white mb-16">SolidJS, Typescript, TRPC, TailwindCSS, Turborepo, Router, ExpressJS</p>
      <h1 class="text-white text-3xl font-bold mb-8">Press Me</h1>
      <h1 class="text-white text-4xl font-bold animate-bounce mb-8">&#x2193;</h1>
      <CountButton />
      {Array.from(Array(5)).map((_, i) => {
        return <Counters amount={2 + i} />
      })}
    </div>
  )
}

export default Home