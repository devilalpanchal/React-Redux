import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './Services/Reducer/RootReducer.jsx'
const store = createStore(RootReducer)
console.log("store data",store)
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
    <App />
    </Provider>
)
