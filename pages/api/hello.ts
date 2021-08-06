// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { getLogger } from 'log4js'

type Data = {
  name: string
}

// const logger = getLogger()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // logger.level = process.env.LOGGER_OUTPUT_LEVEL ?? ''
  console.log('hello world')
  // logger.debug('some debug messages')
  // logger.error('error:some debug messages')
  res.status(200).json({ name: 'John Doe' })
}
