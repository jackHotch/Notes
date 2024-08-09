'use client'

import { useState } from 'react'
import { Navbar, SearchBar, NotesList } from '@/components'
import { useNotes } from '@/hooks'
import { INote } from './globals'

const Home = () => {
  const { data: notes } = useNotes()
  const [filteredData, setFilteredData] = useState<INote[] | undefined>(notes)

  return (
    <>
      <Navbar />
      <SearchBar data={notes} setFilteredData={setFilteredData} />
      <NotesList notes={filteredData} />
    </>
  )
}

export default Home
