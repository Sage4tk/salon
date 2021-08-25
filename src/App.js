import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//styling
import './App.scss';

//components
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Service} />
            <Route path="/contacts"component={Contact} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
