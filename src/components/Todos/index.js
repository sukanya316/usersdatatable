import {Link} from 'react-router-dom'
import './index.css'

const Todos = props => {
  const {location} = props
  const {todos} = location.state
  console.log(todos)
  return (
    <ul>
      <h1 style={{textAlign: 'center'}}>Todos</h1>
      {todos.map(todoObj => (
        <Link
          to={{pathname: `/todos/${todoObj.id}`, state: {details: todoObj}}}
          className="remove-underline"
          key={todoObj.id}
        >
          {' '}
          <li className="post-card">
            <p>Todo Id: {todoObj.id}</p>
            <p>Title: {todoObj.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
export default Todos
