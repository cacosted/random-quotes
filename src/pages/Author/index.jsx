import { useQuote } from '../../hooks/useQuote'
import { QuoteContainer } from '../../components/QuoteContainer'
import { Quote } from '../../components/Quote'
import { NavBar } from '../../components/NavBar'
import { Link } from 'wouter'
import { useEffect } from 'react'
export const Author = ({ params }) => {
  const name = params.name.replaceAll('%20', ' ')
  const { quoteList, setAuthorQuotes } = useQuote()

  useEffect(() => {
    setAuthorQuotes(name)
  }, [])
  return (
    <div>
      <NavBar>
        <h1>{name}</h1>
        <Link to='/'>Return</Link>
      </NavBar>
      {quoteList.map(item => {
        return (
          <QuoteContainer key={item._id}>
            <Quote quote={{ text: item.content }} list />
          </QuoteContainer>
        )
      })}
    </div>
  )
}
