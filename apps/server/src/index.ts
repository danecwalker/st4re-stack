import express from "express";
import cors from "cors";
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext } from "./utils/trpc";
import { appRouter } from "./routes";

const app = express();
const port = 8080;

app.use(cors())

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get("/", (req, res) => {
  res.send("Use /trpc");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
