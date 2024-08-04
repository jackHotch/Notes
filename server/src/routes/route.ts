import express, { Request, Response } from 'express'
const router = express.Router()

import { getDriver } from '../database/database'

router.get('/driver/:number', async (req, res) => {
  const driver = await getDriver(req.params.number)
  res.json(driver)
})

export default router
