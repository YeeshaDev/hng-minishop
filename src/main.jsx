import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ToastContainer position="top-right" />
      <App />
      </Provider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
