import { getAuthorQuotes } from '../services/getQuoteData'
import { useEffect, useState } from 'react'

export const useQuoteList = (author) => {
  const [quoteList, setQuoteList] = useState([])

  const setAuthorQuotes = () => {
    getAuthorQuotes(author)
      .then(data => {
        setQuoteList(data.results)
      })
  }

  useEffect(() => {
    setAuthorQuotes()
  }, [])

  return [quoteList]
}
