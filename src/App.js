import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//styling
import './App.scss';

//components
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
import Products from './components/Products';
import About from './components/About';

function App() {
  return (
    <Router>
      <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Service} />
            <Route path="/contacts"component={Contact} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
