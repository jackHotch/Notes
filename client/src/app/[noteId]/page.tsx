import { NoteIdProps } from '../globals'

const Note = ({ params }: NoteIdProps) => {
  return <div>Note #{params.noteId}</div>
}

export default Note
