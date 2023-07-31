import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Home from './components/Home';
import ThemeContextProvider from './contexts/ThemeContext';
import Skills from './components/Skills';
import About from './components/About';
function App() {
  return (
    <Router>
      <div className='container'>
        <ThemeContextProvider>
          <Switch>
            <Route exact path="/" ><Home/></Route>
            <Route exact path="/Skills" ><Skills/></Route>
            <Route exact path="/About"><About/></Route>
          </Switch>
        </ThemeContextProvider>
      </div>
    </Router>
  )
}

export default App
