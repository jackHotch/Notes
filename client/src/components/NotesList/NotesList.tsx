import styles from './NotesList.module.css'
import { NotesListProps } from '@/app/globals'
import { NotePreview } from '../NotePreview'
import { useNotes } from '@/hooks'

export const NotesList = ({ filteredNotes }: NotesListProps) => {
  const { data: allNotes } = useNotes()
  return (
    <div className={styles.container}>
      {filteredNotes
        ? filteredNotes?.map((value, key) => {
            return <NotePreview key={value.id} id={value.id} title={value.title} />
          })
        : allNotes?.map((value, key) => {
            return <NotePreview key={value.id} id={value.id} title={value.title} />
          })}
    </div>
  )
}
