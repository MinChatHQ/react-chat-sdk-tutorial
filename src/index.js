import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { MinChatProvider } from '@minchat/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firstUser = {
  username: "micheal",
  name: "Micheal Saunders",
}

root.render(
  <React.StrictMode>
    <MinChatProvider
      apiKey={"YOUR_API_KEY"}
      user={firstUser} >
      <App />
    </MinChatProvider>
  </React.StrictMode>
);

reportWebVitals();
