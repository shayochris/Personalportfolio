import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Home from './components/Home';
import ThemeContextProvider from './contexts/ThemeContext';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className='container'>
        <ThemeContextProvider>
          <Switch>
            <Route exact path="/" ><Home/></Route>
            <Route exact path="/Skills" ><Skills/></Route>
            <Route exact path="/About"><About/></Route>
            <Route exact path="/Projects"><Projects/></Route>
            <Route exact path="/Contact"><Contact/></Route>
          </Switch>
        </ThemeContextProvider>
      </div>
    </Router>
  )
}

export default App
