import { Dispatch, SetStateAction } from 'react'

export type TextInputChangeEvent = React.ChangeEvent<HTMLInputElement>

export interface INote {
  id: number
  created_at: string
  body: string
  locked: number
  title: string
}

export interface NoteIdProps {
  params: NoteIdParams
}

interface NoteIdParams {
  noteId: string
}

export interface SearchBarProps {
  data: INote[] | undefined
  setFilteredData: Dispatch<SetStateAction<INote[] | undefined>>
}

export interface NotesListProps {
  notes: INote[] | undefined
}
