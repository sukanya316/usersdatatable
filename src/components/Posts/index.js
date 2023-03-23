import {Link} from 'react-router-dom'
import './index.css'

const Posts = props => {
  const {location} = props
  const {posts} = location.state
  console.log(posts)
  return (
    <ul>
      <h1 style={{textAlign: 'center'}}>Posts</h1>
      {posts.map(postObj => (
        <Link
          to={{pathname: `/posts/${postObj.id}`, state: {details: postObj}}}
          className="remove-underline"
          key={postObj.id}
        >
          {' '}
          <li className="post-card">
            <p>Post Id: {postObj.id}</p>
            <p>Title: {postObj.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
export default Posts
