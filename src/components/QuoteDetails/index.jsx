import { FaArrowRight } from 'react-icons/fa'
import { Details, Label, StyledLink } from './styles'
export const QuoteDetails = ({ children }) => {
  const details = Object.values(children)

  return (
    <StyledLink href='#'>
      <Details>
        <div>
          {details.map((item, index) => (<Label key={item} id={index}>{item}</Label>))}
        </div>
        <FaArrowRight color='white' />
      </Details>
    </StyledLink>
  )
}
