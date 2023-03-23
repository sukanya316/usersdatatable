import {Link} from 'react-router-dom'
import './index.css'

const Albums = props => {
  const {location} = props
  const {photos} = location.state
  console.log(photos)
  return (
    <ul>
      <h1 style={{textAlign: 'center'}}>Albums</h1>
      {photos.map(albumsObj => (
        <Link
          to={{
            pathname: `/albums/${albumsObj.id}`,
            state: {details: albumsObj},
          }}
          className="remove-underline"
          key={albumsObj.albumId}
        >
          {' '}
          <li className="albums-card">
            <img
              src={albumsObj.thumbnailUrl}
              alt={`thumbnail-${albumsObj.albumId}`}
            />
            <div style={{marginLeft: '5px'}}>
              <p>Album Id: {albumsObj.albumId}</p>
              <p>Title: {albumsObj.title}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}
export default Albums
