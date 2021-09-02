import { Route, Switch } from 'react-router-dom';
// import Todo from './components/Todo';
// import {  } from 'reactstrap';
import AllMeetups from './pages/AllMeetups';
import Favorite from './pages/Favorite';
import NewMeetups from './pages/NewMeetups';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="">
      <Layout />
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetups />
          </Route>
          <Route path="/new-meetups">
            <NewMeetups />
          </Route>
          <Route path="/favorites">
            <Favorite />
          </Route>
        </Switch>
      {/* <h1>My Todos</h1>
      <Todo text="Learn React"/>    
      <Todo text="Master React"/>    
      <Todo text="Explore the full react course"/>     */}
    </div>
  );
}

export default App;
