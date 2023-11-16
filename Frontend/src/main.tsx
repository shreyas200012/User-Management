import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>


    <React.StrictMode>
      <App />
      <ToastContainer hideProgressBar={false} />
    </React.StrictMode>
  </Provider>
)
