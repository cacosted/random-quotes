export const QuoteDetails = ({ children }) => {
  const details = Object.values(children)

  return (
    <figcaption>
      {details.map(item => (<span key={item} id={item}>{item}</span>))}
    </figcaption>
  )
}
