import * as z from 'zod';
import { createRouter } from '../../utils/trpc';
import { Hash } from './hasher.service';

export const HasherRoute = createRouter()
  .query("hash", {
    resolve: async () => {
      return `Use the mutation route for this one.`
    }
  })
  .mutation("hasher", {
    input: z.object({
      input: z.string()
    }),
    resolve: async ({ input }) => {
      return Hash(input.input)
    }
  })