import { ApolloProvider, gql, useQuery } from '@apollo/client'

const GET_USERS = gql`
  query getUsers {
    users {
      username
      password
    }
  }
`

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS)
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error!</h1>
  if (data) console.log(data.users)
  const { users } = data
  return (
    <div className="users">
      <h1>Users</h1>
      <ul>
        {users.map(({ username, password }: any) => (
          <li key={username}>
            {username} - {password}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
