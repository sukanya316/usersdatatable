import {Link} from 'react-router-dom'
import './index.css'

const CompletedTodos = props => {
  const {location} = props
  const {completedtodos} = location.state
  return (
    <ul>
      <h1 style={{textAlign: 'center'}}>Completed Todos</h1>
      {completedtodos.map(todoObj => (
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
            <p>CompletedTodo Id: {todoObj.id}</p>
            <p>Title: {todoObj.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
export default CompletedTodos
