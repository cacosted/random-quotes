import { FaRandom } from 'react-icons/fa'
import { RandomButton } from './styles'

export const Button = ({ action }) => {
  return (
    <RandomButton onClick={action}>
      <span>Random</span> <FaRandom />
    </RandomButton>
  )
}
