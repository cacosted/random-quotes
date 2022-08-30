import { QuoteDetails } from '../QuoteDetails'
import { StyledQuote } from './styles'

export const Quote = ({ quote }) => {
  return (
    <>
      <StyledQuote>
        {quote.text}
      </StyledQuote>
      <QuoteDetails>
        {quote.details}
      </QuoteDetails>
    </>
  )
}
