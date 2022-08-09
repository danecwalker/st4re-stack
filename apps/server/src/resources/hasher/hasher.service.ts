import { createHash } from 'crypto';

export const Hash = (input: string) : string => {
  return createHash('sha256').update(input).digest('hex')
}