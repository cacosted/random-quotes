# Random quotes with React

![Preview Design](/)


This is a solution of random quote generator challenge from [Dev Challenges](http://devchallenges.io).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Installation](#installation)

## Overview

### The challenge

Users should be able to:

- See a random quote.
- Generate a new random quote.
- When quote author is selected, see a list of quotes from them.
- See quote genre under the author.

### Links

- Live Demo: [Demo](https://cacosted-random-quotes.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- JavaScript ES6+
- Custom hooks
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [React icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vite](https://vitejs.dev/) - Bundle tool
- [Standard](https://standardjs.com/) - Linter
- [Wouter](https://github.com/molefrog/wouter) - Router library

### What I learned

Created `customs hooks` and separate them into two different files to improve simplicity and readability. 
```js
// ❌ Before
// useQuote.js
const {
  quote, 
  setRandomQuote,
  quoteList,
  setAuthorList,
} = useQuote()

// ✅ After
// useQuote.js
const [quote, setRandomQuote] = useQuote()

// useQuoteList.js
const [quoteList] = useQuoteList(authorName)
```

Created `getQuoteData.js` service to fetch the data from the API.
```js
const API = 'https://api.quotable.io'

export const getRandomQuote = () => {
  //...Random Quote fetch
}

export const getAuthorQuotes = (author) => {
  //...Quote list fetched with author's name
}
```

Added routes with `wouter` to handle navigation between home view and author view. 
```js
// App/index.jsx
<Switch>
  <Route path='/' component={Home} />
  <Route path='/author/:name' component={Author} />
  <Route><NotFound /></Route>
</Switch>
```

Learned how to use route params to render the component depending on the given param
```js
//QuoteDetails/index.jsx
<Link to={`/author/${authorName}`}>

// Author/index.jsx
export const Author = ({ params }) => {
  const name = params.name
  return <h1>Hello {name}!</h1>
}
```

### Useful resources

- [Styled Components docs](https://styled-components.com/docs) - The official documentation of styled components, this resource was very useful to understand this package.

- [React Icons docs](https://react-icons.github.io/react-icons/) - This page is great to find the icon that you're looking for and get the name quickly on the clipboard.

- [Quotable API](https://api.quotable.io/) - This was the source of data used in this project, this API was great and easy to use.

- [Wouter usage](https://youtu.be/QBLbXgeXMU8?t=4060) - This video from `@midudev` was a great source of knowledge to understand how to use `wouter` in a real life project.

- [Wouter docs](https://github.com/molefrog/wouter) - The best way to understand in depth the usage and implementation of this library.

## Author

- Dev Challenges - [@cacosted](https://devchallenges.io/portfolio/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)

## Installation

To test this project by yourself first clone the repository, then you can use this commands:

Install project
```
npm install
```

Run local server
```
npm run dev
```

Build project
```
npm run build
```

Preview Build
```
npm run preview
```
