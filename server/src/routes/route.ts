import express, { Request, Response } from 'express'
const router = express.Router()

import { getNotes, getNote } from '../database/database'

router.get('/notes', async (req: Request, res: Response) => {
  const notes = await getNotes()
  res.json(notes)
})

router.get('/notes/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const note = await getNote(id)
  res.json(note)
})

export default router
