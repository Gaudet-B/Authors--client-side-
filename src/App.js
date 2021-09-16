import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home'
import Create from './views/Create'
import Update from './views/Update'


function App() {
  return (
    <BrowserRouter>
      <h1 className="display-3 text-light">Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/authors/new">
          <Create />
        </Route>
        <Route exact path="/authors/edit/:id">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
