import styles from './NotePreview.module.css'
import { NotePreviewProps } from '@/app/globals'
import { useRouter } from 'next/navigation'

export const NotePreview = ({ id, title }: NotePreviewProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/${id}`)
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      {title}
    </div>
  )
}
