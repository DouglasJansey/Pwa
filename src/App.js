import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import Home from './containers/Home';
import Post from './containers/post';
import './App.css';


function App() {
  return (
    <main>
      <section>
        <Router>
          <div>
          <Switch>
            <Route path="/:subject/:id">
            <Post />
            </Route>
            <Route path="/">
               <Home />
            </Route>
          </Switch>
          </div>
        </Router>
      </section>
    </main>

  );
}

export default App;
