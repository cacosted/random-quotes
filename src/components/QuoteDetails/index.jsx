import { FaArrowRight } from 'react-icons/fa'
import { Details, Label, StyledLink } from './styles'
import { Link } from 'wouter'
export const QuoteDetails = ({ children }) => {
  const details = Object.values(children)
  const [author] = details
  return (
    <Link to={`/author/${author}`}>
      <StyledLink>
        <Details>
          <div>
            {details.map((item, index) => (<Label key={item} id={index}>{item}</Label>))}
          </div>
          <FaArrowRight color='white' />
        </Details>
      </StyledLink>
    </Link>
  )
}
