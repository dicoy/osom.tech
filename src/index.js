import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { GlobalHooksProvider } from '@devhammed/use-global-hook'
import { servicesStore } from './services'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalHooksProvider hooks={[ servicesStore ]}>
        <App />
      </GlobalHooksProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
