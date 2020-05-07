import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import { Provider } from "react-redux";

import rootReducer from './redux-components/reducers/rootReducer';
import Counter from './redux-components/Counter'
const store = createStore(rootReducer);


const MainAPP = () =>(
  <div>
  <Provider store={store}>
     <App />
     <Counter/>
    </Provider>
    </div>
);

// ReactDOM.render(
//   <React.StrictMode>
//      <App />
//     </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render( <MainAPP/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
