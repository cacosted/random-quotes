import { QuoteDetails } from '../QuoteDetails'

export const Quote = ({ text, details }) => {
  return (
    <>
      <blockquote>
        {text}
      </blockquote>
      <QuoteDetails>
        {details}
      </QuoteDetails>
    </>
  )
}
