const API = 'https://api.quotable.io'
export const getRandomQuote = () => {
  return fetch(`${API}/random`)
    .then(response => response.json())
}

export const getAuthorQuotes = (author) => {
  return fetch(`${API}/quotes?author=${author}`)
    .then(response => response.json())
}
