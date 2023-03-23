import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class UserData extends Component {
  state = {
    postsArr: [],
    todosArr: [],
    commentsArr: [],
    albumsArr: [],
    photosArr: [],
  }

  componentDidMount() {
    this.getPosts()
    this.getTodos()
    this.getComments()
    this.getAlbums()
    this.getPhotos()
  }

  getPosts = async () => {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(postsUrl)
    const data = await response.json()
    this.setState({postsArr: data})
  }

  getTodos = async () => {
    const todosUrl = 'https://jsonplaceholder.typicode.com/todos'
    const response = await fetch(todosUrl)
    const data = await response.json()
    this.setState({todosArr: data})
  }

  getComments = async () => {
    const commUrl = 'https://jsonplaceholder.typicode.com/comments'
    const response = await fetch(commUrl)
    const data = await response.json()
    this.setState({commentsArr: data})
  }

  getAlbums = async () => {
    const albumsUrl = 'https://jsonplaceholder.typicode.com/albums'
    const response = await fetch(albumsUrl)
    const data = await response.json()
    this.setState({albumsArr: data})
  }

  getPhotos = async () => {
    const photosUrl = 'https://jsonplaceholder.typicode.com/photos'
    const response = await fetch(photosUrl)
    const data = await response.json()
    this.setState({photosArr: data})
  }

  render() {
    const {itemObj} = this.props
    const {postsArr, todosArr, commentsArr, albumsArr, photosArr} = this.state
    const postsCnt = postsArr.filter(Obj => Obj.userId === itemObj.id)
    const commentsCnt = commentsArr.filter(Obj => Obj.postId === itemObj.id)
    const todosCnt = todosArr.filter(Obj => Obj.userId === itemObj.id)
    const pendingTodos = todosCnt.filter(Obj => Obj.completed === false)
    const completedTodos = todosCnt.filter(Obj => Obj.completed === true)
    const albumsCnt = albumsArr.filter(Obj => Obj.userId === itemObj.id)
    const photosCnt = photosArr.filter(Obj => Obj.albumId === itemObj.id)

    console.log(itemObj)

    return (
      <tr className="bg-gray">
        <td className="">{itemObj.id}</td>
        <td>{itemObj.name}</td>
        <td>{itemObj.username}</td>
        <td>
          <p>name: {itemObj.name}, </p>
          <p>username: {itemObj.username}, </p>
          <p>
            email:
            <a href={itemObj.email} rel="_blank">
              {itemObj.email}
            </a>
            ,
          </p>
          <p>street: {itemObj.address.street},</p>
          <p>suite: {itemObj.address.suite}, </p>
          <p>city: {itemObj.address.city}, </p>
          <p>zip code: {itemObj.address.zipcode}</p>
          <p>latitude: {itemObj.address.geo.lat},</p>
          <p>longitude: {itemObj.address.geo.lng},</p>
          <p>phone: {itemObj.phone},</p>
          <p>
            website:
            <a href={itemObj.website} rel="_blank">
              {itemObj.website}
            </a>
            ,
          </p>
          <p>catchPhrase: {itemObj.company.catchPhrase}</p>
          <p>bs: {itemObj.company.bs}</p>
          {/* {`name: ${itemObj.name}, \n username: ${itemObj.username},\n\n email: ${itemObj.email},\n\n 
          street: ${itemObj.address.street},\n\n suite: ${itemObj.address.suite},\n\n
           city: ${itemObj.address.city}, \n\n zip code: ${itemObj.address.zipcode},\n\n 
           latitude: ${itemObj.address.geo.lat},\n\n longitude: ${itemObj.address.geo.lng},\n\n
            phone: ${itemObj.phone}, \n\n`} */}
        </td>
        <td style={{textAlign: 'center'}}>
          <Link
            to={{pathname: '/posts', state: {posts: postsCnt}}}
            className="remove-underline"
          >
            Posts({postsCnt.length})
          </Link>
          <br />
          <Link
            to={{pathname: '/comments', state: {comments: commentsCnt}}}
            className="remove-underline"
          >
            Comments({commentsCnt.length})
          </Link>
          <br />
          <Link
            to={{pathname: '/todos', state: {todos: todosCnt}}}
            className="remove-underline"
            style={{color: 'slateblue'}}
          >
            Todos({todosCnt.length})
          </Link>
          <br />
          <Link
            to={{
              pathname: '/pendingtodos',
              state: {pendingtodos: pendingTodos},
            }}
            style={{color: 'orange'}}
            className="remove-underline"
          >
            Pending Todos({pendingTodos.length})
          </Link>
          <br />
          <Link
            to={{
              pathname: '/completedtodos',
              state: {completedtodos: completedTodos},
            }}
            className="remove-underline"
            style={{color: 'green'}}
          >
            Completed Todos({completedTodos.length})
          </Link>
          <br />
          <Link
            to={{
              pathname: '/albums',
              state: {albums: albumsCnt, photos: photosCnt},
            }}
            className="remove-underline"
          >
            Albums({albumsCnt.length})
          </Link>
        </td>
      </tr>
    )
  }
}
export default UserData
