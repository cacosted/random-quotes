import { QuoteDetails } from '../QuoteDetails'
import { StyledQuote } from './styles'

export const Quote = ({ quote, list }) => {
  return (
    <>
      <StyledQuote>
        {quote.text}
      </StyledQuote>
      {!list &&
        <QuoteDetails>
          {quote.details}
        </QuoteDetails>}
    </>
  )
}
