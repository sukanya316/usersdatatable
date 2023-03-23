import {Link} from 'react-router-dom'
import './index.css'

const PendingTodos = props => {
  const {location} = props
  const {pendingtodos} = location.state
  return (
    <ul>
      <h1 style={{textAlign: 'center'}}>Pending Todos</h1>
      {pendingtodos.map(todoObj => (
        <Link
          to={{
            pathname: `/pendingtodos/${todoObj.id}`,
            state: {details: todoObj},
          }}
          className="remove-underline"
          key={todoObj.id}
        >
          {' '}
          <li className="post-card">
            <p>PendingTodo Id: {todoObj.id}</p>
            <p>Title: {todoObj.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
export default PendingTodos
