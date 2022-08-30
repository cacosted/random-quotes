import { QuoteDetails } from '../QuoteDetails'
import { StyledQuote } from './styles'
import { useQuote } from '../../hooks/useQuote'

export const Quote = () => {
  const { quote } = useQuote()

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
