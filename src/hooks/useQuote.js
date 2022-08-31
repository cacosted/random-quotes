import { useState, useEffect } from 'react'
import { getRandomQuote, getAuthorQuotes } from '../services/getQuoteData'

export const useQuote = () => {
  const [quote, setQuote] = useState({ text: null, details: {} })
  const [quoteList, setQuoteList] = useState([])
  const setRandomQuote = () => {
    getRandomQuote()
      .then(quote => {
        const { author, content: text, tags: [category] } = quote
        setQuote({
          text,
          details: {
            author,
            category
          }
        })
      })
  }

  const setAuthorQuotes = (author) => {
    getAuthorQuotes(author)
      .then(data => {
        setQuoteList(data.results)
      })
  }
  useEffect(() => {
    setRandomQuote()
  }, [])

  return {
    quote,
    setRandomQuote,
    quoteList,
    setAuthorQuotes
  }
}
