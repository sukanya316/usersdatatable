import {Component} from 'react'
import UserData from '../UserData'

import './index.css'

class UserDetails extends Component {
  state = {userDetails: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)
    const data = await response.json()

    this.setState({userDetails: data})
  }

  render() {
    const {userDetails} = this.state
    return (
      <div>
        <table id="table-container">
          <tr>
            <th>User Id</th>
            <th>Company Name</th>
            <th>Person Name</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
          {userDetails.map(userObj => (
            <UserData key={userObj.id} itemObj={userObj} />
          ))}
        </table>
      </div>
    )
  }
}
export default UserDetails
