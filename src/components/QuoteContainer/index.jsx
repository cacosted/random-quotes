import { Quote } from '../Quote'
import { QuoteHolder } from './styles'

const testQuote = {
  text:
  'The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.',
  details: {
    author: 'Bill Gates',
    category: 'business'
  }
}

export const QuoteContainer = () => {
  return (
    <QuoteHolder>
      <Quote text={testQuote.text} details={testQuote.details} />
    </QuoteHolder>
  )
}
