import { useQuery } from '@tanstack/react-query'
import { getNote } from '@/api'

export const useNoteId = (id: string) => {
  return useQuery({
    queryKey: ['notes', id],
    queryFn: () => getNote(id),
  })
}
