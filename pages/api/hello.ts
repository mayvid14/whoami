// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

type nameData = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<nameData>) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
