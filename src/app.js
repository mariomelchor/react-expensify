import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard page
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my expense page
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense page
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help page
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" exact={true} component={ExpenseDashboardPage}/>
      <Route path="/create" exact={true} component={AddExpensePage}/>
      <Route path="/edit" exact={true} component={EditExpensePage}/>
      <Route path="/help" exact={true} component={HelpPage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById('app') )