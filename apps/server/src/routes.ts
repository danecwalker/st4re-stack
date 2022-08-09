import { HasherRoute, HelloRoute } from "./resources";
import { createRouter } from "./utils/trpc";

export const appRouter = createRouter()
  .merge("hello.", HelloRoute)
  .merge("hash.", HasherRoute)
  ;

export type AppRouter = typeof appRouter;