import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'; // Import your Tailwind CSS here
import { Provider } from 'react-redux';
import App from './App';
import store from '../src/reducer/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
