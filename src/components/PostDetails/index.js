import './index.css'

const PostDetails = props => {
  const {location} = props
  const {details} = location.state
  console.log(details)
  return (
    <div className="details-page">
      <h1>Details Page</h1>
      <h4>{details.title}</h4>
      <p>{details.body}</p>
    </div>
  )
}
export default PostDetails
