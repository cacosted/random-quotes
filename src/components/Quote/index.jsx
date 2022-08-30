import { QuoteDetails } from '../QuoteDetails'
import { StyledQuote } from './styles'
export const Quote = ({ text, details }) => {
  return (
    <>
      <StyledQuote>
        {text}
      </StyledQuote>
      <QuoteDetails>
        {details}
      </QuoteDetails>
    </>
  )
}
