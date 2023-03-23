import {BrowserRouter, Switch, Route} from 'react-router-dom'

import UserDetails from './components/UserDetails'
import Posts from './components/Posts'
import PostDetails from './components/PostDetails'
import Todos from './components/Todos'
import Comments from './components/Comments'
import Albums from './components/Albums'
import PendingTodos from './components/PendingTodos'
import CompletedTodos from './components/CompletedTodos'
import AlbumsDetailsPage from './components/AlbumsDetailsPage'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserDetails} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={PostDetails} />
      <Route exact path="/todos" component={Todos} />
      <Route exact path="/comments" component={Comments} />
      <Route exact path="/todos/:id" component={PostDetails} />
      <Route exact path="/comments/:id" component={PostDetails} />
      <Route exact path="/albums" component={Albums} />
      <Route exact path="/albums/:id" component={AlbumsDetailsPage} />
      <Route exact path="/pendingtodos" component={PendingTodos} />
      <Route exact path="/completedtodos" component={CompletedTodos} />
      <Route exact path="/completedtodos/:id" component={PostDetails} />
      <Route exact path="/pendingtodos/:id" component={PostDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
