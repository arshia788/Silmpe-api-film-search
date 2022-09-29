import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

// component
import Landing from './components/Landing';

// context
import ItemProviderContext from './context/ItemProviderContext';

const App = () => {
  return (
    <div>

      <ItemProviderContext>

        <Switch>

          <Route path='/films' component={Landing}/>
          <Redirect to='/films'/>
          
        </Switch>

      </ItemProviderContext>
      
    </div>
  );
};

export default App;