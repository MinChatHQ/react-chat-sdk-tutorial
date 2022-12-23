import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { MinChatProvider } from '@minchat/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firstUser = {
  id: "micheal",
  name: "Micheal Saunders",
}

root.render(
  <React.StrictMode>
    <MinChatProvider
      apiKey={906373408}
      user={firstUser} >
      <App />
    </MinChatProvider>
  </React.StrictMode>
);

reportWebVitals();
