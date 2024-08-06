import express, { Request, Response } from 'express'
const router = express.Router()

import { getDriver, getNotes } from '../database/database'

router.get('/driver/:number', async (req, res) => {
  const driver = await getDriver(req.params.number)
  res.json(driver)
})

router.get('/notes', async (req: Request, res: Response) => {
  const notes = await getNotes()
  res.json(notes)
})

export default router
