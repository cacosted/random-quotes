const API = 'https://api.quotable.io'
// https://api.quotable.io/quotes?author=Name%20LastName
export const getRandomQuote = () => {
  return fetch(`${API}/random`)
    .then(response => response.json())
}

export const getAuthorQuotes = (author) => {
  return fetch(`${API}/quotes?author=${author}`)
    .then(response => response.json())
}
