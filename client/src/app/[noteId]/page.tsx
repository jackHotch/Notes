'use client'

import { useNoteId } from '@/hooks/useNoteId'
import { NoteIdProps } from '../globals'

const Note = ({ params }: NoteIdProps) => {
  const { data: note } = useNoteId(params.noteId)
  return (
    <>
      <p>Title: {note?.title}</p>
      <div>Body: {note?.body}</div>
    </>
  )
}

export default Note
