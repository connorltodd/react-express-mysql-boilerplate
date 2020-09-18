import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Router File Imports
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';

function App() {

  // Example Connection to the Express Server
  React.useEffect(() => {
    axios.get('/api')
      .then(res => console.log(res.data))
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
