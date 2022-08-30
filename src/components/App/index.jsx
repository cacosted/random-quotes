import { Container } from '../Container'
import { NavBar } from '../NavBar'
import { Button } from '../Button'
import { QuoteContainer } from '../QuoteContainer'

export const App = () => {
  return (
    <Container>
      <NavBar>
        <Button />
      </NavBar>
      <QuoteContainer />
    </Container>

  )
}
