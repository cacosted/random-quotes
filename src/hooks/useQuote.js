import { useState, useEffect } from 'react'
import { getRandomQuote } from '../services/getQuoteData'

export const useQuote = () => {
  const [quote, setQuote] = useState({ text: null, details: {} })
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

  useEffect(() => {
    setRandomQuote()
  }, [])

  return [
    quote,
    setRandomQuote
  ]
}
