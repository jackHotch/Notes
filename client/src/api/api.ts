'use server'

import axios from 'axios'
import { INote } from '@/app/globals'

const URL = process.env.URL

export const getNotes = async () => {
  const { data } = await axios.get(`${URL}/api/notes`)
  return data as INote[]
}

export const getNote = async (id: string) => {
  const { data } = await axios.get(`${URL}/api/notes/${id}`)
  return data as INote
}
