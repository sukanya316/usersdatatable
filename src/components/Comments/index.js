import {Link} from 'react-router-dom'

import './index.css'

const Comments = props => {
  const {location} = props
  const {comments} = location.state
  console.log(comments)
  return (
    <ul>
      <h1 style={{textAlign: 'center'}}>Comments</h1>
      {comments.map(commentObj => (
        <Link
          to={{
            pathname: `/comments/${commentObj.id}`,
            state: {details: commentObj},
          }}
          className="remove-underline"
          key={commentObj.id}
        >
          {' '}
          <li className="post-card">
            <p>Comment Id: {commentObj.id}</p>
            <p>Title: {commentObj.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
export default Comments
