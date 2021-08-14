
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { logger } from '../../../lib/logger'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('hello world')
  logger.debug('some debug messages')
  logger.error('error:some debug messages')
  res.status(200).json({ name: 'John Doe' })
}
