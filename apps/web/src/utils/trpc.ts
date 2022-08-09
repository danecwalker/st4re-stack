import type { AppRouter } from 'server/src/routes';
import { createTRPCClient, TRPCClient } from '@trpc/client';

export const trpc: TRPCClient<AppRouter> = createTRPCClient<AppRouter>({
  url: 'http://localhost:8080/trpc',
});