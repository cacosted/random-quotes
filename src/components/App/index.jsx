import { Container } from '../Container'
import { NavBar } from '../NavBar'
import { Button } from '../Button'
import { QuoteContainer } from '../QuoteContainer'
import { Quote } from '../Quote'

export const App = () => {
  const testQuote = {
    text:
    'The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.',
    details: {
      author: 'Bill Gates',
      category: 'business'
    }
  }
  return (
    <Container>
      <NavBar>
        <Button />
      </NavBar>
      <QuoteContainer>
        <Quote text={testQuote.text} details={testQuote.details} />
      </QuoteContainer>
    </Container>

  )
}
