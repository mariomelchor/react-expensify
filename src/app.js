import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch( addExpense( { description: 'water bill', amount: 4500 } ));
store.dispatch( addExpense( { description: 'gas bill', amount: 5500, createdAt: 1000 } ));
store.dispatch( addExpense( { description: 'Rent bill', amount: 100500 } ));
store.dispatch( setTextFilter( 'bill' ));

const state = store.getState();
const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render( jsx, document.getElementById('app') );