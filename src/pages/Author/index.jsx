import { QuoteContainer } from '../../components/QuoteContainer'
import { Quote } from '../../components/Quote'
import { NavBar } from '../../components/NavBar'
import { Link } from 'wouter'
import { FaArrowLeft } from 'react-icons/fa'
import { useQuoteList } from '../../hooks/useQuoteList'
export const Author = ({ params }) => {
  const [quoteList] = useQuoteList(params.name)
  const name = quoteList[0]?.author
  return (
    <div>
      <NavBar>
        <Link to='/'><a><FaArrowLeft /></a></Link>
        <h1>{name}</h1>
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
