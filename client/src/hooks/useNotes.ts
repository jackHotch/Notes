import { useQuery } from '@tanstack/react-query'
import { getNotes } from '@/api'

export const useNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: () => getNotes(),
  })
}
