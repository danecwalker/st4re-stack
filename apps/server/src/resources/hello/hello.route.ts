import * as z from 'zod';
import { createRouter } from '../../utils/trpc';

export const HelloRoute = createRouter()
  .query("hello", {
    input: z.object({
      name: z.string()
    }),
    resolve: async ({ input }) => {
      return `Hello, ${input.name}!`
    }
  })