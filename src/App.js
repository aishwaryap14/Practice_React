import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Color from './pages/color'
import Parent from './pages/countParent'
import Add from './pages/displayAdd'
import { Provider } from 'react-redux'
import store from './index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/color' component={Color} />
            <Route exact path='/parent' component={Parent} />
            <Route exact path='/add' component={Add} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
