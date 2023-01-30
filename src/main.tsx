import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'
import { reactQueryConfig } from './config/react-query';
import './index.css'

const queryClient = reactQueryConfig();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
