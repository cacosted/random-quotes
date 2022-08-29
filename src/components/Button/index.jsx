import { FaRandom } from 'react-icons/fa'
import { RandomButton } from './styles'

export const Button = () => {
  return (
    <RandomButton>
      <span>Random</span> <FaRandom />
    </RandomButton>
  )
}
