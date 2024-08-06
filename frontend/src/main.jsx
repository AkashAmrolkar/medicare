import React from 'react'
import ReactDOM from 'react-dom/client'
import { Bounce, ToastContainer } from 'react-toastify';

import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />    
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
