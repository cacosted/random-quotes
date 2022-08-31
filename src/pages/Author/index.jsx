import { QuoteContainer } from '../../components/QuoteContainer'
import { Quote } from '../../components/Quote'
import { NavBar } from '../../components/NavBar'
import { Link } from 'wouter'
import { FaArrowLeft } from 'react-icons/fa'
import { useQuoteList } from '../../hooks/useQuoteList'
export const Author = ({ params }) => {
  const name = params.name.replaceAll('%20', ' ')
  const [quoteList] = useQuoteList(name)

  return (
    <div>
      <NavBar>
        <Link to='/'><a><FaArrowLeft /></a></Link>
        <a>{name}</a>
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
