import { Container } from '../Container'
import { NavBar } from '../NavBar'
import { Button } from '../Button'
import { QuoteContainer } from '../QuoteContainer'
import { Quote } from '../Quote'
import { useQuote } from '../../hooks/useQuote'

export const App = () => {
  const { quote, setRandomQuote } = useQuote()
  return (
    <Container>
      <NavBar>
        <Button action={setRandomQuote} />
      </NavBar>
      <QuoteContainer>
        <Quote quote={quote} />
      </QuoteContainer>
    </Container>

  )
}
