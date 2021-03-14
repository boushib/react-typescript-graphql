import { ApolloProvider } from '@apollo/client'
import client from './appolo'
import Users from './Users'

import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Users />
      </div>
    </ApolloProvider>
  )
}

export default App
