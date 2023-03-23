import './index.css'

const AlbumsDetailsPage = props => {
  const {location} = props
  const {details} = location.state
  console.log(details)
  return (
    <div
      className="album-details"
      style={{
        backgroundImage: `url(${details.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h1>Details Page</h1>
      <h4>{details.title}</h4>
      <p>{details.body}</p>
    </div>
  )
}
export default AlbumsDetailsPage
