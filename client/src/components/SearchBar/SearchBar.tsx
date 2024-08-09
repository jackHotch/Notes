'use client'

import { useState } from 'react'
import { SearchBarProps, TextInputChangeEvent } from '@/app/globals'
import styles from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

export const SearchBar = ({ data, setFilteredData }: SearchBarProps) => {
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (e: TextInputChangeEvent) => {
    const searchWord = e.target.value
    setWordEntered(searchWord)
    const newFilter = data?.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') setFilteredData([])
    else setFilteredData(newFilter)
  }

  const clearInput = () => {
    setFilteredData(data)
    setWordEntered('')
  }

  return (
    <div className={styles.input}>
      <input
        type='text'
        placeholder='Search...'
        value={wordEntered}
        onChange={handleFilter}
      />
      {wordEntered ? (
        <CloseIcon id={styles.clear_btn} onClick={clearInput} />
      ) : (
        <SearchIcon id={styles.search_btn} />
      )}
    </div>
  )
}
