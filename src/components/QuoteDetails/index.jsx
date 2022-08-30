import { FaArrowRight } from 'react-icons/fa'
import { Details, Label } from './styles'
export const QuoteDetails = ({ children }) => {
  const details = Object.values(children)

  return (
    <Details>
      <div>
        {details.map((item, index) => (<Label key={item} id={index}>{item}</Label>))}
      </div>
      <FaArrowRight color='white' />
    </Details>
  )
}
