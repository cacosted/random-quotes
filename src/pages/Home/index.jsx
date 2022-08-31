import { useQuote } from '../../hooks/useQuote'
import { Container } from '../../components/Container'
import { NavBar } from '../../components/NavBar'
import { Button } from '../../components/Button'
import { QuoteContainer } from '../../components/QuoteContainer'
import { Quote } from '../../components/Quote'

export const Home = () => {
  const [quote, setRandomQuote] = useQuote()
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
